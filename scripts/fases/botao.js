class Botao{
    constructor(text, posicaoX, posicaoY){
        this.text = text;
        this.posicaoX = posicaoX;
        this.posicaoY = posicaoY;
        this.botao = createButton(this.text);
        this.botao.mousePressed( () => this.alteraCena());
        this.botao.addClass('botao-tela-inicial');

    }
    draw(){
        this.botao.position(this.posicaoX, this.posicaoY);
        this.botao.center('horizontal');

    }
    alteraCena(){
        frameRate(20)
        //telaInicialSom.stop();
        //SomJogo.loop();
        this.botao.remove();
        cenaAtual = 'historia'
        setTimeout(function(){
            SomJogo.loop();
            //telaInicialSom.stop();
            //cenaAtual = 'jogo';
            //your code to be executed after 1 seconds
    },pera);
    }
}