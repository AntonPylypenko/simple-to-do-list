const tasks = []

function AddItem(){
    const taskItem = document.getElementById('text').value;
    console.log(taskItem)
    if(taskItem === '') {
        alert('Please, enter not empty value!')    
        return
    };

    tasks.push(taskItem);
    const id = tasks.length;
    let listItem = document.createElement('li');  
    listItem.setAttribute('id', `li-${id}`)  
    var taskNode = document.createTextNode(tasks.length + '. ' + taskItem);
    
    let check = createCheckbox(id);
    let btn = createDeleteButton(id);

    listItem.appendChild(check);
    listItem.appendChild(taskNode);
    listItem.appendChild(btn);

    document.getElementById('to-do-list').appendChild(listItem);
}

function createCheckbox(id){
    let check = document.createElement('input');
    check.setAttribute('type', 'checkbox');
    check.setAttribute('id', `box-${id}`);
    check.setAttribute('onclick', 'completeTask(id)');
    //check.addEventListener('change', completeTask(id)) ???

    return check;
}

//часто зустрічаю, що назва створюваного елементу пишеться з великої, то така конвенція ?
function createDeleteButton(id){
    let btn = document.createElement('button');
    btn.innerHTML= "Delete";
    btn.setAttribute('id', `btn-${id}`);
    btn.setAttribute('onclick', 'deleteTask(id)');

    return btn;
}

function deleteTask(id){
    let elem = document.getElementById(id);
    elem.parentElement.remove();
}

//спитай чому те ід знаходиться тільки для чексбокса
function completeTask(id){
    let elem = document.getElementById(id);
    if (elem.checked) {       
        elem.parentElement.setAttribute('class', 'checked')
    } else {
        elem.parentElement.setAttribute('class', '')
    }
}