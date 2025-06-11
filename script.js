const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const btnSubmit = document.querySelector(".btn-submit");

btnSubmit.addEventListener("click", getFormvalue);

function getFormValue() {
  alert(
    `${firstName.value} ${lastName.value}`
  );
}
