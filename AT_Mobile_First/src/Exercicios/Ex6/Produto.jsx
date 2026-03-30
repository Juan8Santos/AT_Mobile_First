import styles from '../../styles/Ex6.module.css'

export default function Produto({ produto, produtos, setProdutos }) {

    function aumentarQuantidade() {
        const novaLista = produtos.map(p => {
            if (p.id === produto.id) {
                return { ...p, quantidade: p.quantidade + 1 }
            }
            return p
        })
        setProdutos(novaLista)
    }

    function diminuirQuantidade() {
        const novaLista = produtos.map(p => {
            if (p.id === produto.id && p.quantidade > 1) {
                return { ...p, quantidade: p.quantidade - 1 }
            }
            return p
        })
        setProdutos(novaLista)
    }

    function removerProduto() {
        const novaLista = produtos.filter(p => p.id !== produto.id)
        setProdutos(novaLista)
    }

    return (
        <div className={styles.cardProduto}>
            <div className={styles.divInfoProduto}>
                <img src={produto.img} alt={produto.nome} className={styles.imgProduto} />
                <div className={styles.divInfoProdutoTexto}>
                    <h2 className={styles.h2Ex6}>{produto.nome}</h2>
                    <h3 className={styles.h3Ex6}>R${produto.preco.toFixed(2)}</h3>
                    <div className={styles.divBotoesQuantidade}>
                        <button className={styles.btnQuantidadeMenos} onClick={diminuirQuantidade}>-</button>
                        <p>{produto.quantidade}</p>
                        <button className={styles.btnQuantidadeMais} onClick={aumentarQuantidade}>+</button>
                    </div>
                </div>
            </div>
            <div className={styles.divTotalProduto}>
                <button className={styles.btnRemover} onClick={removerProduto}>Remover</button>
                <h2 className={styles.h2Ex6}>R${(produto.preco * produto.quantidade).toFixed(2)}</h2>
            </div>
        </div>
    )
}