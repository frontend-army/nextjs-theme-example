'use client'
import { useContext } from 'react';

import ThemeContext from '../ThemeProvider/ThemeContext';

export default function ThemeSetter() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <>
      <button onClick={setTheme}>Switch theme</button>
      <p>Current theme: {theme}</p>
    </>
  )
}
