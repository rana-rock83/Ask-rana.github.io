import { motion } from "framer-motion";
import type { Education } from "@/data/resumeData";
import { GraduationCap, Calendar, Building2 } from "lucide-react";

const EducationCard = ({ edu }: { edu: Education }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ type: "spring", stiffness: 300, damping: 24 }}
    className="glass-card top-accent-border p-5 space-y-2"
  >
    <div className="flex items-start gap-3">
      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
        <GraduationCap size={18} className="text-primary" />
      </div>
      <div className="min-w-0">
        <h4 className="font-display font-semibold text-foreground text-sm leading-snug">{edu.title}</h4>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1"><Building2 size={12} />{edu.institution}</span>
          <span className="inline-flex items-center gap-1"><Calendar size={12} />{edu.period}</span>
        </div>
        <p className="text-sm text-foreground/80 mt-2 leading-relaxed">{edu.description}</p>
      </div>
    </div>
  </motion.div>
);

export default EducationCard;
