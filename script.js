const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById("list-container")

function addTask(){
    if(inputBox.value ===''){
        alert("You must write something!")
    }
    else{
        let task = document.createElement('li')
        task.textContent = inputBox.value
        listContainer.appendChild(task)

        let span = document.createElement('span');
        span.textContent = '\u00d7';
        task.appendChild(span)
        

    }
    inputBox.value = ''
    saveData()
}

listContainer.addEventListener('click' ,(el)=>{
    if(el.target.tagName =='LI'){
        el.target.classList.toggle('checked')
        saveData()
    }
    else if(el.target.tagName == 'SPAn'){
        el.target.parentElement.remove()
        saveDate()
    }
})

function saveData(){
    localStorage.setItem("tasks",listContainer.innerHTML
    )
}

function showData(){
    localStorage.innerHTML = localStorage.getItem
    ('tasks')
}

showData( )