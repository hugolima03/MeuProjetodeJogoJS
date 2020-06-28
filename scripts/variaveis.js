let cenario, cenario2, cenario3, cenario4, cenario5, cenario6;
let cenarioImagem, cenarioImagem2, cenarioImagem3, cenarioImagem4, cenarioImagem5, cenarioImagem6;
let gameoverImagem;
let gameoverSong;
let pontuacao;
let telaInicialSom;

let telaInicial1img, telaInicial2img, telaInicial3img, telaInicial4img, telaInicial5img, telaInicial6img, telaInicial7img, telaInicial8img, telaInicial9img, telaInicial10img, telaInicial11img;

let telaInicialio1, telaInicialio2, telaInicialio3, telaInicialio4, telaInicialio5, telaInicialio6, telaInicialio7 , telaInicialio8, telaInicialio9, telaInicialio10, telaInicialio11;

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