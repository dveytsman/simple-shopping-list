var button = document.getElementById("button");
var input = document.getElementById("input");
var list = document.getElementById("shopping-list");
var listItems = document.querySelectorAll("li");

function addListener(item) {
  item.addEventListener("click", function () {
    item.classList.toggle("done");
  });
}
const isInputValid = () => input.value.length > 0;
const addListItem = () => {
  var li = document.createElement("li");
  li.textContent = input.value;
  addListener(li);
  list.appendChild(li);
  input.value = "";
};

button.addEventListener("click", function () {
  if (isInputValid()) {
    addListItem();
  }
});
input.addEventListener("keydown", function (event) {
  if (event.key === "Enter" && isInputValid()) {
    addListItem();
  }
});

listItems.forEach((item) => {
  addListener(item);
});
