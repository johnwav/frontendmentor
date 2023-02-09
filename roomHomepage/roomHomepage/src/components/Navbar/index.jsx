import logo from "./images/logo.svg";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav>
      <div className={styles.logo}>
        <img src={logo} alt={"room"}></img>
      </div>
      <ul className={styles.navItems}>
        <li className={styles.navItem}>home</li>
        <li className={styles.navItem}>shop</li>
        <li className={styles.navItem}>about</li>
        <li className={styles.navItem}>contact</li>
      </ul>
    </nav>
  );
}
