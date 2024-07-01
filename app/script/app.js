/* DECLARACIONES */
//Burger
const burger = document.getElementById("burger");
const navHeader = document.getElementById('navHeader')
const subrayado = document.querySelectorAll(".header-li");

//FORM COTIZACION
document.addEventListener('DOMContentLoaded', function () {
    const form = document.forms['formCotizacion'];
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const name = form.elements['name'].value.trim();
        const mail = form.elements['mail'].value.trim();
        const tel = form.elements['tel'].value.trim();

        if (name === '' || mail === '') {
            alert('Por favor completa los campos obligatorios: Nombre y Email');
            return;
        }

        if (tel !== '' && !(/^\d{10}$/.test(tel))) {
            alert('Ingrese un número de teléfono válido (10 dígitos)');
            return;
        }
        form.submit();
    });
});


//CAMARAS Sectiuon
const camaraSection = document.getElementById("camaraSection");



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



/* camaraSection.addEventListener('click', () => {
    if(!camaraSection.firstElementChild){
        const div = document.createElement('div');
        div.className = 'sub-menu-contein';
        const div2 = document.createElement('div');
        div2.className = 'sub-menu';
        div2.innerHTML = `
            <h2 class="">Servicio de Cámaras Web</h2>
            <p>Ofrecemos un completo servicio de instalación y mantenimiento de cámaras web para satisfacer tus necesidades de seguridad y monitoreo. Nuestros servicios incluyen:</p>
            <ul>
                <li class="no-list">Instalación Profesional</li>
                <li class="no-list">Venta de equipos</li>
                <li class="no-list">Alquiler comodato</li>
                <li class="no-list">Configuración Personalizada</li>
                <li class="no-list">Mantenimiento Preventivo</li>
                <li class="no-list">Soporte Técnico</li>
                <li class="no-list">Actualización de Software</li>
            </ul>
            <p>Confía en nosotros para cuidar de la seguridad de tu espacio con soluciones avanzadas en cámaras web. Contacta con nuestro equipo hoy mismo para más detalles y presupuestos personalizados.</p>
        `;
        div.appendChild(div2);
        camaraSection.appendChild(div);
    } else{
        camaraSection.firstElementChild.remove()
    }
}); */

//CAMARAS
camaraSection.addEventListener('click', () => {
    const subMenu = document.querySelector('.sub-menu-contein');
    if (!subMenu) {
        const div = document.createElement('div');
        div.className = 'sub-menu-contein';
        //("x")
        const closeButton = document.createElement('button');
        closeButton.className = 'close-button';
        closeButton.onclick = 'butonCloseClickCams()'
        closeButton.textContent = 'x';
        //sub-menu
        const div2 = document.createElement('div');
        div2.className = 'sub-menu';
        div2.innerHTML = `
            <h2>Servicio de Cámaras de Seguridad</h2>
            <p>Ofrecemos un servicio integral de instalación y mantenimiento de cámaras de seguridad para cubrir tus necesidades de vigilancia y monitoreo. Nuestros servicios incluyen:</p>
            <ul>
                <li class="no-list">Instalación Profesional</li>
                <li class="no-list">Venta de Equipos</li>
                <li class="no-list">Alquiler comodato</li>
                <li class="no-list">Configuración Personalizada</li>
                <li class="no-list">Mantenimiento Preventivo</li>
                <li class="no-list">Soporte Técnico Especializado</li>
                <li class="no-list">Actualización de Software y Firmware</li>
            </ul>
            <p>Confía en nosotros para proteger la seguridad de tu espacio con soluciones avanzadas en cámaras de seguridad. Contáctanos hoy mismo para más detalles y presupuestos personalizados.</p>
        `;
        div.appendChild(closeButton);
        div.appendChild(div2);
        camaraSection.appendChild(div);
    }else{
        camaraSection.firstElementChild.remove()
    }
});

//("x")
function butonCloseClickCams(){
    camaraSection.firstElementChild.remove()
}


