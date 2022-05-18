import { useContext } from "react";
import { ChangeEvent } from "../@types/event.types";
import { ThemeContextType, Theme } from "../@types/theme";
import { ThemeContext } from "../context/themeContext";

const ThemeWrapper = ({ children }: { children: React.ReactNode }) => {
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

export default ThemeWrapper;
