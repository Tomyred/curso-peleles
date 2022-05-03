const numbers = [2, 67, 54, 423];

const doubles = numbers.map(function (number) {
    return number * 2;
});

doubles.forEach(function (number) {
    console.log(number);
});
