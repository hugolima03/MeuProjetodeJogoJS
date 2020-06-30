class Pontuacao {
    constructor(){
        this.pontos = 0;
    }
    
    exibe(){
        textSize(50);
        textAlign(RIGHT);
        text('Pontos: '+parseInt(this.pontos), width - 30, 50);
    }
    adicionarPonto(){
        this.pontos += 0.2;
    }
    removerPonto(){
        this.pontos -= 30;
    }
    passouInimigo(){
        this.pontos += 20;
    }
}