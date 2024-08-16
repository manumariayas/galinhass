const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [
    {
        enunciado: "No âmbito social, você prefere:",
        alternativas: [
            {
                texto: "Você ganhará medalha de ouro na sua modalidade, mas terá que ferir em alto nível seus adversários para ganhar e todo mundo saberá.",
                afirmacao: "afirmação",
            },
            {
                texto: "Tem a oportunidade de entrar automaticamente na sua faculdade dos sonhos, porém terá que sabotar a entrada do/da sua/seu irmã/irmão ou de um parente muito próximo.",
                afirmacao: "afirmação",
            },
        ]
    },
    {
        enunciado: "No âmbito ambiental, você prefere:",
        alternativas: [
            {
                texto: "riará uma campanha para ajudar o meio ambiente e recrutar pessoas necessitadas(pobreza severa) para esse trabalho , mas será um trabalho escravo. ",
                afirmacao: "afirmação",
            },
            {
                texto: "Imagine que um amigo lhe peça para mentir em seu nome. Nesse caso, você se vê diante de uma das maiores soluções para o meio ambiente, mas precisa escolher entre manter a lealdade ao seu amigo ou mostrar a verdade.",
                afirmacao: "afirmação",
            },
        ]
    },
    {
        enunciado: "No âmbito tecnológico, você prefere:",
        alternativas: [
            {
                texto: "você terá a melhor tecnologia e com isso você terá a cura do câncer, mas uma pessoa da sua família terá câncer mas você não poderá ajudá-la mesmo sabendo dessa tecnologia que pode salvá-la.",
                afirmacao: "afirmação",
            },
            {
                texto: "um alto nível de tecnologia pode ver o futuro, mas no futuro acontecerá desastres mundiais que acabará com a vida na terra, você tem  opção de contar para todo ou tem opção de guardar para você e mesmo contando não terá salvação para esses desastres.",
                afirmacao: "afirmação",
            },
        ]
    },
]

let atual = 0;
let perguntaAtual;

function mostraPergunta (){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent ="";
    mostraAlternativa();
}

function mostraAlternativa (){
    for (const pergunta of perguntaAtual.alternativas) {
       const botaoAlternativa = document.createElement('button');
       botaoAlternativa.textContent = pergunta.texto;
       botaoAlternativa.addEventListener("click", function(){
        atual++;
        mostraPergunta();
       })
       caixaAlternativas.appendChild(botaoAlternativa);
    }
}

mostraPergunta();