import { motion } from "framer-motion";
import type { Experience } from "@/data/resumeData";
import { Briefcase, Calendar, Building2 } from "lucide-react";

const ExperienceCard = ({ exp }: { exp: Experience }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ type: "spring", stiffness: 300, damping: 24 }}
    className="glass-card top-accent-border p-5 space-y-3"
  >
    <div className="flex items-start gap-3">
      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
        <Briefcase size={18} className="text-primary" />
      </div>
      <div className="min-w-0">
        <h4 className="font-display font-semibold text-foreground text-sm leading-snug">{exp.title}</h4>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1"><Building2 size={12} />{exp.company}</span>
          <span className="inline-flex items-center gap-1"><Calendar size={12} />{exp.period}</span>
        </div>
      </div>
    </div>
    <ul className="space-y-1.5 text-sm text-foreground/80">
      {exp.bullets.map((b, i) => (
        <li key={i} className="flex items-start gap-2">
          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0" />
          <span>{b}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);

export default ExperienceCard;
