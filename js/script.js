// https://flynn.boolean.careers/exercises/api/random/mail

const email = document.getElementById("email");
const btnGenera = document.getElementById("btnGenera");
const btnReset = document.querySelector(".btn-dark");
let newArray = [];

function getEmailX10() {
  for (let i = 0; i < 10; i++) {
    getEmail();
  }
}

function getEmail() {
  axios
    .get("https://flynn.boolean.careers/exercises/api/random/mail")
    .then((risposta) => {
      email.innerHTML += `<li>La tue email e':  ${risposta.data.response}</li>`;
      console.log(risposta.data.response);
    });
}

btnGenera.addEventListener("click", getEmailX10);
