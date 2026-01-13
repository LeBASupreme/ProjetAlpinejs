document.addEventListener("alpine:init", () => {
    Alpine.store("data", {
        projects: ["pj1", "pj2"],
        username: "John doey",
        tasks: JSON.parse(localStorage.getItem("tasks")) || []
    });
});

function taskApp() {
    return {
        showForm: false,
        newTask: {
            id: null,
            title: "",
            description: ""
        },
        toggleForm() {
            this.showForm = !this.showForm;
            if (!this.showForm) {
                this.newTask = { id: null, title: "", description: "" };
            }
        },
        cancelEdit() {
            this.showForm = false;
            this.newTask = { id: null, title: "", description: "" };
        },
        editTask(task) {
            this.newTask = {
                id: task.id,
                title: task.title,
                description: task.description
            };
            this.showForm = true;
        },
        saveTask() {
            if (this.newTask.title.trim()) {
                if (this.newTask.id) {
                    const taskIndex = Alpine.store("data").tasks.findIndex(t => t.id === this.newTask.id);
                    if (taskIndex !== -1) {
                        Alpine.store("data").tasks[taskIndex].title = this.newTask.title;
                        Alpine.store("data").tasks[taskIndex].description = this.newTask.description;
                    }
                } else {
                    const task = {
                        id: Date.now(),
                        title: this.newTask.title,
                        description: this.newTask.description,
                        status: "à faire"
                    };
                    Alpine.store("data").tasks.push(task);
                }
                this.saveTasks();
                this.newTask = { id: null, title: "", description: "" };
                this.showForm = false;
            }
        },
        deleteTask(taskId) {
            if (confirm("Êtes-vous sûr de vouloir supprimer cette tâche ?")) {
                Alpine.store("data").tasks = Alpine.store("data").tasks.filter(t => t.id !== taskId);
                this.saveTasks();
            }
        },
        saveTasks() {
            localStorage.setItem("tasks", JSON.stringify(Alpine.store("data").tasks));
        }
    };
}