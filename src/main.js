import Alpine from "alpinejs";
window.Alpine=Alpine;
document.addEventListener("alpine:init",()=>{
    Alpine.store("data",{
        projects:["pj1","pj2"],
        username:"John doey"
    })
});
Alpine.start();