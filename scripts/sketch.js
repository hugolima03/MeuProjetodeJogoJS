let cenario, cenario2, cenario3, cenario4, cenario5, cenario6;
let cenarioImagem, cenarioImagem2, cenarioImagem3, cenarioImagem4, cenarioImagem5, cenarioImagem6;
let gameoverImagem;
let gameoverSong;

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

function preload(){
    //carregando as imagens do cenário e aplicando a classe Cenario nas variaveis
    cenarioImagem = loadImage('assets/imagens/cenario/01.png');
    cenarioImagem2 = loadImage('assets/imagens/cenario/02.png');
    cenarioImagem3 = loadImage('assets/imagens/cenario/03.png');
    cenarioImagem4 = loadImage('assets/imagens/cenario/04.png');
    cenarioImagem5 = loadImage('assets/imagens/cenario/05.png');
    cenarioImagem6 = loadImage('assets/imagens/cenario/06.png');
    personagemImagem = loadImage('assets/imagens/personagem/lobo2.png');
    inimigoImagem = loadImage('assets/imagens/inimigos/djinn.png');
    semCabecaImagem = loadImage('assets/imagens/inimigos/semcabeca.png');
    morcegoImagem = loadImage('assets/imagens/inimigos/morcego.png');
    gameoverImagem = loadImage('assets/imagens/gameover/gameover.png');
    SomDoPulo = loadSound('assets/sons/somPulo.mp3');
    SomJogo = loadSound('assets/sons/minhatrilha_jogo.mp3');
    gameoverSong = loadSound('assets/sons/GameOver.ogg');
}

function setup(){
    frameRate(20)
    createCanvas(windowWidth, windowHeight-4)
    
    cenario = new Cenario(cenarioImagem, 0.1);
    cenario2 = new Cenario(cenarioImagem2, 0.4);
    cenario3 = new Cenario(cenarioImagem3, 0.8);
    cenario4 = new Cenario(cenarioImagem4, 1.4);
    cenario5 = new Cenario(cenarioImagem5, 8);
    cenario6 = new Cenario(cenarioImagem6, 5);
    SomJogo.loop();
    //constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite)
    personagem = new Personagem(matrizlobo, personagemImagem, 100, 30, 132, 64, 64, 64);
    inimigo = new Inimigo(matrizDjinn, inimigoImagem,width - 300, 96, 30, 96, 96, 32, 10, 100);
    semCabeca = new Inimigo(matrizsemCabeca, semCabecaImagem, width+ 600, 96,30,90,100,32, 20, 2500);
    morcego = new Inimigo(matrizMorcego, morcegoImagem, width-300, 500, 78, 72, 72, 26, 15, 3000);
    gameover = new Gameover();
}
function keyPressed(){
    if(key === 'ArrowUp' || 'Space'){
        personagem.pula();
    }
}
function mouseClicked(){
    return personagem.pula();
}

function draw(){
    //exibindo e aplicando movimento ao fundo
    cenario.exibe();
    cenario.move();
    cenario2.exibe();
    cenario2.move();
    cenario3.exibe();
    cenario3.move();
    cenario4.exibe();
    cenario4.move();
    cenario5.exibe();
    cenario5.move();

    inimigo.exibe();
    inimigo.move();

    semCabeca.exibe();
    semCabeca.move();

    morcego.exibe();
    morcego.move();
    
    personagem.exibe();
    personagem.aplicaGravidade();
    
    cenario6.exibe();
    cenario6.move();

    if (personagem.colidiu(inimigo)){
        console.log('colidiu');
        SomJogo.stop();
        gameoverSong.play();
        noLoop();
    }
    if (personagem.colidiu(semCabeca)){
        console.log('colidiu');
        SomJogo.stop();
        gameoverSong.play();
        noLoop();
    }
    if (personagem.colidiu(morcego)){
        console.log('colidiu');
        SomJogo.stop();
        gameoverSong.play();
        noLoop();
    }
}