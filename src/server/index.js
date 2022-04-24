const user = {
    userName: "TomRoj",
    password: "123456",
    function() {
        console.log("Hola, soy Tomás");
    },
};
const user1 = {
    userName: "Mati",
    password: "mati123",
    function() {
        console.log("Hola, soy Tomás");
    },
};
const user2 = {
    userName: "Juancito",
    password: "john123",
    function() {
        console.log("Hola, soy Tomás");
    },
};

const users = [user, user1, user2];

function logIn(user, password) {
    const foo = users.find(function (savedUser) {
        return savedUser.userName === user;
    });

    if (foo) {
        if (foo.password === password) {
            console.log("Bienvenido usuario " + user);
        } else {
            console.log("Raja de aca bigote");
        }
    } else {
        console.log("Usuario no encontrado");
    }
}

logIn("Juancito", "1234546");
