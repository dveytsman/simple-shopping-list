var button = document.getElementById("button");
var input = document.getElementById("input");
var list = document.getElementById("list");

function addListener(item) {
  item.addEventListener("click", function () {
    item.classList.toggle("done");
    sortList();
  });
}

function sortList() {
  const listItems = document.querySelectorAll("li");
  const sortedItems = Array.from(listItems).sort(sortByStrikeThrough);
  list.innerHTML = "";
  sortedItems.forEach((item) => list.appendChild(item));
}

const isInputValid = () => input.value.trim() !== "";

const addListItem = () => {
  if (isInputValid()) {
    var li = document.createElement("li");
    li.textContent = input.value.trim();
    addListener(li);
    list.prepend(li);
    input.value = "";
  }
};

button.addEventListener("click", addListItem);

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addListItem();
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const listItems = document.querySelectorAll("li");
  listItems.forEach((item) => {
    addListener(item);
  });
});

function sortByStrikeThrough(a, b) {
  const strikeThroughA = a.classList.contains("done");
  const strikeThroughB = b.classList.contains("done");
  return strikeThroughA === strikeThroughB ? 0 : strikeThroughA ? 1 : -1;
}
