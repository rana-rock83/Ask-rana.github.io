import { motion } from "framer-motion";

interface SkillsCardProps {
  skills: Record<string, string[]>;
}

const SkillsCard = ({ skills }: SkillsCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ type: "spring", stiffness: 300, damping: 24 }}
    className="glass-card top-accent-border p-5 space-y-4"
  >
    {Object.entries(skills).map(([category, items]) => (
      <div key={category}>
        <h4 className="font-display font-semibold text-foreground text-xs uppercase tracking-wider mb-2">
          {category}
        </h4>
        <div className="flex flex-wrap gap-1.5">
          {items.map((skill) => (
            <span
              key={skill}
              className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium
                         bg-primary/8 text-primary border border-primary/10
                         hover:bg-primary hover:text-primary-foreground transition-all duration-200 cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    ))}
  </motion.div>
);

export default SkillsCard;