//ALARMAS
const alarmasSection = document.getElementById('alarmasSection');
alarmasSection.addEventListener('click', () => {
    const subMenu = document.querySelector('.sub-menu-contein');
    if (!subMenu) {
        const div = document.createElement('div');
        div.className = 'sub-menu-contein';
        const closeButton = document.createElement('button');
        closeButton.className = 'close-button';
        closeButton.textContent = 'x';
        closeButton.onclick = 'butonCloseClickAlarm()'
        const div2 = document.createElement('div');
        div2.className = 'sub-menu';
        div2.innerHTML = `
            <h2>Servicio de Alarmas</h2>
            <p>Ofrecemos sistemas avanzados de alarmas, con un enfoque especial en las alarmas AXPRO de Hikvision. Nuestros servicios incluyen:</p>
            <ul>
                <li class="no-list">Instalación Profesional de Alarmas</li>
                <li class="no-list">Venta de Equipos</li>
                <li class="no-list">Configuración Personalizada de Alarmas AXPRO</li>
                <li class="no-list">Mantenimiento Preventivo</li>
                <li class="no-list">Soporte Técnico Especializado</li>
                <li class="no-list">Actualización de Software de Alarmas</li>
            </ul>
            <p>Confía en nosotros para asegurar la protección de tu hogar o negocio con tecnología de vanguardia en sistemas de alarmas. Contáctanos para más detalles y presupuestos personalizados.</p>
        `;
        
        div.appendChild(closeButton);
        div.appendChild(div2);
        alarmasSection.appendChild(div);
    } else {
        subMenu.remove();
    }
});
function butonCloseClickAlarm(){
    alarmasSection.firstElementChild.remove()
}


const porterosSection = document.getElementById('porterosSection');

porterosSection.addEventListener('click', () => {
    const subMenu = document.querySelector('.sub-menu-contein');
    if (!subMenu) {
        const div = document.createElement('div');
        div.className = 'sub-menu-contein';
        //X
        const closeButton = document.createElement('button');
        closeButton.className = 'close-button';
        closeButton.textContent = 'x';
        closeButton.onclick = 'butonCloseClickPorteros()'  

        const div2 = document.createElement('div');
        div2.className = 'sub-menu';
        div2.innerHTML = `
            <h2>Porteros IP</h2>
            <p>Ofrecemos soluciones avanzadas en porteros IP de marcas reconocidas como Hikvision y Dahua. Nuestros servicios incluyen:</p>
            <ul>
                <li class="no-list">Instalación Profesional de Porteros IP</li>
                <li class="no-list">Venta de Equipos de Porteros IP</li>
                <li class="no-list">Configuración Personalizada</li>
                <li class="no-list">Mantenimiento y Soporte Técnico</li>
                <li class="no-list">Integración con Sistemas de Seguridad</li>
            </ul>
            <p>Confía en nosotros para mejorar la seguridad y la comunicación en tu edificio o complejo residencial con porteros IP avanzados. Contáctanos para más información y presupuestos adaptados a tus necesidades.</p>
        `;
        
        div.appendChild(closeButton);
        div.appendChild(div2);
        porterosSection.appendChild(div);
    } else {
        subMenu.remove();
    }
});

function butonCloseClickPorteros(){
    porterosSection.firstElementChild.remove()
}


const redesSection = document.getElementById('redesSection');

redesSection.addEventListener('click', () => {
    const subMenu = document.querySelector('.sub-menu-contein');
    if (!subMenu) {
        const div = document.createElement('div');
        div.className = 'sub-menu-contein';
        const closeButton = document.createElement('button');
        closeButton.className = 'close-button';
        closeButton.textContent = 'x';
        closeButton.onclick = 'butonCloseClickRedes()'  
        const div2 = document.createElement('div');
        div2.className = 'sub-menu';
        div2.innerHTML = `
            <h2>Servicio de Redes y Cableados Estructurados</h2>
            <p>Ofrecemos soluciones completas en redes y cableados estructurados para garantizar una conectividad eficiente y segura en tu empresa o residencia. Nuestros servicios incluyen:</p>
            <ul>
                <li class="no-list">Diseño e Implementación de Redes</li>
                <li class="no-list">Instalación de Cableado Estructurado</li>
                <li class="no-list">Configuración y Optimización de Redes</li>
                <li class="no-list">Mantenimiento Preventivo y Correctivo</li>
            </ul>
            <p>Confía en nuestra experiencia para asegurar un entorno de red robusto y confiable. Contacta con nuestro equipo para obtener más detalles y personalizar la solución según tus necesidades específicas.</p>
        `;
        
        div.appendChild(closeButton);
        div.appendChild(div2);
        redesSection.appendChild(div);
    } else {
        subMenu.remove();
    }
});

function butonCloseClickRedes(){
    redesSection.firstElementChild.remove();
}


//"https://formspree.io/tu-email-aqui