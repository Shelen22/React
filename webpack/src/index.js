 import("./index.css")
  
 import logo from "./logo.png";

 let img = document.createElement("img");
 img.src = logo;
 img.className = "logo";


 

let root = document.getElementById("root");

let form = document.createElement("div");
form.className = "maindiv"

let input = document.createElement("input");
input.setAttribute("class", "input");
input.placeholder = "Add task";

let submit = document.createElement("button");
submit.innerHTML = "ADD";
submit.className = "btn";

let reset = document.createElement("button");
reset.innerHTML = "Remove";
reset.className = "reset";


 form.append( input, submit, reset)

let list = document.createElement("div");
list.className = "lists";
submit.addEventListener("click", () => {
  let points = document.createElement("h2");
  points.innerHTML = input.value;
  list.append(points);
  input.value = null;
});

reset.addEventListener("click", () => {
  list.innerHTML = null;
});

root.append(img,form, list);
