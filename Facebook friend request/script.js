let istatus = document.querySelector("h5");

let btn = document.querySelector("#add");

let check = 1;

btn.addEventListener("click", () => {
   if (check == 1) {
      istatus.innerHTML = "Friends";
      istatus.style.color = "green";
      btn.innerHTML = "Add friend";
      btn.style.backgroundColor = "Red";
      check = 0;
   } else {
      istatus.innerHTML = "Stranger";
      istatus.style.color = "Red";
      btn.innerHTML = "Remove friend";
      btn.style.backgroundColor = "green";
      check = 1;
   }
});

function nextEdge(side1, side2) {
   return side1 + side2 - 1;
}

console.log(nextEdge(8, 10));
