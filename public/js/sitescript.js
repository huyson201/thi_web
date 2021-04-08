// stickbar active
const stickBar = document.querySelector('#stick-bar');
const toTopBtn = document.getElementById('to-top-btn');
var isScrolling;

window.onscroll = function(){

    if(window.pageYOffset > 100){
        stickBar.classList.add('active');
        toTopBtn.classList.add('active');
    }

    if(window.pageYOffset < 100){
        if(stickBar.classList.contains('active')) stickBar.classList.remove('active');
        if(toTopBtn.classList.contains('active')) toTopBtn.classList.remove('active');
    }
    // Clear our timeout throughout the scroll
	window.clearTimeout( isScrolling );

	// Set a timeout to run after scrolling ends
	isScrolling = setTimeout(function() {
        toTopBtn.classList.remove('active');
	}, 3000);
 
}

//  to top btn event
 function toTop(){
    window.scrollTo({      
        top:0,  
        behavior:"smooth",    
    })
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


