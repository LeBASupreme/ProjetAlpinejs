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
            "Date début":"",
            "Date fin":""
        },
        addProjectFormFields:{
            "Nom":"",
        },
        showAddTaskForm:false,
        showAddProjectsForm:false,
        showUpdateForm:false,
        toYMD:function (date) {
            console.log(date)
            const y = date.getFullYear()
            const m = String(date.getMonth() + 1).padStart(2, '0')
            const d = String(date.getDate()).padStart(2, '0')
            return `${y}-${m}-${d}`
        },
        addTask:function(){
            //todo pending finished
            this.tasks.push({TaskId:Date.now(),ProjectId:this.pickedProjectId,Nom:this.addTaskFormFields.Nom,Description:this.addTaskFormFields.Description,Statut:"Todo","Date début":new Date(this.addTaskFormFields["Date début"]),"Date fin":new Date(this.addTaskFormFields["Date fin"])});
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
        },
        modifyTask:function(TaskId){
            for(let i of this.tasks){
                if(i.TaskId==TaskId){
                    for(let j in i){
                        if(Object.keys(this.addTaskFormFields).includes(j)){
                            i[j]=this.addTaskFormFields[j];
                        }
                    }
                }
            }
            this.addTaskFormFields={
                "Nom":"",
                "Description":"",
                "Date début":"",
                "Date fin":""
            };
            this.showUpdateForm=!this.showUpdateForm;
        }
    })
});
//relier chaque task à un projet
Alpine.start();