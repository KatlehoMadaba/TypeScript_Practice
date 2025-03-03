import { useThemeState, useThemeAction } from "../providers/ThemeProvider";
const ThemeSwitcher: React.FC = () => {
  const { theme } = useThemeState();
  const { changeTheme } = useThemeAction();
  return (
    <div style={{ background: theme, padding: "20px", textAlign: "center" }}>
      <h2>Current Theme: {theme}</h2>
      <button onClick={() => changeTheme("blue")}>Blue Theme</button>
      <button onClick={() => changeTheme("green")}>Green Theme</button>
    </div>
  );
};
export default ThemeSwitcher;