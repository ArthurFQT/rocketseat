import styles from "./Header.module.css";

import igniteLogo from "../assets/Ignite-logo.svg.svg";

console.log(styles);

export function Header() {
  return (
    <header className={styles.Header}>
      <img src={igniteLogo} alt="Logo ignite" />
      {/* <strong>Ignite Feed</strong> */}
    </header>
  );
}
