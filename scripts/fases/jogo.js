class Jogo {
    constructor(){
        
    }
    setup(){
    

    createCanvas(windowWidth, windowHeight-4)

    pontuacao = new Pontuacao();

    telaInicialio1 = new Cenario(telaInicial1img, 3);
    telaInicialio2 = new Cenario(telaInicial2img, 3);
    telaInicialio3 = new Cenario(telaInicial3img, 2);
    telaInicialio4 = new Cenario(telaInicial4img, 2);
    telaInicialio5 = new Cenario(telaInicial5img, 1);
    telaInicialio6 = new Cenario(telaInicial6img, 1);
    telaInicialio7 = new Cenario(telaInicial7img, 0.8);
    telaInicialio8 = new Cenario(telaInicial8img, 0.8);
    telaInicialio9 = new Cenario(telaInicial9img, 0.5);
    telaInicialio10 = new Cenario(telaInicial10img, 0.8);
    telaInicialio11 = new Cenario(telaInicial11img, 3);
    
    cenario = new Cenario(cenarioImagem, 0.1);
    cenario2 = new Cenario(cenarioImagem2, 0.4);
    cenario3 = new Cenario(cenarioImagem3, 0.8);
    cenario4 = new Cenario(cenarioImagem4, 1.4);
    cenario5 = new Cenario(cenarioImagem5, 8);
    cenario6 = new Cenario(cenarioImagem6, 5);
    //constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite)
    personagem = new Personagem(matrizlobo, personagemImagem, 100, 30, 132, 64, 64, 64);
    inimigo = new Inimigo(matrizDjinn, inimigoImagem,width - 300, 96, 30, 96, 96, 32, 10, 100);
    semCabeca = new Inimigo(matrizsemCabeca, semCabecaImagem, width+ 600, 96,30,90,100,32, 20, 2500);
    morcego = new Inimigo(matrizMorcego, morcegoImagem, width-300, 500, 78, 72, 72, 26, 15, 3000);
    gameover = new Gameover();
    }
    keyPressed(key){
        if(key === 'ArrowUp' || 'Space'){
            personagem.pula();
        }
    }
    draw() {
        //exibindo e aplicando movimento ao fundo.
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
    //chamando os métodos de pontuação.
    pontuacao.exibe();
    pontuacao.adicionarPonto();

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
        image(gameoverImagem, width/2 - 550, height/2 - 550);
        console.log('colidiu');
        SomJogo.stop();
        gameoverSong.play();
        noLoop();
    }
    if (personagem.colidiu(semCabeca)){
        image(gameoverImagem, width/2 - 550, height/2 - 550);
        console.log('colidiu');
        SomJogo.stop();
        gameoverSong.play();
        noLoop();
    }
    if (personagem.colidiu(morcego)){
        image(gameoverImagem, width/2 - 550, height/2 - 550);
        console.log('colidiu');
        SomJogo.stop();
        gameoverSong.play();
        noLoop();
    }
    }
}