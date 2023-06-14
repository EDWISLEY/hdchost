
//Seleção de elementos
/*const menuBtn = document.querySelector("#menu");
const closeMenuBtn = document.querySelector("#closemenu");
const menu = document.querySelector(".mobilenavbar", ".icon", "#closemenu", ".mobilelogo", ".mobilenavbar-items", ".mobielbtnlogin");


//Eventos*/
/*menuBtn.addEventListener("click", (e) => {
    e.preventDefault();
    menu.classList.add("menuactive");
})*/

function menuShow() {

    let menuMobile = document.querySelector(".mobilenavbar");
    if(menuMobile.classList.contains("open")){
        menuMobile.classList.remove("open");     
    } else {
        menuMobile.classList.add("open")
    }

}