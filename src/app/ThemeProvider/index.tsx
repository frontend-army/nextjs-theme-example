'use client';
import React, { useEffect, useState } from 'react';
import ThemeContext, { ThemeState } from './ThemeContext';
import styles from './styles.module.scss';

const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
const defaultTheme = prefersDarkMode ? 'dark' : 'light';

export default function ThemeProvider({ children }: React.PropsWithChildren) {
  const [theme, setTheme] = useState<'light' | 'dark'>();

  useEffect(() => {
    const lsTheme = localStorage.getItem("globalTheme") as ThemeState['theme'];
    if (lsTheme) {
      setTheme(lsTheme);
    } else {
      setTheme(defaultTheme)
    }
  }, []);

  useEffect(() => {
    if (theme) {
      localStorage.setItem("globalTheme", theme);
    }
  }, [theme]);

  const handleChangeTheme = () => setTheme((current) => current === 'light' ? 'dark' : 'light')

  return (
    <ThemeContext.Provider value={{ theme: theme ?? defaultTheme, setTheme: handleChangeTheme }}>    
      <main className={`${styles.theme} ${styles[theme ?? defaultTheme]}`}>
        {children}
      </main>
    </ThemeContext.Provider>
  )
}
