class Fruta {
    constructor(
        receivedName,
        receivedColor,
        receivedTaste,
        receivedWeight,
        receivedSeeds,
        receivedRooten
    ) {
        this.name = receivedName;
        this.color = receivedColor;
        this.taste = receivedTaste;
        this.weight = receivedWeight;
        this.seeds = receivedSeeds;
        this.rooten = receivedRooten;
    }
}

const fruta1 = new Fruta("Manzana", "Verde", "Dulce y Acida", 100, true, true);

const fruta2 = new Fruta("Banana", "Marron", "Dulce", 82, false, true);

const fruta3 = new Fruta("Durazno", "Naranja", "Dulce", 150, true, false);

const frutasillas = [fruta1, fruta2, fruta3];

const comestibles = frutasillas.filter(function (caca) {
    return caca.rooten === false;
});

const comestibles2 = [];

for (let i = 0; i < frutasillas.length; i++) {
    if (frutasillas[i].rooten === false) {
        comestibles2.push(frutasillas[i]);
    }
}

console.log(comestibles2);
