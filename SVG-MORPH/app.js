const moonPath = "M13 27.5C13 42.6878 32.5 55 29.5 55C14.3122 55 0 42.6878 0 27.5C0 12.3122 12.8122 0 28 0C30 0 13 12.3122 13 27.5Z";

const sunPath = "M55 27.5C55 42.6878 42.6878 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C42.6878 0 55 12.3122 55 27.5Z";

const darkMode = document.querySelector('#darkMode'); // get original svg 

let toggle = false;

// WE NEED TO CLICK ON THE SUN

darkMode.addEventListener('click', () =>{
    
    // we need to use amime.js
    // Here we set up the timeline
    const timeline = anime.timeline({
        duration: 750,
        easing: "easeOutExpo"
    });


    // ADD DIFFERENT ANIMATIONS TO THE TIMELINE
    timeline.add({
        targets: ".sun",
        d:[
            {value: toggle ? sunPath : moonPath},

        ]
    }) // here is how we string together each part of the timeline the -=350, is how we speed each stage up
    // if we were to use -=750 it would happen at the same time as stage one.
    .add({
        targets:'#darkMode',
        rotate: toggle ? 320 : 320
    }, '-= 350')
    .add({
        targets: "section",
        backgroundColor: toggle ? "rgb(255,255,255)" : "rgb(22,22,22)",
        color: toggle ? "rgb(22,22,22)" : "rgb(255,255,255)" ,
    },'-= 700');

    // Everytime we click on the sun I want that toggle to switch (Here is how to make a on off switch)
    if(!toggle){
       toggle = true;
    }
    else{
       toggle = false;
    }
});

