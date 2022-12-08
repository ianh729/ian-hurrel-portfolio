import Link from "next/link"
import styles from '../styles/Home.module.css'

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div>
                <Link className={styles.styledlink} href = "/">
                    Home
                </Link>
                <Link className={styles.styledlink} href = "/projects">
                    Projects
                </Link>
            </div>
        </div>
    )
}

export default Navbar