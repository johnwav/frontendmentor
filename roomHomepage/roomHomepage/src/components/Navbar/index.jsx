import logo from "./images/logo.svg";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav>
      <div className={styles.logo} >
        <img src={logo} alt={"room"}></img>
      </div>
      <ul className={styles.navItems}>
        <li className={styles.navItem}>home</li>
        <li>shop</li>
        <li>about</li>
        <li>contact</li>
      </ul>
    </nav>
  );
}
