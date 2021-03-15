import {Champ} from './champ'

export  class Valeur{
    constructor(id, valeur, type,champ){
        this.id = id;
        this.valeur = valeur;
        this.type = type;
        this.champ = champ;
    }
    
    getId(){
        return this.id;
    }

    setId(id){
        this.id = id;
    }

    getValeur(){
        return this.valeur;
    }

    setValeur(valeur){
        this.valeur = valeur;
    }

    getType(){
        return this.type;
    }

    setType(type){ 
        this.type = type;
    }

    getChamp(){
        return this.champ;
    }

    setChamp(champ){
        this.champ = champ;
    }

    equals(obj){
        if(obj == this){
            return true;
        }
        if(obj == null){
            return false;
        }
        if(obj.id != this.id){
            return false;
        }
        if(obj.Valeur != this.Valeur){
            return false;
        }
        if(obj.type != this.type){
            return false;
        }
        if(obj.champ != this.champ){
            return false;
        }
        return true;
    }
}
 const c = new Champ(1, "test", 15, 0);
 const v = new Valeur(1, "test", 0, c);

 console.log(v);