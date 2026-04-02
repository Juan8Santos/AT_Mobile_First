import styles from '../../styles/Ex14.module.css'

export default function HomePage( {setPostagemAtiva, postagens} ) {
    return (
        <div className={styles.homePage}>
            <div className={styles.areaCardPostagem}>
                {postagens.map((postagem, i) => (
                    <CardPost key={i} postagem={postagem} setPostagemAtiva={setPostagemAtiva}/>
                ))}
            </div>
        </div>
    );
}

function CardPost({postagem, setPostagemAtiva}) {
    return (
        <div className={styles.cardPostagem} onClick={() => setPostagemAtiva(postagem)}>
            <h3>{postagem.titulo}</h3>
            <p className={styles.dataPostagem}>{postagem.dataPostagem}</p>
            <p className={styles.ConteudoPostagem}>
                {
                    postagem.conteudo.length > 120
                    ? postagem.conteudo.slice(0, 120) + "..."
                    : postagem.conteudo
                }
            </p>
            <p><strong>{postagem.totalCurtidas} Curtidas</strong></p>
        </div>
    );
}