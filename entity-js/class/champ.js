export  class Champ{
    constructor(id, nom, nbValeurs, type){
        this.id = id;
        this.nom = nom;
        this.nbValeurs = nbValeurs;
        this.type = type;
    }

    getid(){
        return this.id;
    }

    setid(id){
        this.id = id;
    }

    getnom(){
        return this.nom;
    }

    setnom(nom){
        this.nom = nom;
    }

    getnbValeurs(){
        return this.nbValeurs;
    }

    setnbValeurs(nbValeurs){
        this.nbValeurs = nbValeurs;
    }

    equals(obj){
        if(this == obj){
            return true;
        }
        if(obj == null){
            return false;
        }
        if(obj.id != this.id){
            return false;
        }
        if(obj.nom != this.nom){
            return false;
        }
        if(obj.nbValeurs != this.nbValeurs){
            return false;
        }
        if(obj.type != this.type){
            return false;
        }
    }
}