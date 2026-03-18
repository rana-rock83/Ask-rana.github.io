import { motion } from "framer-motion";
import { User, Briefcase, Zap, FolderOpen, Mail, Download, GraduationCap } from "lucide-react";
import type { Chip, ChipId } from "@/data/resumeData";

const iconMap: Record<string, React.ElementType> = {
  User,
  Briefcase,
  Zap,
  FolderOpen,
  Mail,
  GraduationCap,
  Download,
};

interface ChipBarProps {
  chips: Chip[];
  activeChip: ChipId | null;
  onChipClick: (id: ChipId) => void;
}

const ChipBar = ({ chips, activeChip, onChipClick }: ChipBarProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      {chips.map((chip, i) => {
        const Icon = iconMap[chip.icon];
        const isActive = activeChip === chip.id;
        return (
          <motion.button
            key={chip.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05, type: "spring", stiffness: 400, damping: 25 }}
            onClick={() => onChipClick(chip.id)}
            className={`
              inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-sm font-medium
              transition-all duration-200 cursor-pointer select-none
              ${
                isActive
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-chip text-foreground hover:bg-primary hover:text-primary-foreground"
              }
            `}
          >
            {Icon && <Icon size={14} />}
            {chip.label}
          </motion.button>
        );
      })}
    </div>
  );
};

export default ChipBar;
