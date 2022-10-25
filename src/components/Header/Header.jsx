import styles from "./Header.module.css"

export default function Header() {
  return (
    <header className={styles.header}>
        <a href="#" className={styles.title}>Home</a>
        <a href="/movies">Films</a>


    </header>
  )
}
