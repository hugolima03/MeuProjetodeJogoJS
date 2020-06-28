class TelaInicial {
    constructor(){
    }
    draw(){
        this._imagemfundo();
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