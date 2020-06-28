class Inimigo extends Animacao {
    constructor(matriz, imagem, x, _variacaoY, largura, altura, larguraSprite, alturaSprite, velocidade, delay) {
        super(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite)
        this.velocidade = velocidade;
        this.delay = delay
        this.x = width + this.delay
    }
    move(){
        this.x = this.x - this.velocidade;

        if (this.x < -this.largura - this.delay){
            this.x = width;
            this.velocidade = this.velocidade + random(10,30);
            if (this.velocidade>32){
                this.velocidade = this.velocidade - random (15,25);
            }
        }
    }
}