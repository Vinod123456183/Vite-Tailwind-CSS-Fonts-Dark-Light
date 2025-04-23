import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

// Old Method For Dark And Light Theme

function Login() {
  const { theme } = useContext(ThemeContext); // ✅ Now it's inside the component

  const bgColor =
    theme === "dark" ? "bg-[#fff] text-[#000]" : "bg-[#000] text-[#fff]";

  return <div className={`${bgColor}`}>Login</div>;
}

export default Login;
