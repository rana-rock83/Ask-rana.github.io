import { motion } from "framer-motion";
import type { Project } from "@/data/resumeData";
import { FolderOpen, CheckCircle } from "lucide-react";

const ProjectCard = ({ project }: { project: Project }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ type: "spring", stiffness: 300, damping: 24 }}
    className="glass-card top-accent-border p-5 space-y-3"
  >
    <div className="flex items-start gap-3">
      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
        <FolderOpen size={18} className="text-accent" />
      </div>
      <div>
        <h4 className="font-display font-semibold text-foreground text-sm">{project.name}</h4>
        <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{project.description}</p>
      </div>
    </div>
    <div className="space-y-1.5">
      {project.outcomes.map((o, i) => (
        <div key={i} className="flex items-start gap-2 text-sm text-foreground/80">
          <CheckCircle size={14} className="text-primary mt-0.5 shrink-0" />
          <span>{o}</span>
        </div>
      ))}
    </div>
  </motion.div>
);

export default ProjectCard;
