import { useState } from 'react';
import styles from '../../styles/Ex14.module.css'

export default function PaginaPost({postagem, usuarioAutenticado ,usuarios, comentarios}) {

    const [novoComentario, setNovoComentario] = useState("")

    const comentariosDoPost = comentarios.filter(
        (comentario) => comentario.idPost === postagem.id
    );

    const autorPost = usuarios.find(
        (usuario) => usuario.id === postagem.idAutor
    );

    function envioDeComentario(e) {
        e.preventDefault();

        if(!usuarioAutenticado) {
            alert("É necessario estar autenticado em uma conta para comentar!")
            return
        }
        if(novoComentario == "" || novoComentario == " ") {
            alert("O campo precisa estar preenchido!")
            return
        }

        const hoje = new Date();
        const dataFormatada = hoje.toLocaleDateString("sv-SE");

        comentarios.push({
            idPost: postagem.id,
            idAutor: usuarioAutenticado.id,
            conteudo: novoComentario,
            dataPostagem: dataFormatada,
            totalCurtidas: 0
        });

        setNovoComentario("");
    }

    return (
        <div className={styles.alinhamentoPaginaPost}>
            <div className={styles.paginaPost}>
                <div className={styles.cardPost}>
                    <div className={styles.flexComentarioImg}>     
                        <img src={autorPost.img} alt={autorPost.nome} />                 
                        <p><strong>{autorPost.nome}</strong></p>            
                    </div>
                    <h3>{postagem.titulo}</h3>
                    <p className={styles.dataPostagem}>{postagem.dataPostagem}</p>
                    <p className={styles.ConteudoPostagem}>{postagem.conteudo}</p>
                    <p><strong>{postagem.totalCurtidas} Curtidas</strong></p>
                </div>
                <div className={styles.cardPostComentar}>
                    <form onSubmit={envioDeComentario} className={styles.formulario}>
                        <h3>Comente na postagem</h3>
                        <input
                            type="text"
                            className={styles.inputForm}
                            placeholder="Digite seu comentário" 
                            value={novoComentario}               
                            onChange={(e) => setNovoComentario(e.target.value)}
                        />
                        <button type="submit">Enviar</button>
                    </form>
                </div>
                <div className={styles.listaComentarios}>
                    <h3>Comentários</h3>
                    {comentariosDoPost.length == 0 ? (
                        <p>Nenhum comentário ainda...</p>
                    ) : (
                        comentariosDoPost.map((comentario, i) => {
                            const autor = usuarios.find(
                                (usuario) => usuario.id === comentario.idAutor
                            );
                            return (
                                <div key={i} className={styles.cardComentario}>
                                    <div className={styles.flexComentarioImg}>     
                                        <img src={autor.img} alt={autor.nome} />                 
                                        <p><strong>{autor.nome}</strong></p>            
                                    </div>
                                    <p className={styles.dataPostagem}>{comentario.dataPostagem}</p>
                                    <p>{comentario.conteudo}</p>
                                    <p><strong>{comentario.totalCurtidas} curtidas</strong></p>
                                </div>
                            );
                        })
                    )}
                </div>
            </div>
        </div>
    );
}