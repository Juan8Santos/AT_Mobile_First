const postagens = [
    {
        id: 1,
        idAutor: 1,
        titulo: "Qual a melhor forma de aprender React em 2026?",
        conteudo: "Estou começando agora com React e confesso que estou um pouco perdido com a quantidade de conteúdo disponível. Vejo muita gente falando sobre cursos pagos, outros recomendam seguir apenas a documentação oficial, enquanto alguns dizem que o melhor caminho é aprender fazendo projetos práticos desde o início. Já tenho uma base em HTML, CSS e JavaScript, mas quando entro no mundo dos hooks, componentes e gerenciamento de estado, tudo parece ficar mais complexo. Gostaria de saber como vocês organizaram os estudos de vocês, se seguiram alguma trilha específica e quais foram os maiores desafios no começo. Também queria dicas de projetos iniciais que realmente ajudam a fixar o conteúdo.",
        dataPostagem: "2026-03-28",
        totalCurtidas: 12
    },
    {
        id: 2,
        idAutor: 4,
        titulo: "Vale a pena usar CSS Modules hoje em dia?",
        conteudo: "Atualmente tenho utilizado CSS puro nos meus projetos React, mas recentemente comecei a ver bastante gente falando sobre CSS Modules, Styled Components e até Tailwind CSS. Fiquei na dúvida sobre qual abordagem seguir, principalmente pensando em projetos maiores onde a organização do código e a reutilização de estilos são muito importantes. CSS Modules parece interessante por evitar conflitos de classes, mas não sei se isso escala bem em aplicações grandes. Já o Styled Components parece mais integrado com o JavaScript, mas fico com receio de misturar muita lógica com estilo. Gostaria de ouvir a opinião de vocês sobre qual abordagem utilizam no dia a dia e quais seriam os prós e contras de cada uma.",
        dataPostagem: "2026-03-29",
        totalCurtidas: 8
    },
    {
        id: 3,
        idAutor: 1,
        titulo: "Erro estranho no useState",
        conteudo: "Estou enfrentando um problema estranho com o useState em um dos meus componentes React. Basicamente, tenho um botão que deveria atualizar um valor no estado, mas por algum motivo a interface não reflete a mudança corretamente. Já verifiquei se estou usando o setState da forma correta, testei com console.log e percebi que o valor até muda internamente, mas não atualiza na tela como esperado. Também tentei usar funções no setState para garantir que estou pegando o valor mais recente, mas o problema persiste. Será que pode ser algo relacionado a re-renderização, ou estou cometendo algum erro básico que ainda não percebi? Se alguém já passou por algo parecido, poderia compartilhar como resolveu?",
        dataPostagem: "2026-03-30",
        totalCurtidas: 5
    },
    {
        id: 4,
        idAutor: 2,
        titulo: "Dicas para melhorar responsividade no mobile",
        conteudo: "Estou desenvolvendo um layout para um projeto pessoal e estou tendo bastante dificuldade em garantir que tudo funcione bem no mobile. No desktop o layout fica organizado, mas quando reduzo a tela, alguns elementos quebram, outros ficam muito pequenos e a experiência do usuário não fica boa. Já estou utilizando flexbox e um pouco de grid, além de media queries, mas sinto que ainda falta algo para deixar tudo mais fluido. Também ouvi falar sobre unidades como rem, em e clamp, mas ainda não entendi muito bem como aplicá-las na prática. Gostaria de saber quais são as melhores práticas que vocês utilizam para garantir uma boa responsividade e se existem padrões que eu deveria seguir desde o início do desenvolvimento.",
        dataPostagem: "2026-03-31",
        totalCurtidas: 15
    },
    {
        id: 5,
        idAutor: 7,
        titulo: "Como organizar melhor meus componentes React?",
        conteudo: "Meu projeto React está começando a crescer e estou sentindo que a organização dos arquivos está ficando confusa. No início tudo era simples, mas agora já tenho vários componentes, páginas, estilos e funções utilitárias espalhadas. Não sei muito bem como estruturar as pastas de forma que fique fácil de escalar e manter no futuro. Já vi alguns projetos que separam por tipo, como components, pages, services, hooks, e outros que organizam por feature, agrupando tudo relacionado a uma funcionalidade específica. Fico na dúvida sobre qual abordagem é melhor e mais utilizada no mercado. Também queria saber se vale a pena investir desde já em uma arquitetura mais robusta ou se isso pode acabar complicando demais um projeto que ainda está pequeno.",
        dataPostagem: "2026-04-01",
        totalCurtidas: 20
    }
];

export default postagens;