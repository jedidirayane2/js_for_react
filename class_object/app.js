class Etudiant{
    constructor(nom, age) {
        this.nom = nom;
        this.age = age;
    }
}
let etc1 = new Etudiant("John", 20);
let etc2 = new Etudiant("Jane", 22);

console.log(etc1.nom); // Output: John
console.log(etc2.age); // Output: 22


// 2eme facons ou methode

class Etudiant2{
    constructor(nom, age) {
        this.nom = nom;
        this.age = age;
    }
    info() {
        return `Nom: ${this.nom} a pour Age: ${this.age}`;
    }
}
let etc3 = new Etudiant2("Alice", 21);
console.log(etc3.info()); // Output: Nom: Alice a pour Age: 21
let etc4 = new Etudiant2("Bob", 23);
console.log(etc4.info()); // Output: Nom: Bob a pour Age: 23