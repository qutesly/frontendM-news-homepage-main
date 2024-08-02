const navbar = document.querySelector('.navbar');
const menuElement = document.getElementById('menu');
const closeElement = document.getElementById('close');

// menuElement.addEventListener('click', ()=> {
//     if(menuElement){
//         navbar.classList.add('.active');
//     }
// })

menuElement.addEventListener('click', openMenu);
closeElement.addEventListener('click', closeMenu);

function openMenu() {
    navbar.classList.add('active');
}

function closeMenu() {
    navbar.classList.remove('active');
}