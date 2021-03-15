export  class Poste{
    constructor(id, fonction, activite, emplacement){
        this.id = id;
        this.fonction = fonction;
        this.activite = activite;
        this.emplacement = emplacement
    }

    getid(){
        return this.id;
    }

    setid(id){
        this.id = id;
    }

    getfonction(){
        return this.fonction;
    }

    setfonction(fonction){
        this.fonction = fonction;
    }

    getactivite(){
        return this.activite;
    }

    setactivite(activite){
        this.activite = activite;
    }

    getemplacement(){
        return this.emplacement;
    }

    setemplacement(emplacement){
        this.emplacement = emplacement;
    }

    equals(obj){
        if(this == obj){
            return true;
        }
        if(obj == null){
            return false;
        }
        if(this.id != id){
            return false;
        }
        if(this.fonction != fonction){
            return false;
        }
        if(this.activite != activite){
            return false;
        }
        if(this.emplacement != emplacement){
            return false;
        }
        return true;
    }
}

const p = new Poste(1, "analyste", "verfy le profuit final", "batiment 3")

console.log(p)