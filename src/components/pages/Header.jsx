import React from "react";
import ToggleButton from "./ToggleButton";
import { useThemeColors } from "../../colors";
const Header = () => {
  const { pinTheme, pinTheme2, bgColor } = useThemeColors(); //importing color for dark n light theme
  return (
    <header className="flex items-center justify-between py-4 px-12">
      <ToggleButton />

      <p className={` text-[50px] ${pinTheme}`}>text</p>
    </header>
  );
};

export default Header;
