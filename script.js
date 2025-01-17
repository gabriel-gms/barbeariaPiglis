const menu = document.querySelector('#active-menu')
const closeMenu = document.querySelector('#close')
const menuDisplayNone = document.querySelector('#menu-mobile')
const menuOptions = document.querySelectorAll('#menu-mobile nav li')
console.log(menuOptions);


closeMenu.addEventListener('click', ()=>{
    menuDisplayNone.style.display = 'none';
})

menu.addEventListener('click', ()=>{
    menuDisplayNone.style.display = 'block';
})

menuOptions.forEach((v,i)=>{
    v.addEventListener('click', ()=>{
        menuDisplayNone.style.display = 'none';
    })
})