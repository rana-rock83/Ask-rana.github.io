import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ChatMessageProps {
  isBot: boolean;
  children: ReactNode;
}

const ChatMessage = ({ isBot, children }: ChatMessageProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className={`flex ${isBot ? "justify-start" : "justify-end"} w-full`}
    >
      <div
        className={`
          max-w-[85%] md:max-w-[75%]
          ${
            isBot
              ? "glass-card top-accent-border px-5 py-4"
              : "bg-primary text-primary-foreground px-4 py-3 rounded-lg"
          }
        `}
      >
        <div className="text-sm leading-relaxed paragraph-spaced font-body">{children}</div>
      </div>
    </motion.div>
  );
};

export default ChatMessage;
