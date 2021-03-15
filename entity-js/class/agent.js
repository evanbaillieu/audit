import Persone from './persone.js'
class Agent extends Persone{
    constructor(id, nom, prenom, login, password, poste){
        super(id, nom, prenom, login, password);
        this.poste = poste
    }
    get getPoste(){
        return this.poste
    }

    setPoste(poste){
        this.poste = poste;
    }

    get equals(obj){
       if(obj == null){
           return false
       }
       if(obj.)
    }
}