const user = {
    userName: "TomRoj",
    email: "email1@mail.com",
    password: "123456",
    function() {
        console.log("Hola, soy Tomás");
    },
};
const user1 = {
    userName: "Mati",
    email: "email2@mail.com",
    password: "mati123",
    saludar() {
        console.log("Hola, soy Mati");
    },
    saludarAAlguienMas(nombre) {
        console.log("Hola " + nombre + ", mi nombre es Mati");
    },
};
user1.saludarAAlguienMas("Gonza");
const user2 = {
    userName: "Juancito",
    email: "email3@mail.com",
    password: "john123",
    function() {
        console.log("Hola, soy Juancito");
    },
};

const usersDB = [user, user1, user2];

function logIn(user, email, password) {
    const requestedUser = usersDB.find(function (dbUser) {
        return dbUser.userName === user || dbUser.email === email;
    });

    if (requestedUser) {
        if (requestedUser.password === password) {
            console.log("Bienvenido usuario " + requestedUser.userName);
        } else {
            console.log("Raja de aca bigote");
        }
    } else {
        console.log("Usuario no encontrado");
    }
}

logIn("Pepe", "email2@mail.com", "mati123");
