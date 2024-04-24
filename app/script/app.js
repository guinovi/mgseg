/* DECLARACIONES */
const burger = document.getElementById("burger");
const navHeader = document.getElementById('navHeader')
const subrayado = document.querySelectorAll(".header-li");





/* burger */
/* burger.addEventListener('click',()=>{
    // console.log(navHeader.style.display);
    if (navHeader.style.display === "none") {
        // subrayado.forEach((e)=>console.log(e))
        subrayado.forEach((e)=> e.classList.remove("subrayado"));
        navHeader.style.display = "block"
    } else {
        navHeader.style.display = "none"
    }
}) */
let menuAbierto = false;
burger.addEventListener('click', () => {
    if (!menuAbierto) {
        subrayado.forEach((e) => e.classList.remove("subrayado"));
        navHeader.style.display = "block";
        menuAbierto = true;
    } else {
        navHeader.style.display = "none";
        subrayado.forEach((e) => e.classList.add("subrayado"));
        menuAbierto = false;
    }
});