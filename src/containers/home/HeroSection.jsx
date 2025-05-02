import React, { useState, useEffect } from "react";
import { useTranslation } from "../../hooks/useTranslation";

const HeroSection = () => {
  const t = useTranslation().hero;
  const fullText = t.title;
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    if (!fullText || fullText.length === 0) return;

    let index = 0;
    let timeoutId;

    const typeNext = () => {
      setTypedText(fullText.slice(0, index + 1)); // get accurate substring
      index++;
      if (index < fullText.length) {
        timeoutId = setTimeout(typeNext, 60);
      }
    };

    // Clear text and start typing
    setTypedText("");
    timeoutId = setTimeout(typeNext, 100); // small delay before first letter

    return () => clearTimeout(timeoutId); // cleanup on language change
  }, [fullText]);

  return (
    <section id="home" className="relative overflow-hidden bg-white min-h-screen flex items-center px-6 md:px-24">
      <div className="absolute -top-20 -left-32 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-300 via-purple-200 to-pink-100 rounded-full opacity-30 animate-blob blur-3xl z-0"></div>

      <div className="relative z-10 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight mb-6">
          {typedText}
          <span className="animate-pulse">|</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-10 animate-fade-in">
          {t.subtitle}
        </p>
        <div className="flex gap-4 flex-wrap">
          <button
            className="px-8 py-3 bg-black text-white text-lg rounded-full hover:bg-gray-800 transition"
            onClick={() => (window.location.href = "#contact")}
          >
            {t.cta}
          </button>
          <button
            className="px-8 py-3 border border-black text-black text-lg rounded-full hover:bg-black hover:text-white transition"
            onClick={() => window.open("/resume.pdf", "_blank")}
          >
            See CV
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
