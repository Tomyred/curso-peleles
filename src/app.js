const title = document.querySelector("#title");
const button = document.querySelector("#myButton");
const input = document.querySelector("#myInput");
const list = document.querySelector(".userList");

const users = ["Juancito", "John Doe", "Pedro"];

input.addEventListener("input", function (e) {
    const inputText = e.target.value;
    title.innerHTML = inputText;
});

button.addEventListener("click", function () {
    if (input.value.length === 0) {
        return;
    }
    users.push(input.value);
    list.innerHTML += `<li>${input.value}</li>`;
    input.value = "";
});

users.forEach(function (user) {
    list.innerHTML += `<li>${user}</li>`;
});
