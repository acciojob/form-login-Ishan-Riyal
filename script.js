document.getElementById("name-form").addEventListener("submit", function (event) {
  event.preventDefault();

  const fname = document.getElementById("fname").value;
  const lname = document.getElementById("lname").value;

  alert(`${fname} ${lname}`);
});
