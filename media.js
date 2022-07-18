let collection=document.querySelector('.nav')
let smtin=document.querySelector('div')
console.log(smtin)
let menu=collection.lastElementChild
let mobile=document.querySelector('.mobile')
let close=mobile.firstElementChild;
console.log(mobile.firstElementChild)
smtin.style.display='none'
menu.addEventListener('click',function(){
    smtin.classList.add('mobile-menu')
    smtin.style.display='flex'
})
close.addEventListener('click',function(){
    mobile.style.display='none'
    smtin.removeAttribute('class','mobile-menu')
})
