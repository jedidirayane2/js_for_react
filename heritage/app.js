class Etudiant {
    constructor(nom, age) {
        this.nom = nom;
        this.age = age;
    }

}

class Stagiaire extends Etudiant {
    constructor(nom,age,stage) {
        super(nom, age);
        this.stage = stage;
    
    }
info() {
        return `stagiaire nom:${this.nom}a pour age:${this.age}et son stage est:${this.stage}`
    }
    
}

let stagiaire1 = new Stagiaire("ali", 20, "developpement web");
console.log(stagiaire1.info());
let stagiaire2 = new Stagiaire("ahmed", 22, "data science");
console.log(stagiaire2.info());