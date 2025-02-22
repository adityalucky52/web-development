const inputBox = document.getElementById("inputBox");
const addBtn = document.getElementById("addBtn");
const todolist = document.getElementById("todoList");

let editTodo = null;

const addTodo = () => {
   const inputText = inputBox.value.trim();
   if (inputText.length <= 0) {
      alert("You must write something in your todo list");
      return 0;
   }

   if (addBtn.value === "Edit") {
      editTodo.target.previousElementSibling.innerHTML = inputText;
      addBtn.value = "Add";
      inputBox.value = "";
   } else {
      // create p tag
      const li = document.createElement("li");
      const p = document.createElement("p");
      p.innerHTML = inputText;
      li.appendChild(p);

      // create a edit button
      const editBtn = document.createElement("button");
      editBtn.innerText = "Edit";
      editBtn.classList.add("btn", "editBtn");
      li.appendChild(editBtn);

      // create a delete button
      const deleteBtn = document.createElement("button");
      deleteBtn.innerText = "Remove";
      deleteBtn.classList.add("btn", "deleteBtn");
      li.appendChild(deleteBtn);

      todolist.appendChild(li);
      inputBox.value = " ";
   }
};
const updateTodo = (e) => {
   // console.log(e.target.innerHTML);

   if (e.target.innerHTML === "Remove") {
      // console.log(e.target.parentElement);
      todolist.removeChild(e.target.parentElement);
   }

   if (e.target.innerHTML === "Edit") {
      inputBox.value = e.target.previousElementSibling.innerHTML;
      inputBox.focus();
      addBtn.value = "Edit";
      editTodo = e; //less samaj me aaya
   }
};

addBtn.addEventListener("click", addTodo);
todolist.addEventListener("click", updateTodo);
