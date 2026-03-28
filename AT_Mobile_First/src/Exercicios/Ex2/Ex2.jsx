import styles from '../../styles/Ex2.module.css'
import reactIcon from '../../assets/reactIcon.png'

export default function Ex2() {
    return (
        <div className="container-exercicios">
            <nav className={styles.navEx2}>
                <div className={styles.menu}>
                    <img src={reactIcon} alt="React Icon" className={styles.imgReact} />
                    <p>≡</p>
                </div>
                <ul className={styles.listaItems}>
                    <li className={styles.item1}>Perfil</li>
                    <li className={styles.item2}>Postagens</li>
                    <li className={styles.item3}>Amigos</li>
                    <li className={styles.item4}>Fotos</li>
                    <li className={styles.item5}>Vídeos</li>
                    <li className={styles.item6}>Mensagens</li>
                    <li className={styles.item7}>Notificações</li>
                    <li className={styles.item8}>Configurações</li>
                </ul>
            </nav>
        </div>
    )
}