document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded per DOMContentLoaded event") });


let stack = document.getElementById("list")
let stackList = document.createElement("div")
stack.appendChild(stackList)
stackList.setAttribute("class", "popOff")  
let uL = document.createElement("ul")
uL.setAttribute("class", "popOffList")
stackList.appendChild(uL)  

document.addEventListener("submit", (e) => {  
  e.preventDefault(); 
  let post = document.getElementById("tasks")  
  let textToAdd = document.getElementById("new-task-description").value
  let listItem = document.createElement('li') 
  let button = document.createElement('button') 
  button.setAttribute("class", textToAdd) 
  button.innerText = textToAdd 
  listItem.setAttribute("class", textToAdd)
  listItem.innerHTML = textToAdd 
  post.appendChild(listItem)  
  nestedNode = document.getElementsByClassName(textToAdd)
  let arr = [...nestedNode]
  arr[0].appendChild(button)
     
debugger
 

button.onclick = (e) => { 
  console.log("thats better", e) 
  post.remove()
  console.log("BOOMSHAKALAKA")
}

function doIt(event) {   
  event.preventDefault
  console.log("my firing event", event)
  console.log("i was clicked")
 let collection = document.querySelectorAll(".to-delete")  
  for (let i = 0; i <  collection.length; i++){
          collection[i].textContent === "Work out"
  }
 debugger
 console.log(collection, collection[0]) 
 
}

} ) 



