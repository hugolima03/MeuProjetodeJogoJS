let cenario, cenario2, cenario3, cenario4, cenario5, cenario6;
let cenarioImagem, cenarioImagem2, cenarioImagem3, cenarioImagem4, cenarioImagem5, cenarioImagem6;
let gameoverImagem;
let gameoverSong;
let pontuacao;

let jogo;
let cenaAtual = 'telaInicial';
let cenas;
let telaInicial;
let botao;

let imagemTelaInicial;
let fonteTelaInicial;

let personagem;
let personagemImagem;
let matrizlobo = [
    [0,0],
    [0 + (64*1),0],
    [0 + (64*2),0],
    [0 + (64*3),0],
    [0 + (64*4),0],
]

let inimigo;
let inimigoImagem;
let matrizDjinn = [
    [0,0],
    [48,0],
    [96,0],
];

let semCabeca;
let semCabecaImagem;
let matrizsemCabeca = [
    [0,0],
    [32,0],
    [64,0],
    [96,0],
    [128,0],
    [160,0]
]

let morcego;
let morcegoImagem;
let matrizMorcego = [
    [0,0],
    [33,0],
    [66,0],
]

let matrizGameover = [
    [0,0]
]

let SomDoPulo;
let SomJogo;
let gameover;