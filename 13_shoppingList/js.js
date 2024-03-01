const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    const myItem = input.value;
    input.value = "";

    const item = document.createElement('li');
    const span = document.createElement('span');
    const newButton = document.createElement('button');

    item.appendChild(span);
    span.textContent = myItem;
    item.appendChild(newButton);
    newButton.textContent = "Delete";
    list.appendChild(item);

    newButton.addEventListener('click', ()=>{
        list.removeChild(item);
    });
    
input.focus();
   


})