import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const DarkModeToggle = () => {
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      return document.documentElement.classList.contains("dark");
    }
    return false;
  });

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="w-9 h-9 rounded-xl bg-secondary flex items-center justify-center
                 text-foreground hover:bg-primary/10 transition-colors cursor-pointer"
      aria-label="Toggle dark mode"
    >
      {dark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
};

export default DarkModeToggle;
