const title = document.querySelector("#title");
const button = document.querySelector("#myButton");
const userInput = document.querySelector("#user");
const passInput = document.querySelector("#password");

const usersDB = [
    {
        userName: "TomRoj",
        email: "email1@mail.com",
        password: "123456",
    },
    {
        userName: "Mati",
        email: "email2@mail.com",
        password: "mati123",
    },
];

button.addEventListener("click", function () {
    const finded = usersDB.find(function (foo) {
        return foo.userName === userInput.value;
    });

    if (finded) {
        alert("El usuario ya existe");
    } else {
        if (passInput.value.length <= 4) {
            alert("Contraseña muy corta");
        } else {
            const user = {
                userName: userInput.value,
                password: passInput.value,
            };
            alert("Usuario creado");
            usersDB.push(user);
        }
    }
});
