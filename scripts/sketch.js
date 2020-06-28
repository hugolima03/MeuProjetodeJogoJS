function setup(){
    jogo = new Jogo()
    telaInicialSom.loop();
    telaInicial = new TelaInicial();
    jogo.setup();
    frameRate(60)
    createCanvas(windowWidth, windowHeight-4)
    cenas = {
            jogo : jogo,
            telaInicial : telaInicial
        }
    botao = new Botao('INICIAR', width/2, height/2);
    };
function keyPressed(){
    jogo.keyPressed(key);
    }
function mouseClicked(){
    return personagem.pula();
}
function draw(){
    cenas[cenaAtual].draw();
}