"use strict";

let icon = document.querySelector('#icn')
let bars_x = document.querySelector('bars-x')
let shop = document.querySelector('.shop')

icon.addEventListener('click',()=>{
    shop.classList.toggle('active');

})


