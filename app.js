/* ELEMENTOS NAV */
let home = document.querySelector(".home > a");
let about = document.querySelector(".about > a");
let project = document.querySelector(".project > a");
let contact = document.querySelector(".contact > a");

/* DETECTAMOS RESOLUCIÓN DE PANTALLA */

function changeNav(){
    let w = document.documentElement.clientWidth;

    if (w < 601){
        home.innerHTML = '<i class="fa-solid fa-house"></i>';
        about.innerHTML = '<i class="fa-solid fa-user"></i>';
        project.innerHTML = '<i class="fa-sharp fa-solid fa-computer"></i>';
        contact.innerHTML = '<i class="fa-solid fa-envelope"></i>';
    }else{
        home.innerHTML = '<a href="#home">INICIO</a>';
        about.innerHTML = '<a href="#about">SOBRE MI</a>';
        project.innerHTML = '<a href="#project">PROYECTOS</a>';
        contact.innerHTML = '<a href="#contact">CONTACTO</a>';
    }
}

changeNav();

window.addEventListener('resize', changeNav);
