document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded per DOMContentLoaded event") 
  addTask();

});


let stack = document.getElementById("list")
  
function addTask(){
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
    button.onclick = (e) => {
      console.log("thats better", e)
      post.remove()
      console.log("BOOMSHAKALAKA")
    }
  });

 



} 



