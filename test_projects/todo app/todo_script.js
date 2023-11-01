const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');
const message = document.getElementById("message");
const day = document.getElementById("day");
const date = document.getElementById("date");
const now = new Date();

day.innerHTML = now.toLocaleString('en-US', { weekday: 'long' });
date.innerHTML = now.toLocaleDateString('en-GB', {
    day: 'numeric', month: 'short', year: 'numeric'
  }).replace(/ /g, '-');


function addTask() {
    if(inputBox.value === '') {
        message.innerHTML = "Task can NOT be empty!";
    }
    else {
        message.innerHTML = "";
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    checkCompletedTasks();
    saveData();
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI"){
        e.target.classList.toggle('checked');
        saveData();
    }
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }

    checkCompletedTasks();

}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

function markAllComplete() { 
    var tasks = document.querySelectorAll("li"); 

    for (var i=0;i<tasks.length;i++) {
        if (!tasks[i].classList.contains('checked')) {
            tasks[i].classList.add('checked');
        }     
    }

    disableButton();
    saveData();
}

function clearAll() {    
    while (listContainer.firstChild) {
        listContainer.removeChild(listContainer.firstChild);
    }

    saveData();
}

function checkCompletedTasks() {

    var tasks = document.querySelectorAll("li"); 
    var checkedTask = 0;

    for (var i=0;i<tasks.length;i++) {
        if (tasks[i].classList.contains('checked')) {
            checkedTask++;
        }
    }

    if (checkedTask === tasks.length) {
        disableButton();
    } else {
        enableButton();
    }

    saveData();
}

function disableButton() {
    document.getElementById("markComplete").disabled = true;
}

function enableButton() {
    document.getElementById("markComplete").disabled = false;
}

showTask();