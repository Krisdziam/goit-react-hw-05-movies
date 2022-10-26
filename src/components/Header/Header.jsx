import styles from "./Header.module.css"
import { NavLink, Link, Outlet } from "react-router-dom";

export default function Header() {
  return (
    <>
    <header className={styles.header}>

        <Link className={styles.title} to="/">Home</Link>
<Link className={styles.title} to="/movies">Movies</Link>

    </header>
    <Outlet/>
    </>
  )
}
