class Image{
    constructor(id, nom, image){
        this.id = id;
        this.nom = nom;
        this.image = image;
    }

    get getId(){
        return this.id;
    }

    get getNom(){
        return this.nom
    }

    get getImage(){
        return this.image
    }

    setId(){
        this.id = id;
    }

    setNom(nom){
        this.nom = nom;
    }

    setImage(image){
        this.image = image;
    }
}