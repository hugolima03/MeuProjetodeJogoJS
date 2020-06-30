class Vida {
    constructor(vidaTotal, vidaInicial){
        this.vidaTotal = vidaTotal;
        this.vidaInicial = vidaInicial;
        this.vidas = this.vidaInicial
        this.largura = 25;
        this.altura = 25;
        this.xInicial = 18;
        this.yInicial = 18;
    }
    draw(){
        for(let i = 0; i < this.vidas; i++) {
            const margem = i * 10;
            const posicao = this.xInicial * (i + 1)
            image(_imagemVida, posicao + margem, this.yInicial, this.largura, this.altura)
        }
        
    }
    ganhaVida(){
        if( this.vidas <= this.vidaTotal){
            this.vidas++
        }
    }
    perdeVida(){
        this.vidas--
    }
}