const navButton = document.querySelector('.nav-button');
const navOpen = document.querySelector('.nav-open');


// gsap.to('.cover', {
//     duration: 1, 
//     width: '40%', 
// });


// Create a timeline
let tl = gsap.timeline({
    // delay: 0.5,
    paused: true, // default is false
    // repeat: 2, // number of repeats (-1 for infinite)
    // repeatDelay: 1, // seconds between repeats
    // repeatRefresh: true, // invalidates on each repeat
    // yoyo: true, // if true > A-B-B-A, if false > A-B-A-B
    // defaults: { // children inherit these defaults
    //   duration: .5,
    //   ease: "none" 
    // },
    // smoothChildTiming: true,
    // autoRemoveChildren: true,
    // onComplete: myFunc,
    // other callbacks: 
    // onStart, onUpdate, onRepeat, onReverseComplete
    // Each callback has a params property as well
    // i.e. onUpdateParams (Array)
});


// Sequence multiple tweens
tl.to(".cover", {
        duration: 1,
        width: "60%",
        ease: "back.in",

    }
)
.to("nav", {
        height: "100%",
        ease: "power2",
        delay: -.5,
        duration: 1
    }
)
.fromTo(".nav-open", {
    //    duration: 4.5,
       opacity: 0,
       x: 50,
       ease:"power.out"
    }, 
    {
        opacity:1,
        x:0,
        duration: 1.5,
        onComplete : function(){
            navOpen.style.pointerEvents = 'auto';
            console.log('done');
        },
        onReverseComplete : function(){
            navOpen.style.pointerEvents = 'none';
            console.log('undone');
        }

    }

);
// special properties (duration, ease, etc.) go in toVars

navButton.addEventListener('click', (e) => {

    // stop animation from being run when it is already being played
    if(tl.isActive()){
        e.preventDefault();
        e.stopImmediatePropagation();
        return false;
    }

    navButton.classList.toggle('true');

    navButton.classList.contains('true') ? tl.play() : tl.reverse();

});