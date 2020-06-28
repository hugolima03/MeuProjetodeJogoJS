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
        this.botao.remove();
        cenaAtual = 'jogo'
    }
}