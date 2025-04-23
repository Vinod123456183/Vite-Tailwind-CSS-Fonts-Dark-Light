import React, { useContext } from "react";
import { useThemeColors } from "../../colors";
import Header from "./Header";

function Home() {
  const { pinTheme, pinTheme2, bgColor } = useThemeColors();
  return (
    <>
      <Header />
      <div className={`min-h-screen px-12 py-8 ${bgColor} ${pinTheme}`}>
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Welcome Home</h1>
        </div>
        <p className="mb-4 font-courier-prime-bold-italic">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
          ratione, dolorem debitis fugit temporibus sint quaerat. Nam deleniti
          quod alias!
        </p>
        <p className="mb-4 font-courier-prime-bold-italic">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
          ratione, dolorem debitis fugit temporibus sint quaerat. Nam deleniti
          quod alias!
        </p>
      </div>
    </>
  );
}

export default Home;

// Old Method
/*

import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import Header from "./Header";
const { pinTheme, pinTheme2, bgColor } = useThemeColors();

function Home() {
  return (
    <>
      <Header />
      <div className={min-h-screen px-12 py-8 ${bgColor} ${pinTheme}}>
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Welcome Home</h1>
        </div>
        <p className="mb-4 font-courier-prime-bold-italic">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
          ratione, dolorem debitis fugit temporibus sint quaerat. Nam deleniti
          quod alias!
        </p>
        <p className="mb-4 font-courier-prime-bold-italic">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
          ratione, dolorem debitis fugit temporibus sint quaerat. Nam deleniti
          quod alias!
        </p>
      </div>
    </>
  );
}
export default Home;

*/
