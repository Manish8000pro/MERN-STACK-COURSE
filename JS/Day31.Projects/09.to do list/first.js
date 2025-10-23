const form = document.querySelector('form')
const allTask = document.querySelector('#allTask')
const input = document.querySelector('input')

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const text = input.value.trim();

    if(text=="")
        return;

    const parent = document.createElement('div');

    const task = document.createElement('span');
    task.textContent = text;
    task.style.marginRight = "20px"

    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete";
    doneButton.style.width = "30px";
    doneButton.style.marginRight = "20px";

    const doneButton = document.createElement('button');
    doneButton.textContent = "Done";
    doneButton.style.width = "30px";
    doneButton.style.marginRight = "20px"

    doneButton.addEventListener('click',()=>{
        task.style.textDecoration = "line-through"
    })

    deleteButton.addEventListener('click',()=>{
        parent.remove();
    })

    parent.append(task,doneButton,deleteButton);

    allTask.append(parent);
})
