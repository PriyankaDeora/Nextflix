import styles from "@/app/styles/navbar.module.css"
import Link from "next/link"
import Nav from "./Nav"

function Header() {
  return (
    <header className={styles.main_header}>

        <div className={styles.navbar_brand}>
            <Link href='/'>
              <h2 className={styles.logo}>NextFlix</h2>
            </Link>

        </div>

        <Nav />

    </header>
  )
}

export default Header