// register the Scroll trigger with a capital "S"
gsap.registerPlugin(ScrollTrigger);


/*
gsap.to(".c", {
    //** call it here with a lowercase "s"
    scrollTrigger: {
      //  TRIGGER 
      trigger: ".c", // selector or element
      
      //   TOGGLE ACTIONS
      //** 1 when its goes out of view port and you scroll up (towards header) 
        //** 2 what it does when the scroller is out of view so you scroll past 
        //** 3 what to do when it comes back in screen / 
        //** 4 This is for when we scroll all the way back past the start, usually pause or reset is good here. 
        
       
        // toggleActions: "restart pause reverse pause",
        //** Usually the animation will play as soon as it enters the view port.
        //** we can change that setting here (the first value relates to the trigger element & the second value relates to  is the element and the value relates to the scroller itself)
        //** we can use top center bottom, but we can also use px values or percentages which are always relative to the top.
        //** start: "top center",
        start: "center center",
        
        // end: "bottom top",

        //** if we want to make the end relative to the start the we can do so like this
         end: "+=300",

        //  we can even use a function use dynamic values that will get call whenever the screen is resized as well
        end: () => "+=" + document.querySelector(".c").offsetWidth,


        // will show a visual marker in coordinates with the start and end so we can see what is going on and where the event is being fired and ended
        markers:true,

      },
    x:400,
    rotation:360,
    duration:3
});

*/

// //.. Here is how we have different start and end triggers
// gsap.to(".b", {

//   scrollTrigger: {
//     trigger: ".a", // selector or element
//     start: "bottom 50px",
    
//   //  // we have added the end trigger in
//     endTrigger: ".c",
//     end:"bottom 50%",

//     markers:true,
//     toggleActions: "restart none reverse pause",

//   },
//   x:400,
//   rotation:360,
//   duration:3
// });



// // ?? Here is how we animate on scroll.
// gsap.to(".b", {

//   scrollTrigger: {
//     trigger: ".b", // selector or element
//     start: "top center",
//     end:"bottom 100px",

//     markers:true,
//     ease:"none",
//     duration:3,
    
// ** we can add the control by scroll by adding in the scrub setting below""
//  ** scrub:true
//  .. by setting the scrub to "1" it will now take the play head 1 second to catch up
//  .. scrub:1,
//   ..  scrub:2,

//   },
//   x:400,
//   rotation:360,
//   duration:3
// })

// ?? Here is how we can do it in a timeline!
// let tl = gsap.timeline({
//   scrollTrigger:{
//    trigger: ".b", // selector or element
//     start: "top center",
//     end:"bottom 100px",

//     markers:true,
//     ease:"none",
//     duration:3,
    
//   }
// });


// tl.to(".b",{
//   x:400,
//   rotation: 360,
//   ease:"none",
//   duration:3,
// })
// .to(".b",{
//   backgroundColor:"purple",
//   duration:1
// })
// .to(".b",{
//  x:0,
//  duration:3
// });


// ?? PINNING 
// .. now when we scroll past the starting point it will become pinned in place while the trigger is active
// gsap.to(".c",{
//   scrollTrigger:{
//     trigger:".c",
//     start: "top 80%",
//     end: "top 60%",
//     scrub: true,
// ** if we set to true it assumes the element we are talking about eg(the trigger) is the one we want to pin, but we can actually pin any element.
// ** this is handy for target a whole page and pinning it for cool slider effects
//     pin: true,
//     markers:true
//   },
//   x:400,
//   rotation: 360,
//   ease:"none",
//   duration:3
// });


// // Pinning always adds padding by default.
// gsap.utils.toArray(".panel").forEach((panel, i)=>{
  
//   ScrollTrigger.create({
    
//     trigger:panel,
//     start: "top top",
//     pin:true,

//     // .. Here is how we turn off the default padding setting. (This will cause things to now overlap which can be used for cool effects)
//     pinSpacing: false

//   });   
  
// });

// Sets the default settings 
ScrollTrigger.defaults({
  toggleActions: "restart pause resume none",
  markers: true
})


// // Callbacks and custom options
ScrollTrigger.create({
  trigger: ".c",
  start: "top center",
  end: "top 100px",
  scroller: '#container', //.. here is how we can change the default scroller from the viewport to a specific element in the dom
  // horizontal: true, //.. here is how we switch from watching vertical scrolling to horizontal
  onEnter: ()=> console.log("enter"),
  onLeave: ()=> console.log("leave"),
  onEnterBack: ()=> console.log("enter back"),
  onLeaveBack: ()=> console.log("all the way back"),
  onUpdate: (self)=> console.log("update", self.progress.toFixed(3)),  // 1 is complete
  onToggle: (self)=> console.log("toggled", self.isActive), // returns boolean
  toggleClass: "active", // state the class name we want to toggle (we can also add to multiple classes here (check the docs!))
  id:"my-id", // adds id to the markers and we can also grab the scroll trigger by the id 
  markers: true

})
 
// let trigger = ScrollTrigger.getById("my-id");  //.. here is how we grab a scroll trigger by ID






