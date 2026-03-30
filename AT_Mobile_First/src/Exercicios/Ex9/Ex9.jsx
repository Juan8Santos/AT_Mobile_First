import styles from '../../styles/Ex9.module.css'
import { useState } from "react";

export default function Ex9() {
  return <NavBar />
}

function NavBar() {
  const [menu, setmenu] = useState(false);

  return (
    <nav className={styles.navbar}>
      <button
        className={styles.btnAlterarMenu}
        onClick={() => setmenu(!menu)}
      >
        ☰
      </button>
      <h2>Site.com</h2>
      <div className={styles.userIcon}>
        <a href="#">
            <img
                className={styles.imgUser}
                src="https://cdn-icons-png.flaticon.com/512/44/44562.png"
                alt="User"
            />
        </a>
      </div>
      <ul className={`${styles.menu} ${menu ? styles.active : ""}`}>
        <li>
          <a href="#">Produtos</a>
        </li>
        <li>
          <a href="#">Serviços</a>
        </li>
        <li>
          <a href="#">Sobre</a>
        </li>
        <li>
          <a href="#">Contato</a>
        </li>
      </ul>
    </nav>
  );
}
