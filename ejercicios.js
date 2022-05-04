const usuarios = [
    {
        name: "juan",
        edad: 33,
        online: false,
    },
    {
        name: "pedro",
        edad: 25,
        online: true,
    },
    {
        name: "gonza",
        edad: 25,
        online: false,
    },
    {
        name: "mati",
        edad: 24,
        online: true,
    },
    {
        name: "lucas",
        edad: 24,
        online: true,
    },
    {
        name: "tomi",
        edad: 24,
        online: true,
    },
];

let counter = 0;

for (let index = 0; index < usuarios.length; index++) {
    const user = usuarios[index];
    if (user.online === true) {
        counter++;
    }
}

// Ejercicio 2

const frases = [
    "Hola, soy toy",
    "Frase larguiiiiiiiiiiiiiiiiiiiisima",
    "F C",
    "Asi no",
    "Frase larguiiiiiiiiiiiiiiiiiiiisima123",
];

function palabraMasLarga(array) {
    // La funcion llamada 'palabraMasLarga' recibe un array 'array' de frases (strings) como parametro
    // y debe devolver la palabra mas larga entre todas las frases ( Es decir la palabra con mayor cantidad de caracteres)
    // Por ej:
    // palabraMasLarga(['hola esto string', 'frase con palabra']) debe devolver 'palabra'
    // Tu código aca:

    let fraseMasLarga = "";

    for (let i = 0; i < array.length; i++) {
        const frase = array[i];

        if (frase.length > fraseMasLarga.length) {
            fraseMasLarga = frase;
        }
    }

    console.log(fraseMasLarga);
}

palabraMasLarga(frases);
