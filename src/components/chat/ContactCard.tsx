import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Globe, MapPin } from "lucide-react";

interface ContactCardProps {
  email: string;
  phone: string;
  linkedin: string;
  behance: string;
  location: string;
}

const items = [
  { icon: Mail, key: "email" as const, prefix: "mailto:" },
  { icon: Phone, key: "phone" as const, prefix: "tel:" },
  { icon: Linkedin, key: "linkedin" as const, prefix: "" },
  { icon: Globe, key: "behance" as const, prefix: "" },
  { icon: MapPin, key: "location" as const, prefix: "" },
] as const;

const ContactCard = (props: ContactCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ type: "spring", stiffness: 300, damping: 24 }}
    className="glass-card top-accent-border p-5 space-y-2.5"
  >
    {items.map(({ icon: Icon, key, prefix }) => {
      const val = props[key];
      const isLink = prefix || key === "linkedin" || key === "behance";
      return (
        <div key={key} className="flex items-center gap-3 text-sm">
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
            <Icon size={15} className="text-primary" />
          </div>
          {isLink ? (
            <a
              href={prefix ? `${prefix}${val}` : (val.startsWith("http") ? val : `https://${val}`)}
              target={key === "email" || key === "phone" ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="text-primary hover:underline truncate"
            >
              {val}
            </a>
          ) : (
            <span className="text-foreground">{val}</span>
          )}
        </div>
      );
    })}
  </motion.div>
);

export default ContactCard;
