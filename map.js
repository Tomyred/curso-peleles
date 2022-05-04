const numbers = [2, 67, 54, 423];

const doubles = numbers.map(function (number) {
    return number * 2;
});

doubles.forEach(function (number) {
    console.log(number);
});

const users = ["PAR", "IMPAR", "PAR", "IMPAR", "PAR", "IMPAR"];

for (let index = 1; index < users.length; index += 2) {
    const element = users[index];
    console.log(element);
}
