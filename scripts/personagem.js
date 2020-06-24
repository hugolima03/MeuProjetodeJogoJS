class Personagem extends Animacao{
    constructor(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite){
        super(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite);

        this.velocidadeDoPulo = 0;
        this.gravidade = 2;
        this.yInicial = height - this.altura;
        this.y = this.yInicial-30;
    }

    pula(){
        this.velocidadeDoPulo = -40
        SomDoPulo.play();
    }
    aplicaGravidade(){
        this.y = this.y + this.velocidadeDoPulo;
        this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade;

        if (this.y > this.yInicial-30){
            this.y = this.yInicial-30
        }
    }
    colidiu(inimigo) {
        //noFill();
        //rect(this.x, this.y, this.largura, this.altura);
        //rect(inimigo.x,
        //    inimigo.y,  
        //    inimigo.largura,
        //    inimigo.altura)
        const precisao = 0.7;
        const colisao = collideRectRect(
            this.x,
            this.y,
            this.largura*precisao,
            this.altura*precisao,
            inimigo.x,
            inimigo.y,
            inimigo.largura*precisao,
            inimigo.altura*precisao);

            return colisao;
    };
    
}