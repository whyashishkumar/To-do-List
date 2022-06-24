document.querySelector(".btn").onclick=function(){
    if(document.querySelector("#tasks").value.length==0){
        alert("Please enter a task");
    }
    else{
        document.querySelector(".newtasks").innerHTML+=`
            <div class="task">
                <span id="taskname">
                    ${document.querySelector(".container input").value}
                </span>
                <button class="delete">
                    Delete
                </button>
            </div>
            
        `;
        let current_tasks=document.querySelectorAll(".delete");
        for(let i=0;i<current_tasks.length;i++){
            current_tasks[i].onclick=function(){
                this.parentNode.remove(current_tasks);
            }
        }
        let tasks=document.querySelectorAll("#taskname");
        for(let i=0;i<tasks.length;i++){
            tasks[i].onclick=function(){
                this.classList.toggle('completed');
            }
        }
        document.querySelector(".container input").value="";
    }
}