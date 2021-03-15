class Section{
    constructor(id, nom, position, champs, entetes, nbChampsParLigne, image){
        this.id = id;
        this.nom = nom;
        this.champs = champs;
        this.position= position;
        this.entetes = entetes;
        this.nbChampsParLigne = nbChampsParLigne;
        this.image = image;
    }

    get getId(){
        return this.id;
    }

    get getNom(){
        return this.nom
    }

    get getChamps(){
        return this.champs
    }

    get getPosition(){
        return this.position;
    }

    get getEntetes(){
        return this.entetes
    }

    get getNbChampsParLigne(){
        return this.nbChampsParLigne
    }

    get getImage(){
        return this.image
    }

    setId(id){
        this.id = id;
    }

    setnom(nom){
        this.nom = nom;
    }

    setType(type){
        this.type = type;
    }

    setChamps(champs){
        this.champs = champs;
    }

    setPosition(position){
        this.position = position
    }

}