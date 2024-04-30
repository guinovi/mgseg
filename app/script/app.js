/* DECLARACIONES */
//Burger
const burger = document.getElementById("burger");
const navHeader = document.getElementById('navHeader')
const subrayado = document.querySelectorAll(".header-li");

//FORM COTIZACION
const tituloCotizacion = document.getElementById('tituloCotizacion')
const btnNext = document.getElementById('btnNext');
const btnSend = document.getElementById('btnSend');
const form1 = document.getElementById('form1');     //FORM 1
const nameInput = document.getElementById('nameInput')
const mailInput = document.getElementById('mailInput')
const form2 = document.getElementById('form2');     //FORM 2
const form3 = document.getElementById('form3');     //FORM 3





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
btnNext.addEventListener('click', (click)=>{
    if ((nameInput.value && mailInput.value) != "" ) {
       formulario1()
    }
    
})

function formulario1(){
    const formA = Array.from(form1.children)
    formA.forEach((e)=>{
        e.classList.toggle('display-none')
        tituloCotizacion.classList.toggle('display-none')
        btnSend.classList.toggle('display-none')
        btnNext.classList.toggle('display-none')
    })
    const fromB = Array.from(form2.children)
    fromB.forEach((e)=>{
        e.classList.toggle('display-none')
    })
}