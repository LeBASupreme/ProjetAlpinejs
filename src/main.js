import Alpine from "alpinejs";
window.Alpine=Alpine;
document.addEventListener("alpine:init",()=>{
    Alpine.store("data",{
        projects:["pj1","pj2"],
        tasks:[],
        username:"John doey",
        addTaskFormFields:{
            "Nom":"",
            "Description":""
        },
        addProjectFormFields:{
            "Nom":"",
        },
        showAddTaskForm:false,
        showAddProjectsForm:false,
        addTask:function(){
            //todo pending finished
            this.tasks.push({Nom:this.addTaskFormFields.Nom,Description:this.addTaskFormFields.Description,Statut:"Todo"});
            for(let i in this.addTaskFormFields){
                this.addTaskFormFields[i]="";
            }
            this.showAddTaskForm=!this.showAddTaskForm;
        },
        addProject:function(){
            this.projects.push(this.addProjectFormFields.Nom);
            for(let i in this.addProjectFormFields){
                this.addProjectFormFields[i]="";
            }
            this.showAddProjectsForm=!this.showAddProjectsForm;
        }
    })
});
Alpine.start();