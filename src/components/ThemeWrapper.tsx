import { useContext } from "react";
import { ThemeContextType, Theme, ChangeEvent } from "../@types";
import { ThemeContext } from "../context/themeContext";

export const ThemeWrapper = ({ children }: { children: React.ReactNode }) => {
  const { theme, changeTheme } = useContext(ThemeContext) as ThemeContextType;
  const handleThemeChange = (e: ChangeEvent) => {
    changeTheme(e.target.value as Theme);
  };

  return (
    <div className="Theme-wrapper" data-theme={theme}>
      <select name="toggleTheme" onChange={handleThemeChange}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
      {children}
    </div>
  );
};
