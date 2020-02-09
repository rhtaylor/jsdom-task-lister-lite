document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded per DOMContentLoaded event") 
}); 


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
  button.setAttribute("class", "to-delete") 
  button.innerText = textToAdd
  listItem.innerHTML = textToAdd 
  post.appendChild(listItem)   
  makeListForDelete() 

  function makeListForDelete(){ 
  let addHere = document.getElementsByClassName("popOffList")
  let lI = document.createElement('li') 
  lI.appendChild(button)
  uL.appendChild(lI) 
  
}
  
let destroyButton = document.getElementsByClassName("to-delete")
destroyButton.addEventListener("click", () => { 
console.log("HMMMMM")
})

} ) 



