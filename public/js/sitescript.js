// stickbar active
const stickBar = document.querySelector('#stick-bar');

window.onscroll = function(){
    if(window.pageYOffset > 100){
        stickBar.classList.add('active');
    }

    if(window.pageYOffset < 100){
        if(stickBar.classList.contains('active')) stickBar.classList.remove('active');
    }
}

// left-nav event

const leftNav = document.querySelector('.left-navigation');
const hamburgerBtns = document.querySelectorAll('.btn-nav');
const clsBtn = document.getElementById('cls-nav-btn');
hamburgerBtns.forEach( (e) =>{
    e.onclick = function(){
        leftNav.classList.add('active');
    }
});

clsBtn.onclick = function(){
    leftNav.classList.remove('active')
}