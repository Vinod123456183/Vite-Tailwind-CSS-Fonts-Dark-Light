import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

function Log() {
  const { theme } = useContext(ThemeContext);
  const textColor = theme === "light" ? "text-[#333]" : "text-[#888]";

  return (
    <div className={`flex flex-col min-h-screen px-12 py-8 ${textColor}`}>
      <h1>Log</h1>
      <p>Some content here...</p>
      <p>More content...</p>
    </div>
  );
}

export default Log;
