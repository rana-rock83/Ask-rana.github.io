import { useState, useRef, useEffect, useCallback, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowDown } from "lucide-react";
import ChatMessage from "@/components/chat/ChatMessage";
import ChatInput from "@/components/chat/ChatInput";
import ChipBar from "@/components/chat/ChipBar";
import TypingEffect from "@/components/chat/TypingEffect";
import ExperienceCard from "@/components/chat/ExperienceCard";
import ProjectCard from "@/components/chat/ProjectCard";
import SkillsCard from "@/components/chat/SkillsCard";
import ContactCard from "@/components/chat/ContactCard";
import EducationCard from "@/components/chat/EducationCard";
import FloatingParticles from "@/components/chat/FloatingParticles";
import DarkModeToggle from "@/components/chat/DarkModeToggle";
import {
  persona,
  skills,
  experiences,
  projects,
  education,
  chips,
  type ChipId,
} from "@/data/resumeData";

interface Message {
  id: string;
  isBot: boolean;
  text?: string;
  cards?: ReactNode;
  typing?: boolean;
}

function getResponse(chipId: ChipId): { text: string; cards?: ReactNode } {
  switch (chipId) {
    case "about":
      return {
        text: `Hi! I'm ${persona.name}, a ${persona.role} based in ${persona.location}. ${persona.summary}`,
      };
    case "experience":
      return {
        text: `I have over 15 years of design experience across leadership and hands-on roles. Here's a summary of my career journey:`,
        cards: (
          <div className="space-y-3 mt-3">
            {experiences.map((exp, i) => (
              <ExperienceCard key={i} exp={exp} />
            ))}
          </div>
        ),
      };
    case "skills":
      return {
        text: "Here are my core competencies and design skills:",
        cards: (
          <div className="mt-3">
            <SkillsCard skills={skills} />
          </div>
        ),
      };
    case "projects":
      return {
        text: "I've worked on a diverse range of products — from digital signage to Web3 marketplaces. Here are some highlights:",
        cards: (
          <div className="space-y-3 mt-3">
            {projects.map((p, i) => (
              <ProjectCard key={i} project={p} />
            ))}
          </div>
        ),
      };
    case "education":
      return {
        text: "Here's my educational background and certifications:",
        cards: (
          <div className="space-y-3 mt-3">
            {education.map((edu, i) => (
              <EducationCard key={i} edu={edu} />
            ))}
          </div>
        ),
      };
    case "contact":
      return {
        text: "Feel free to reach out through any of these channels:",
        cards: (
          <div className="mt-3">
            <ContactCard
              email={persona.email}
              phone={persona.phone}
              linkedin={persona.linkedin}
              behance={persona.behance}
              location={persona.location}
            />
          </div>
        ),
      };
    case "resume":
      return { text: "" };
    default:
      return { text: "I'm not sure about that. Try clicking one of the chips below!" };
  }
}

function matchChip(input: string): ChipId | null {
  const lower = input.toLowerCase();
  const map: [string[], ChipId][] = [
    [["about", "who", "introduce", "yourself", "tell me", "bio"], "about"],
    [["experience", "work", "career", "job", "history", "roles"], "experience"],
    [["skill", "expertise", "competenc", "tools", "tech"], "skills"],
    [["project", "portfolio", "case stud", "work sample"], "projects"],
    [["education", "degree", "university", "certif", "diploma", "study"], "education"],
    [["contact", "email", "phone", "reach", "connect", "linkedin"], "contact"],
    [["resume", "cv", "download"], "resume"],
  ];
  for (const [keywords, id] of map) {
    if (keywords.some((k) => lower.includes(k))) return id;
  }
  return null;
}

