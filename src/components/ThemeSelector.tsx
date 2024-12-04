import { useEffect, useState } from 'react';

const ThemeSelector = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark ? 'dark' : 'light');
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className="fixed top-32 lg:right-10 top-16 right-10 z-0">
      <span
        className="bg-black dark:bg-white p-4 rounded-full cursor-pointer hover:scale-110 transition-transform duration-300"
        onClick={toggleTheme}
      >
        {
            theme === 'dark' ? 
            <i className="fa-solid fa-sun text-black"></i>
                : 
            <i className="fa-solid fa-moon text-yellow-200"></i>
        }
      </span>
    </div>
  );
};

export default ThemeSelector;


