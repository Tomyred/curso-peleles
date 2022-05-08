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
    {
        userName: "Juancito",
        email: "email3@mail.com",
        password: "john123",
    },
];

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
