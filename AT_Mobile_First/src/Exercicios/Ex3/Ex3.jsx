import paisagem from '../../assets/Paisagem.avif'

import styles from '../../styles/Ex3.module.css'
import {useState} from 'react'

export default function Ex3() {
    const [quantidadeCaixas, setQuantidadeCaixas] = useState(5);

    const listaCaixas = [];

    for (let i = 0; i < quantidadeCaixas; i++) {
        listaCaixas.push(<Caixa quantidadeCaixas={quantidadeCaixas} setQuantidadeCaixas={setQuantidadeCaixas} />);
    }

    return (
        <div className="container-exercicios">
            <BotaoAdicionarRemoverCaixas quantidadeCaixas={quantidadeCaixas} setQuantidadeCaixas={setQuantidadeCaixas} />
            <div className={styles.containerCaixas}>
                {listaCaixas.map((caixa, i) => (
                    <div key={i} className={styles.caixa}>
                        {caixa}
                    </div>
                ))}
            </div>
        </div>
    )
}

function Caixa() {
    return <img src={paisagem} alt="Paisagem"/>
}

function BotaoAdicionarRemoverCaixas( {quantidadeCaixas, setQuantidadeCaixas}) {
    
    function adicionarCaixa() {
        setQuantidadeCaixas(quantidadeCaixas + 1);
    }

    function removerCaixa() {
        if (quantidadeCaixas > 0) {
            setQuantidadeCaixas(quantidadeCaixas - 1);
        }
    }

    return (
        <div className={styles.containerAdicionarCaixas}>
            <button onClick={() => removerCaixa()}>-</button>
            <p>Quantidade de caixas: {quantidadeCaixas}</p>
            <button onClick={() => adicionarCaixa()}>+</button>
        </div>
    )
}