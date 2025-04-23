// src/hooks/useThemeColors.jsx
import { useContext } from "react";
import { ThemeContext } from "./components/contexts/ThemeContext"; // update path if different

export const useThemeColors = () => {
  const { theme } = useContext(ThemeContext);

  return {
    bgColor: theme === "light" ? "bg-[#f0f0f0]" : "bg-[#090909]",
    borderClass: theme === "light" ? "border-[#c0bebe]" : "border-[#444]",
    textColor: theme === "light" ? "text-[#090909]" : "text-white",
    nameColor: theme === "light" ? "text-[#222222]" : "text-[#dddddd]",
    dateColor: theme === "light" ? "text-[#666666]" : "text-[#aaaaaa]",
    tagColor: theme === "light" ? "text-[#888888]" : "text-[#555]",
    pinTheme: theme === "light" ? "text-blue-500" : "text-blue-500",
    pinTheme2: theme === "light" ? "text-gray-800" : "text-gray-300",
  };
};
