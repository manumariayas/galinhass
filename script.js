const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPrincipal = document.querySelector('.caixa-perguntas');
const caixaPrincipal = document.querySelector('.caixa-alternativas');
const caixaPrincipal = document.querySelector('.caixa-resultados');
const caixaPrincipal = document.querySelector('.caixa-resultado');

const perguntas = [
    {
        enunciado: " No ambito social, voce prefere",
        alternativas:[
         {
            texto:' Você ganhará medalha de ouro na sua modalidade, mas terá que ferir em alto nível seus adversários para ganhar e todo mundo saberá', 
            afirmação: "af",
        },
        {
            texto:'Tem a oportunidade de entrar automaticamente na sua faculdade dos sonhos, porém terá que sabotar a entrada do/da sua/seu irmã/irmão ou de um parente muito próximo.', 
            afirmação: "af",
        },
    ]
    },
    {
        enunciado: " No ambito ambiental, voce prefere",
        alternativas:[
            {
                texto:'criará uma campanha para ajudar o meio ambiente e recrutar pessoas necessitadas(pobreza severa) para esse trabalho , mas será um trabalho escravo. ', 
                afirmação: "af",
             },
            { 
                texto:'Imagine que um amigo lhe peça para mentir em seu nome. Nesse caso, você se vê diante de uma das maiores soluções para o meio ambiente, mas precisa escolher entre manter a lealdade ao seu amigo ou mostrar a verdade.', 
                afirmação: "af",
             },
    ]
    },
    {
        enunciado: " No ambito tecnológico, voce prefere",
        alternativas:[
            {
                texto:'você terá a melhor tecnologia e com isso você terá a cura do câncer, mas uma pessoa da sua família terá câncer mas você não poderá ajudá-la mesmo sabendo dessa tecnologia que pode salvá-la.', 
                afirmação: "af",
            },
    
            {
                texto:'um alto nível de tecnologia pode ver o futuro, mas no futuro acontecerá desastres mundiais que acabará com a vida na terra, você tem  opção de contar para todo ou tem opção de guardar para você e mesmo contando não terá salvação para esses desastres.', 
                afirmação: "af",
    
            },
    ]
    },
]
        
let atual = 0;
let perguntaAtual;

function mostraPerguntas () {
    perguntaAtual = perguntas [atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
}

function mostraAlternativa (){
    for ( const pergunta of perguntaAtual.alternativas) { 
        const botãoAlternativa = document.createElement('button');
        botãoAlternativa. textContent = pergunta;
        caixaAlternativas.appendChild(botãoAlternativa);
        

    }
} 

mostraPerguntas ();
