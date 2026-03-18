import { useState, type KeyboardEvent } from "react";
import { Send } from "lucide-react";

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
}

const ChatInput = ({ onSend, disabled }: ChatInputProps) => {
  const [value, setValue] = useState("");

  const handleSend = () => {
    const trimmed = value.trim();
    if (!trimmed || disabled) return;
    onSend(trimmed);
    setValue("");
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="glass-card flex items-center gap-3 px-4 py-3 mx-auto max-w-[800px] w-full">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        placeholder="Ask me anything about Rana..."
        className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground outline-none text-sm font-body"
      />
      <button
        onClick={handleSend}
        disabled={disabled || !value.trim()}
        className="w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center
                   transition-all duration-200 hover:scale-105 active:scale-95
                   disabled:opacity-40 disabled:hover:scale-100 cursor-pointer"
        aria-label="Send message"
      >
        <Send size={16} />
      </button>
    </div>
  );
};

export default ChatInput;
