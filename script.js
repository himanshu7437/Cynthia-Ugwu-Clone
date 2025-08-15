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

function btn1() {
    var btn = document.querySelector('.btn1')
    btn.addEventListener('mouseenter', function() {
        gsap.to('.btn1', {
            backgroundColor: 'white',
            color: 'black',
            ease: Power2,
        })
    })
    btn.addEventListener('mouseleave', function() {
        gsap.to('.btn1', {
            backgroundColor: 'black',
            color: 'white',
            ease: Power2,
        })
    })
}

function btn2() {
    var btn2 = document.querySelector('.btn2')
    btn2.addEventListener('mouseenter', function() {
        gsap.to('.btn2', {
            backgroundColor: 'white',
            color: 'black',
            ease: Power2,
        })
    })
    btn2.addEventListener('mouseleave', function() {
        gsap.to('.btn2', {
            backgroundColor: 'black',
            color: 'white',
            ease: Power2,
        })
    })
}

crsrfollower();
firstPage();
btn1();
btn2();