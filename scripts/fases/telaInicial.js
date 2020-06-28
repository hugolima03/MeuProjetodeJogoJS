class TelaInicial {
    constructor(){
    }
    draw(){
        telaInicialio10.exibe();
        telaInicialio10.move();
        telaInicialio9.exibe();
        telaInicialio9.move();
        telaInicialio8.exibe();
        telaInicialio8.move();
        telaInicialio7.exibe();
        telaInicialio7.move();
        telaInicialio6.exibe();
        telaInicialio6.move();
        telaInicialio5.exibe();
        telaInicialio5.move();
        telaInicialio4.exibe();
        telaInicialio4.move();
        telaInicialio3.exibe();
        telaInicialio3.move();
        telaInicialio2.exibe();
        telaInicialio2.move();
        telaInicialio1.exibe();
        telaInicialio1.move();
        telaInicialio11.exibe();

        //this._imagemfundo();
        this._texto();
        this._botao();
    }
    _imagemfundo(){
        image(imagemTelaInicial, 0 , 0, width, height)
    }
    _texto(){
        textAlign(CENTER)
        textFont(fonteTelaInicial)
    }
    _botao(){
        botao.posicaoY = height/ 7*5.5
        botao.draw();
    }
}