class Hero{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar(){
        let tipoAtaque
        
        if (this.tipo === "guerreiro"){
            tipoAtaque = "socos"
        } else if(this.tipo === "mago"){
            tipoAtaque = "magia"
        } else if(this.tipo === "monge"){
            tipoAtaque = "artes marciais"
        } else{
            tipoAtaque = "shurikens"
        }
        console.log("O " + this.tipo + " " + this.nome + " atacou usando " + tipoAtaque)
        return tipoAtaque
    }
}

let Sett = new Hero("Sett", "27", "guerreiro")
let Ziggs = new Hero("Ziggs","45","mago")
let LeeSin = new Hero("Lee Sin", "50", "monge")
let Zed = new Hero("Zed","33","ninja")


Sett.atacar()
Ziggs.atacar()
LeeSin.atacar()
Zed.atacar()





