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
            title: "",
            description: ""
        },
        toggleForm() {
            this.showForm = !this.showForm;
            if (!this.showForm) {
                this.newTask = { title: "", description: "" };
            }
        },
        addTask() {
            if (this.newTask.title.trim()) {
                const task = {
                    id: Date.now(),
                    title: this.newTask.title,
                    description: this.newTask.description,
                    status: "A faire"
                };
                Alpine.store("data").tasks.push(task);
                this.saveTasks();
                this.newTask = { title: "", description: "" };
                this.showForm = false;
            }
        },
        saveTasks() {
            localStorage.setItem("tasks", JSON.stringify(Alpine.store("data").tasks));
        }
    };
}