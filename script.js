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

function projectImg() {
    var elements = document.querySelectorAll('.elem');

    elements.forEach(function(elem) {
        let img = elem.querySelector('img');
        let title = elem.querySelector('h1');

        elem.addEventListener('mouseenter', function(e) {
            const rect = elem.getBoundingClientRect();
            let x = e.clientX - rect.left - img.offsetWidth / 2; 
            let y = e.clientY - rect.top - img.offsetHeight / 2;

            // Instantly position image to cursor
            gsap.set(img, { x: x, y: y });

            // Fade in image
            gsap.to(img, { opacity: 1, duration: 0.4 });

            // Animate title
            gsap.to(title, { 
                x: 30, 
                color: "#888", 
                duration: 0.4, 
                ease: "power2.out" 
            });
        });

        elem.addEventListener('mousemove', function(e) {
            const rect = elem.getBoundingClientRect();
            let x = e.clientX - rect.left - img.offsetWidth / 2; 
            let y = e.clientY - rect.top - img.offsetHeight / 2;

            gsap.to(img, {
                x: x,
                y: y,
                duration: 0.3,
                ease: "power2.out"
            });
        });

        elem.addEventListener('mouseleave', function() {
            gsap.to(img, { opacity: 0, duration: 0.4 });
            gsap.to(title, { 
                x: 0, 
                color: "#fff", 
                duration: 0.4, 
                ease: "power2.out" 
            });
        });
    });
}



crsrfollower();
firstPage();
btn1();
btn2();
projectImg();