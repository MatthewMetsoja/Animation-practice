# Animation-practice
Learning how to Morph SVGs


.fromTo(
      '#greenRB',
      {
        fill: 'transparent',
        strokeDasharray: 747.6861572265625,
        strokeDashoffset: 747.6861572265625,
      },
      {
        fill: '#28FF96',
        duration: 0.5,
        strokeDashoffset: 0,
      }
    )
    
      //   left cloud length = 381.42095947265625
  //  right cloud length = 378.31304931640625
  //  bottom green length = 747.6861572265625
  //  middle yellow = 943.8169555664062
  //  top red length = 1139.823486328125

  // console.log(
  //   `left cloud length = ${leftCloud.getTotalLength()}\n`,
  //   `right cloud length = ${rightCloud.getTotalLength()}\n`,
  //   `bottom green length = ${bottomGreen.getTotalLength()}\n`,
  //   `middle yellow = ${middleYellow.getTotalLength()}\n`,
  //   `top red length = ${topRed.getTotalLength()}`
  // );

  let bottomGreen = document.querySelector('#greenRB');
  let middleYellow = document.querySelector('#yellowRB');
  let topRed = document.querySelector('#redRB');

