const btnModo = document.querySelector("#btn-modo");

btnModo.addEventListener("click", function () {
  const body = document.querySelector("body");
  body.classList.toggle("dark-mode");
  if (body.classList.contains("dark-mode")) {
    btnModo.textContent = "Light";
  } else {
    btnModo.textContent = "Dark";
  }
});
