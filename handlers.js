const tasks = []

function AddItem(){
    const taskItem = document.getElementById('text').value;
    tasks.push(taskItem);

    const id = tasks.length;
    let listItem = document.createElement('li');  
    listItem.setAttribute('id', `li-${id}`)  
    var taskNode = document.createTextNode(tasks.length + '. ' + taskItem);
    let check = createCheckbox(id);

    listItem.appendChild(check);
    listItem.appendChild(taskNode);

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


//спитай чому те ід знаходиться тільки для чексбокса
function completeTask(id){
    let elem = document.getElementById(id);
    console.log(elem.checked)
    if (elem.checked) {       
        elem.parentElement.setAttribute('class', 'completed')
    } else {
        elem.parentElement.setAttribute('class', '')
    }
}