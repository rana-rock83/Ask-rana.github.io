import { useState, useEffect } from "react";

interface TypingEffectProps {
  text: string;
  speed?: number;
  onComplete?: () => void;
}

const TypingEffect = ({ text, speed = 15, onComplete }: TypingEffectProps) => {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDisplayed("");
    setDone(false);
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(interval);
        setDone(true);
        onComplete?.();
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <span className="paragraph-spaced">
      {displayed}
      {!done && <span className="inline-block w-0.5 h-4 bg-primary ml-0.5 animate-blink align-middle" />}
    </span>
  );
};

export default TypingEffect;
