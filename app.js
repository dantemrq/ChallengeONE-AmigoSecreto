let nameList = [];

let listElement = document.getElementById("nameList");

function renderList () {
  listElement.innerHTML = "";
  nameList.forEach((name) => {
    listElement.innerHTML += `<li>${name}</li>`;
  });
}

function addName(event) {
  event.preventDefault();
  let name = document.getElementById("name").value.trim();
  if (!name || name === "") {
    showError("Por favor, insira um nome válido.");
    return;
  }
  document.getElementById("name").value = "";
  nameList.push(name);
  document.getElementById("name").focus();
  renderList();
}

function resetList() {
  nameList = [];
  renderList();
}

let modal = document.getElementById("modal");
let backdrop = document.getElementById("backdrop");
let result = document.getElementById("result");

let modalTitle = document.getElementById("modalTitle");
let modalMessage = document.getElementById("modalMessage");


backdrop.addEventListener("click", closeModal);

function showError(error) {
  modalTitle.innerHTML = `Erro!`
  modalMessage.innerHTML = error;
  backdrop.style.display = "flex";
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
  backdrop.style.display = "none";
}

function sortName() {
  if (nameList.length === 0) {
    showError("Insira pelo menos um nome.");
    return;
  }
  modalTitle.innerHTML = `Resultado do sorteio`
  modalMessage.innerHTML = `O nome sorteado foi: <span id='result'>${nameList[Math.floor(Math.random() * nameList.length)]}</span>`
  backdrop.style.display = "flex";
  modal.style.display = "block";
  // resetList();
}

