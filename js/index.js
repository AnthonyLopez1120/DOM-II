// Your code goes here
//1
let newTitle = document.querySelector('.logo-heading');
newTitle.addEventListener('click', ()=>{
    newTitle.style.border = "red dotted 1px";
});

//2
let newNav = document.querySelectorAll('.nav-link');
newNav.forEach(item=>{item.addEventListener('mouseenter', (e)=>{
    item.style.fontSize = '4rem';
    e.preventDefault();
});})

//3
newNav.forEach(item=>{item.addEventListener('mouseleave', ()=>{
    item.style.fontSize = '1.6rem';
});})

//4
let imageChange = document.querySelector('.intro img')
imageChange.addEventListener('dblclick', ()=>{
    imageChange.setAttribute('src','img/adventure.jpg')
})


//5
let paras = document.querySelector('p');
document.addEventListener('keydown', () => {
    paras.style.textDecoration = "line-through";
});

//6

let scroll = document.querySelector('body');
scroll.addEventListener('wheel', ()=>{
    scroll.style.backgroundColor = 'red';
})


//7
let copy = document.querySelector('h1')
copy.addEventListener('copy', () => {
    copy.style.fontFamily = "Verdana";
});

//8
let select = document.querySelector('.text-content h2')
select.addEventListener('mouseover', ()=>{
    select.style.color = "yellow"
})


//9
let drag = document.querySelector('.img-content img');
drag.addEventListener('drag', () =>{
    drag.style.display = "none";
});

//10

let mousemove = document.querySelector('.text-content h2');
mousemove.addEventListener('mousemove', () =>{
    mousemove.style.border = "solid 5px yellow";
});

let prop1 = document.querySelector('.intro p');
prop1.addEventListener('click', (e)=>{
    prop1.style.backgroundColor = 'black';
    e.stopPropagation();
})

let prop2 = document.querySelector('.intro')
prop2.addEventListener('click', ()=>{
    prop2.style.backgroundColor = 'yellow'
})
