/* DECLARACIONES */
//Burger
const burger = document.getElementById("burger");
const navHeader = document.getElementById('navHeader')
const subrayado = document.querySelectorAll(".header-li");
//FORM COTIZACION
const btnNext = document.getElementById('btnNext');
const btnSend = document.getElementById('btnSend');
const form1 = document.getElementById('form1');
const form2 = document.getElementById('form2');
const form3 = document.getElementById('form3');





/* BURGER INDEX */
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

/* FORM  COTIZACION*/
btnNext.addEventListener('click', ()=>{
    
    btnSend.classList.toggle('display-none')
    const formA = Array.from(form1.children)
    formA.forEach((e)=>{
        e.classList.toggle('display-none')
    })
})


