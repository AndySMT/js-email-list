import { names } from "./db.js";

const email = document.getElementById("email");
const btnGenera = document.getElementById("btnGenera");
const btnReset = document.querySelector(".btn-dark");
const namesList = document.getElementById("namesList");
let newArray = [];

function getEmailX10() {
  for (let i = 0; i < 10; i++) {
    getEmail(i);
  }
}

function getEmail(index) {
  axios
    .get("https://flynn.boolean.careers/exercises/api/random/mail")
    .then((risposta) => {
      email.innerHTML += `<li><i class="fa-solid fa-envelope"></i>  ${risposta.data.response}</li>`;
      console.log(risposta.data.response);
      namesList.innerHTML += `<li><i class="fa-solid fa-user"></i>  ${names[index]}</li>`;
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      console.log("Request completed");
    });
}

function reset() {
  email.innerHTML = "";
  namesList.innerHTML = "";
}

btnGenera.addEventListener("click", getEmailX10);
btnReset.addEventListener("click", reset);
