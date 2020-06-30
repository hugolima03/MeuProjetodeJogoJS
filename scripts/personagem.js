class Personagem extends Animacao{
    constructor(matriz, imagem, x, _variacaoY, largura, altura, larguraSprite, alturaSprite){
        super(matriz, imagem, x, _variacaoY, largura, altura, larguraSprite, alturaSprite);

        this._variacaoY = _variacaoY;
        this.velocidadeDoPulo = 0;
        this.gravidade = 9;
        this.yInicial = height - this.altura;
        this.y = this.yInicial-30;
        this.pulos = 0;
        this.invencivel = false;
    }

    pula(){
        if(this.pulos <2){
            this.velocidadeDoPulo = -60
            SomDoPulo.play();
            this.pulos++
        }
    }
    aplicaGravidade(){
        this.y = this.y + this.velocidadeDoPulo;
        this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade;

        if (this.y > this.yInicial-30){
            this.y = this.yInicial-30
            this.pulos = 0;
        }
    }
    ficaInvencivel() {
        this.invencivel = true;
        setTimeout(()=>{
            this.invencivel = false
        }, 1000);
    }
    colidiu(inimigo) {
        //noFill();
        //rect(this.x, this.y, this.largura, this.altura);
        //rect(inimigo.x,
        //    inimigo.y,  
        //    inimigo.largura,
        //    inimigo.altura)
        const precisao = 0.5;
        if (this.invencivel){
            return false
        }

        
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
    }

}