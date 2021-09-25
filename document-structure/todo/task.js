const input = document.getElementById("task__input"),
    addBtn = document.getElementById("tasks__add"),
    form = document.getElementById("tasks__form");

let inputValue, task,taskTitle, closeBtn, newBtnIndex, currentTask,
    taskList = document.getElementById("tasks__list"), 
    closeBtnList = document.getElementsByClassName("task__remove"), taskListClone;

    input.addEventListener("keyup", function() {
        inputValue = input.value;
    })

    addBtn.addEventListener("click", function(e) {
        e.preventDefault();
        if(inputValue.length !== 0){
            task = document.createElement("div");
            task.classList.add("task");
            taskTitle = document.createElement("div");
            taskTitle.classList.add("task__title");
            closeBtn = document.createElement("a");
            closeBtn.classList.add("task__remove");

            task.insertAdjacentElement("beforeEnd", taskTitle)
            task.insertAdjacentElement("beforeEnd", closeBtn);

            taskTitle.innerText = inputValue = input.value;
            closeBtn.innerHTML = "&times;";

            taskList.insertAdjacentElement("beforeEnd", task);

            newBtnIndex = closeBtnList.length - 1;

            closeBtnList[newBtnIndex].addEventListener('click', function(){
                currentTask = this.closest('.task')
                currentTask.remove()
            })
        }
        form.reset()
    });
