console.log('this'); 
// anime({
//     targets: '.staggering-grid-demo .el',
//     scale: [
//       {value: .1, easing: 'easeOutSine', duration: 500},
//       {value: 1, easing: 'easeInOutQuad', duration: 1200}
//     ],
//     delay: anime.stagger(200, {grid: [14, 5], from: 'center'})
//   });
anime({
  targets: '.staggering-grid-demo',
  scale: [{value:.1,easing:'easeOutSine',duration:500}
  {value: 1, easing: 'easeInOutQuad', duration: 1200}]
});
  