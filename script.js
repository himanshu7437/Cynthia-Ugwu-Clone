const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

function crsrfollower() {
    var crsr = document.querySelector('.crsr');
    window.addEventListener('mousemove', function(dets) {
        crsr.style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
    })
}

function firstPage() {
    var tl = gsap.timeline();

    tl.from(".nav", {
        y: '-10',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    })

    .to(".boundingelem", {
        y: 0,
        ease: Expo.easeInOut,
        duration: 1.5,
        delay: -.7,
        stagger: .2,
    })

    .from(".home-bottom", {
        y: '-10',
        opacity: 0,
        duration: 1.2,
        delay: -.9,
        ease: Expo.easeInOut
    })
}

crsrfollower();
firstPage()