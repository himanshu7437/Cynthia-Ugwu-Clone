const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

var crsr = document.querySelector('.crsr');
var maindiv = document.querySelector('.main');


function crsrfollower() {
    window.addEventListener('mousemove', function(dets) {
        crsr.style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
    }) 
}

crsrfollower();