function setup(){
    jogo = new Jogo()
    historia = new Historia
    telaInicialSom.loop();
    telaInicial = new TelaInicial();
    jogo.setup();
    frameRate(60)
    createCanvas(windowWidth, windowHeight-4)
    cenas = {
            jogo : jogo,
            historia : historia,
            telaInicial : telaInicial
        }
    botao = new Botao('INICIAR', width/2, height/2);
    };
    //botaohist1 = new Botao('Iniciar', 500, 500);
function keyPressed(){
    jogo.keyPressed(key);
    }
function draw(){
    cenas[cenaAtual].draw();
}