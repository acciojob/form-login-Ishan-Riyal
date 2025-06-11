const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const btnSubmit = document.querySelector(".btn-submit");

btnSubmit.addEventListener("click", getFormvalue);

function getFormvalue() {
  alert(
    `${firstName.value} ${lastName.value}`
  );
}
