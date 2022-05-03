const title = document.querySelector("#title");
const button = document.querySelector("#myButton");
const input = document.querySelector("#myInput");

button.addEventListener("click", function () {
    input.value = "";
});

input.addEventListener("input", function (e) {
    const inputText = e.target.value;
    title.innerHTML = inputText;
});
