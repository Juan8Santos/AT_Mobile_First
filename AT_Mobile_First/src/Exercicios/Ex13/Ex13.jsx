import styles from '../../styles/Ex13.module.css'
import { useState } from "react";

export default function Ex13() {
  return <IniciarQuiz />
}

function IniciarQuiz() {
    const perguntas = [
    {
        pergunta: "O que significa Mobile-First?",
        resposta1: "Desenvolver primeiro para desktop",
        resposta2: "Desenvolver primeiro para mobile",
        resposta3: "Ignorar telas pequenas",
        resposta4: "Focar apenas em tablets",
        respostaCorreta: 2,
    },
    {
        pergunta: "O que é responsividade?",
        resposta1: "Deixar o site bonito",
        resposta2: "Adaptar o layout para diferentes telas",
        resposta3: "Usar apenas CSS",
        resposta4: "Criar animações",
        respostaCorreta: 2,
    },
    {
        pergunta: "Qual unidade é mais indicada para responsividade?",
        resposta1: "px",
        resposta2: "cm",
        resposta3: "rem/em",
        resposta4: "pt",
        respostaCorreta: 3,
    },
    {
        pergunta: "O que melhora a usabilidade?",
        resposta1: "Interface confusa",
        resposta2: "Botões pequenos",
        resposta3: "Botões claros e visíveis",
        resposta4: "Texto difícil de ler",
        respostaCorreta: 3,
    },
    {
        pergunta: "Para que servem media queries?",
        resposta1: "Criar banco de dados",
        resposta2: "Alterar o layout conforme o tamanho da tela",
        resposta3: "Criar APIs",
        resposta4: "Salvar dados",
        respostaCorreta: 2,
    },
    {
        pergunta: "Qual dessas práticas é melhor para mobile?",
        resposta1: "Botões pequenos",
        resposta2: "Scroll horizontal",
        resposta3: "Botões grandes e acessíveis",
        resposta4: "Texto muito pequeno",
        respostaCorreta: 3,
    },
    {
        pergunta: "O que é viewport?",
        resposta1: "Banco de dados",
        resposta2: "Área visível da tela",
        resposta3: "Servidor",
        resposta4: "Framework",
        respostaCorreta: 2,
    },
    {
        pergunta: "Qual é uma boa prática de usabilidade?",
        resposta1: "Esconder informações importantes",
        resposta2: "Cores aleatórias",
        resposta3: "Muitos elementos na tela",
        resposta4: "Usar navegação clara",
        respostaCorreta: 4,
    },
    {
        pergunta: "Dark mode é útil porque:",
        resposta1: "Melhora leitura em ambientes escuros",
        resposta2: "Aumenta a velocidade da internet",
        resposta3: "Substitui o CSS",
        resposta4: "Cria banco de dados",
        respostaCorreta: 1,
    },
    {
        pergunta: "Qual abordagem é mais recomendada hoje?",
        resposta1: "Desktop-first",
        resposta2: "Mobile-first",
        resposta3: "Sem responsividade",
        resposta4: "Somente tablet",
        respostaCorreta: 2,
    },
    ];

    const [indice, setIndice] = useState(0);
    const [pontos, setPontos] = useState(0);

    function reiniciarQuiz() {
        setIndice(0);
        setPontos(0);
    }

    function verificar(respostaEscolhida) {
        if (respostaEscolhida === perguntas[indice].respostaCorreta) {
        setPontos(pontos + 1);
        }

        setIndice(indice + 1);
    }

    if (indice >= perguntas.length) {
        let classeNota = `${styles.notaRuim}`;

        if (pontos > 7) classeNota = `${styles.notaAlta}`;
        else if (pontos > 5) classeNota = `${styles.notaMedia}`;

        return (
            <div className={styles.displayFimDoQuiz}>
                <h1>Fim do quiz!</h1>
                <h3 className={classeNota}>Pontuação: {pontos}</h3>
                <button className={styles.botaoJogarNovamente} onClick={reiniciarQuiz}>
                Jogar novamente
                </button>
            </div>
        );
    }

    const perguntaAtual = perguntas[indice];

    return (
        <div className={styles.containerSuper}>
        <DisplayQuiz {...perguntaAtual} aoResponder={verificar} />
        </div>
    );
    }

    function DisplayQuiz({
    pergunta,
    resposta1,
    resposta2,
    resposta3,
    resposta4,
    aoResponder,
    }) {
    return (
        <div className={styles.displayQuiz}>
        <div className={styles.areaPergunta}>
            <h2 className={styles.tituloEx}>Super Quiz</h2>
            <p className={styles.perguntaQuiz}>{pergunta}</p>
        </div>
        <div className={styles.areaResposta}>
            <button className={styles.opcao1} onClick={() => aoResponder(1)}>
            {resposta1}
            </button>
            <button className={styles.opcao2} onClick={() => aoResponder(2)}>
            {resposta2}
            </button>
            <button className={styles.opcao3} onClick={() => aoResponder(3)}>
            {resposta3}
            </button>
            <button className={styles.opcao4} onClick={() => aoResponder(4)}>
            {resposta4}
            </button>
        </div>
        </div>
    );
    }