const Index = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [activeChip, setActiveChip] = useState<ChipId | null>(null);
  const [isTyping, setIsTyping] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [showScrollBtn, setShowScrollBtn] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const distFromBottom = el.scrollHeight - el.scrollTop - el.clientHeight;
    setShowScrollBtn(distFromBottom > 200);
  }, []);

  useEffect(() => {
    if (!isTyping) scrollToBottom();
  }, [messages, isTyping, scrollToBottom]);

  const addBotResponse = useCallback((chipId: ChipId) => {
    if (chipId === "resume") {
      window.open("/Rana_Munshi_Resume.pdf", "_blank");
      return;
    }

    setIsTyping(true);
    setActiveChip(chipId);
    const { text, cards } = getResponse(chipId);
    const id = Date.now().toString();

    setMessages((prev) => [...prev, { id, isBot: true, text, cards, typing: true }]);

    setTimeout(() => {
      setMessages((prev) =>
        prev.map((m) => (m.id === id ? { ...m, typing: false } : m))
      );
      setIsTyping(false);
    }, Math.min(text.length * 15 + 300, 4000));
  }, []);

  const handleChipClick = (chipId: ChipId) => {
    if (isTyping) return;
    setShowIntro(false);

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      isBot: false,
      text: chips.find((c) => c.id === chipId)?.label || chipId,
    };
    setMessages((prev) => [...prev, userMsg]);

    setTimeout(() => addBotResponse(chipId), 400);
  };

  const handleSend = (text: string) => {
    if (isTyping) return;
    setShowIntro(false);

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      isBot: false,
      text,
    };
    setMessages((prev) => [...prev, userMsg]);

    const matched = matchChip(text);
    if (matched) {
      setTimeout(() => addBotResponse(matched), 400);
    } else {
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now().toString(),
            isBot: true,
            text: "I can tell you about Rana's background, experience, skills, education, projects, or contact info. Try clicking one of the chips below!",
          },
        ]);
      }, 400);
    }
  };

  return (
    <div className="h-dvh flex flex-col bg-background bg-mesh noise-overlay">
      <FloatingParticles />

      {/* Header */}
      <header className="shrink-0 px-4 pt-4 pb-2 flex items-center justify-between relative z-10 max-w-[900px] mx-auto w-full">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
            <Sparkles size={18} className="text-primary" />
          </div>
          <div>
            <h1 className="font-display font-bold text-base text-foreground leading-none">
              Ask Rana
            </h1>
            <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-accent">
              AI Portfolio Assistant
            </span>
          </div>
        </div>
        <DarkModeToggle />
      </header>

      {/* Chat area */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex-1 overflow-y-auto px-4 pb-4 relative z-10"
      >
        <div className="max-w-[800px] mx-auto space-y-4 pt-2">
          <AnimatePresence>
            {showIntro && messages.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="flex flex-col items-center text-center py-16 md:py-24 space-y-6"
              >
                <motion.div
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15, delay: 0.1 }}
                  className="w-16 h-16 rounded-2xl flex items-center justify-center"
                  style={{ background: "var(--gradient-accent)" }}
                >
                  <Sparkles size={28} className="text-primary-foreground" />
                </motion.div>
                <div>
                  <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground">
                    Ask anything about{" "}
                    <span className="gradient-text">Rana Munshi</span>
                  </h2>
                  <p className="text-muted-foreground text-sm mt-2 max-w-md mx-auto leading-relaxed">
                    Explore Rana's work, experience and skills through conversation.
                  </p>
                </div>
                <ChipBar
                  chips={chips}
                  activeChip={activeChip}
                  onChipClick={handleChipClick}
                />
              </motion.div>
            )}
          </AnimatePresence>

          {messages.map((msg) => (
            <ChatMessage key={msg.id} isBot={msg.isBot}>
              {msg.isBot && msg.text && msg.typing ? (
                <TypingEffect text={msg.text} speed={15} />
              ) : (
                msg.text
              )}
              {msg.isBot && !msg.typing && msg.cards}
            </ChatMessage>
          ))}

          <div ref={bottomRef} />
        </div>
      </div>

      {/* Scroll to bottom */}
      <AnimatePresence>
        {showScrollBtn && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToBottom}
            className="fixed bottom-28 left-1/2 -translate-x-1/2 z-20
                       w-10 h-10 rounded-full bg-primary text-primary-foreground
                       flex items-center justify-center shadow-lg
                       hover:scale-110 transition-transform cursor-pointer"
            aria-label="Scroll to latest"
          >
            <ArrowDown size={18} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Sticky bottom */}
      <div className="shrink-0 px-4 pb-4 pt-2 relative z-10">
        <div className="max-w-[800px] mx-auto space-y-3">
          {messages.length > 0 && (
            <ChipBar
              chips={chips}
              activeChip={activeChip}
              onChipClick={handleChipClick}
            />
          )}
          <ChatInput onSend={handleSend} disabled={isTyping} />
        </div>
      </div>
    </div>
  );
};

export default Index;
