class Animal {
    constructor(especie, edad, vivo) {
        this.especie = especie;
        this.edad = edad;
        this.vivo = vivo;
    }

    comer() {
        if (this.vivo === true) {
            console.log("Ñam, ñam. ñam");
        } else {
            console.log("...");
        }
    }
}

class Mascota extends Animal {
    constructor(nombre, animal) {
        super(animal.especie, animal.edad, animal.vivo);
        this.nombre = nombre;
    }
    saludar() {
        console.log("Hola, mi nombre es " + this.nombre);
    }
}

const animal = new Animal("Perro", 5, true);
const animal2 = new Animal("Gato", 3, false);

const mascota1 = new Mascota("Picho", animal);

mascota1.comer();
