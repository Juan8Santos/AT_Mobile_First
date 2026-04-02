import usuarios from "./Data/usuarios"
import postagens from "./Data/postagens"
import comentarios from "./Data/comentarios"

import Menu from "./Menu"
import HomePage from "./HomePage"
import PaginaPost from "./PaginaPost"

import styles from '../../styles/Ex14.module.css'
import { useState } from "react"

export default function Ex14() {

    const [usuarioAutenticado, setUsuarioAutenticado] = useState(null)
    const [postagemAtiva, setPostagemAtiva] = useState(null)
    const [filtro, setFiltro] = useState("todas");

    let postagensFiltradas = [...postagens];

    if (filtro === "curtidas") {
    postagensFiltradas = postagensFiltradas
        .sort((a, b) => b.totalCurtidas - a.totalCurtidas)
        .slice(0, 5);
    }

    if (filtro === "comentarios") {
    postagensFiltradas = postagensFiltradas
        .sort((a, b) => {
        const totalA = comentarios.filter(comentario => comentario.idPost === a.id).length;
        const totalB = comentarios.filter(comentario => comentario.idPost === b.id).length;
        return totalB - totalA;
        })
        .slice(0, 5);
    }

    return (
        <div className={styles.containerPrincipal}>
            <header><Menu usuarios={usuarios} usuarioAutenticado={usuarioAutenticado} setUsuarioAutenticado={setUsuarioAutenticado} setPostagemAtiva={setPostagemAtiva} setFiltro={setFiltro}/></header>
            <main>
                {!postagemAtiva ? (
                    <HomePage 
                        setPostagemAtiva={setPostagemAtiva} 
                        postagens={postagensFiltradas} 
                    />
                    ) : (
                    <PaginaPost 
                        postagem={postagemAtiva} 
                        usuarioAutenticado={usuarioAutenticado} 
                        usuarios={usuarios} 
                        comentarios={comentarios}
                    />
                )}
            </main>
            <div className={styles.conteudoRespostas}></div>
        </div>
    )
}