 
 let root = document.getElementById('root');

 let form = document.createElement("form");
  
 let input = document.createElement("input");

 let submit = document.createElement("button");
     submit.innerHTML = "SUBMIT"

 form.append(input,submit)
 
 let list = document.createElement("div")
 submit.addEventListener("click", () => {
     let points = document.createElement("h2")
     points.innerHTML = input.value;
     list.append(points)
    });
    



root.append(form,list)
