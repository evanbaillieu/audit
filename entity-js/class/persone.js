export default class Persone{
    constructor(data){
        this.id = data.id;
        this.nom = data.nom,
        this.prenom = data.prenom,
        this.login = data.login,
        this.passworld = data.password
    }

    constructor(id, nom, prenom, login, password){
        this.id = id;
        this.nom = nom,
        this.prenom = prenom,
        this.login = login,
        this.passworld = password
    }

    get getid(){
        return this.id;
    }

    setid(id){
        this.id = id;
    }

    get getnom(){
        return this.name;
    }

    setnom(nom){
        this.nom = nom;
    }

    get getprenom(){
        return this.prenom;
    }

    setprenom(prenom){
        this.prenom = prenom;
    }

    get getlogin(){
        return this.login;
    }

    setlogin(login){
        this.login = login;
    }

    get getpassword(){
        return this.password;
    }

    setpassword(password){
        this.password = password;
    }

    get equals(obj){
        if(this == obj){
            return true
        }
        if(obj == null){
            return false;
        }
        if(this.id != obj.id){
            return false;
        }
        if(this.nom != obj.nom){
            return false;
        }
        if(this.prenom != obj.prenom){
            return false;
        }
        if(this.login != obj.login){
            return false;
        }
        if(this.password != obj.password){
            return false;
        }
        
        return true;

    }
} 