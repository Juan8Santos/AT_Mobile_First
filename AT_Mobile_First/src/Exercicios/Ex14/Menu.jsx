import styles from '../../styles/Ex14.module.css'
import { useState } from "react";

export default function Menu({usuarios, usuarioAutenticado, setUsuarioAutenticado, setPostagemAtiva, setFiltro}) {
  const [menu, setMenu] = useState(false);
  const [menuLogin, setMenuLogin] = useState(false)

  function definirUsuario(usuario) {
    setUsuarioAutenticado(usuario)
    setMenuLogin(false)
  }

  return (
    <nav className={styles.navbar}>
      <button
        className={styles.btnAlterarMenu}
        onClick={() => {
            setMenu(!menu);
            setMenuLogin(false);
        }}
      >
        ☰
      </button>
      <h2 onClick={() => setPostagemAtiva(null)} style={{ cursor: "pointer" }}>Forum.com</h2>
      <ul className={`${styles.menu} ${menu ? styles.active : ""}`}>
        <li>
            <a onClick={() => { setFiltro("todas"); setMenu(false); }} style={{cursor: "pointer"}}>
            Todas
            </a>
        </li>
        <li>
            <a onClick={() => { setFiltro("curtidas"); setMenu(false); }} style={{cursor: "pointer"}}>
            Mais curtidos
            </a>
        </li>
        <li>
            <a onClick={() => { setFiltro("comentarios"); setMenu(false); }} style={{cursor: "pointer"}}>
            Mais comentados
            </a>
        </li>
    </ul>
    <ul className={`${styles.menuUser} ${menuLogin ? styles.active : ""}`}>
        {!usuarioAutenticado ? (
            usuarios.map((usuario, i) => (
            <li
                key={i}
                onClick={() => definirUsuario(usuario)}
                style={{ cursor: "pointer" }}
            >
                <img
                className={styles.imgUser}
                src={usuario.img}
                alt="User"
                />
                <a>{usuario.nome}</a>
            </li>
            ))
        ) : (
            <>
            <li>
                <a>Bem vindo {usuarioAutenticado.nome}!</a>
            </li>
            <li>
                <a
                onClick={() => {
                    setUsuarioAutenticado(null);
                    setMenuLogin(false);
                }}
                style={{ cursor: "pointer" }}
                >
                Sair
                </a>
            </li>
            </>
        )}
    </ul>
      <div className={styles.userIcon}>
        <a href="#">
            <img
                className={styles.imgUser}
                src={!usuarioAutenticado ? "https://cdn-icons-png.flaticon.com/512/44/44562.png" : usuarioAutenticado.img}
                alt="User"
                onClick={() => {
                    setMenuLogin(!menuLogin);
                    setMenu(false);
                }}
            />
        </a>
      </div>
    </nav>
  );
}
