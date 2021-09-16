let inputField = document.getElementById('inputField');
let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');

addToDoButton.addEventListener('click', function(){
        var paragraph = document.createElement('li')
        paragraph.classList.add('paragraph-styling')
        paragraph.innerText = inputField.value
        toDoContainer.appendChild(paragraph);
        inputField.value = "";

        paragraph.addEventListener('click', function() {
            paragraph.style.textDecoration = "line-through";
        })

        paragraph.addEventListener('dblclick', function() {
            toDoContainer.removeChild(paragraph);
        })

        inputField.addEventListener("keyup", function(event){
            if(event.keycode === 13){
                event.preventDefault();
                document.getElementById("addToDo").click();
        
            }
})


})




