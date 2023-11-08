import styles from './page.module.scss'
import ThemeProvider from './ThemeProvider';
import ThemeSetter from './ThemeSetter';

export default function Home() {
  return (
    <ThemeProvider>
      <ThemeSetter />
      <p className={styles.randomText}>This is a random text</p>
    </ThemeProvider>
  )
}
