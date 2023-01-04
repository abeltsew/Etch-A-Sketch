const body = document.getElementsByTagName("body")[0];

console.log({ body });
console.log(body.firstElementChild);

const container = document.createElement("div");

container.classList = "container";

container.innerHTML = "Hello";

body.appendChild(container);

const container = document.querySelector("#container");
console.log({ container });
