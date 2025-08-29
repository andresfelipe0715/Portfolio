// ThemeToggle.jsx
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle({ size = "sm" }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  // sizes mapping
  const sizes = {
    sm: "h-4 w-4",
    lg: "h-6 w-6", // bigger for home
  };

  return (
    <button
      aria-label="Toggle theme"
      title="Toggle theme"
      onClick={toggleTheme}
    >
      {isDarkMode ? (
        <Sun className={`${sizes[size]} text-yellow-300`} />
      ) : (
        <Moon className={`${sizes[size]} text-blue-900`} />
      )}
    </button>
  );
}
