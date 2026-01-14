import Alpine from "alpinejs";
window.Alpine=Alpine;
document.addEventListener("alpine:init",()=>{
    Alpine.store("data",{
        projects:[],
        tasks:[],
        username:"John doey",
        pickedProjectId:null,
        selectedTask:null,
        showTaskModal:false,
        addTaskFormFields:{
            "Nom":"",
            "Description":"",
        },
        addProjectFormFields:{
            "Nom":"",
        },
        showAddTaskForm:false,
        showAddProjectsForm:false,
        addTask:function(){
            const dateDebut = document.getElementById('taskDateDebut').value;
            const dateFin = document.getElementById('taskDateFin').value;
            this.tasks.push({TaskId:Date.now(),ProjectId:this.pickedProjectId,Nom:this.addTaskFormFields.Nom,Description:this.addTaskFormFields.Description,Statut:"todo",dateDeb:dateDebut ? new Date(dateDebut) : new Date(),dateFin:dateFin ? new Date(dateFin) : new Date()});
            for(let i in this.addTaskFormFields){
                this.addTaskFormFields[i]="";
            }
            document.getElementById('taskDateDebut').value = '';
            document.getElementById('taskDateFin').value = '';
            this.showAddTaskForm=!this.showAddTaskForm;
            console.log(this.tasks);
        },
        addProject:function(){
            this.projects.push({ProjectId:Date.now(),Nom:this.addProjectFormFields.Nom});
            for(let i in this.addProjectFormFields){
                this.addProjectFormFields[i]="";
            }
            this.showAddProjectsForm=!this.showAddProjectsForm;
        },
        openTaskModal:function(task){
            this.selectedTask=task;
            this.showTaskModal=true;
        },
        closeTaskModal:function(){
            this.showTaskModal=false;
            this.selectedTask=null;
        },
        changeTaskStatus:function(newStatus){
            if(this.selectedTask){
                this.selectedTask.Statut=newStatus;
                this.closeTaskModal();
            }
        },
        formatDateForInput:function(date){
            if(!date) return '';
            if(typeof date === 'string') return date.split('T')[0];
            return new Date(date).toISOString().split('T')[0];
        },
        updateTaskDate:function(dateStr,dateField){
            if(this.selectedTask && dateStr){
                this.selectedTask[dateField]=new Date(dateStr);
            }
        }
    });
})