import reactIcon from '../../assets/reactIcon.png'
import userIcon from '../../assets/userIcon.png'
import styles from '../../styles/Ex1.module.css'

export default function Ex1() {
    return (
        <div className="container-exercicios">
            <nav className={styles.navEx1}>
                <div>
                    <img src={reactIcon} alt="React Icon" className={styles.imgReact}/>
                </div>
                <div>
                    <ul>
                        <li>
                            <a>produtos</a>
                        </li>
                        <li>
                            <a>serviços</a>
                        </li>
                        <li>
                            <a>ajuda</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <img src={userIcon} alt="User Icon" className={styles.imgUser} />
                </div>
            </nav>
        </div>
    )
}