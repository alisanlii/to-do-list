// add to do items
document.addEventListener('DOMContentLoaded', function () {
    const toDoList = document.getElementById('myUl');
    const addBtn = document.getElementById('btn');
    const taskInput = document.getElementById('myInput');
    addBtn.addEventListener('click', function (event) {
        event.preventDefault();
        const taskText = taskInput.value.trim();
        if (taskText === '') {
            return;
        }
        const newTask = document.createElement('li');
        newTask.textContent = taskText;
        const span = document.createElement('span');
        const text = document.createTextNode('\u00D7');
        span.className = 'close';
        span.appendChild(text);
        newTask.appendChild(span);
        toDoList.appendChild(newTask);
        taskInput.value = '';

        span.onclick = function () {
            const div = this.parentElement;
            div.style.display = 'none';
        };
    });
});

// creating close button

const closeBtn = document.getElementsByTagName('li');
let i;
for (i = 0; i < closeBtn.length; i++) {
    const span = document.createElement('span');
    const text = document.createTextNode('\u00D7');
    span.className = 'close';
    span.appendChild(text);
    closeBtn[i].appendChild(span);
}

// activating close button

const close = document.getElementsByClassName('close');
let h;
for (h = 0; h < close.length; h++) {
    close[h].onclick = function () {
        const div = this.parentElement;
        div.style.display = 'none';
    };
}

// DONE symbol

const done = document.querySelector('ul');
done.addEventListener(
    'click',
    function (e) {
        if (e.target.tagName === 'LI') {
            e.target.classList.toggle('checked');
        }
    },
    false,
);

/*
// new  to do

function newElement() {
    const li = document.createElement('li');
    const inputValue = document.getElementById('myInput').value;
    const t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert('You must write something!');
    } else {
        document.getElementById('myUl').appendChild(li);
    }
    document.getElementById('myInput').value = '';

    const span = document.createElement('span');
    const text = document.createTextNode('\u00D7');
    span.className = 'close';
    span.appendChild(text);
    li.appendChild(span);

    for (h = 0; h < close.length; h++) {
        close[h].onclick = function () {
            const div = this.parentElement;
            div.style.display = 'none';
        };
    }
}  */
