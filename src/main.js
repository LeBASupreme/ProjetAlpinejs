import Alpine from "alpinejs";
window.Alpine=Alpine;
document.addEventListener("alpine:init",()=>{
    Alpine.store("data",{
        projects:[],
        tasks:[],
        username:"John doey",
        pickedProjectId:null,
        addTaskFormFields:{
            "Nom":"",
            "Description":"",
            "Date début (format xxxx-xx-xx)":"",
            "Date fin (format xxxx-xx-xx)":""
        },
        addProjectFormFields:{
            "Nom":"",
        },
        showAddTaskForm:false,
        showAddProjectsForm:false,
        addTask:function(){
            //todo pending finished
            this.tasks.push({TaskId:Date.now(),Nom:this.addTaskFormFields.Nom,Description:this.addTaskFormFields.Description,Statut:"Todo",dateDeb:new Date(this.addTaskFormFields["Date début (format xxxx-xx-xx)"]),dateFin:new Date(this.addTaskFormFields["Date fin (format xxxx-xx-xx)"])});
            for(let i in this.addTaskFormFields){
                this.addTaskFormFields[i]="";
            }
            this.showAddTaskForm=!this.showAddTaskForm;
            console.log(this.tasks);
        },
        addProject:function(){
            this.projects.push({ProjectId:Date.now(),Nom:this.addProjectFormFields.Nom});
            for(let i in this.addProjectFormFields){
                this.addProjectFormFields[i]="";
            }
            this.showAddProjectsForm=!this.showAddProjectsForm;
        }
    })
});
Alpine.start();