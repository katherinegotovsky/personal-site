


// $(document).ready(function(){
//         $('body').fadeIn(1000);
//         var window_height = $(window).height();
//         $(window).scroll(function() {
//           var scrollMiddle = $(window).scrollTop() + window_height/2;
//           $('section').each(function(e) {
//             elTop = $(this).offset().top;
//             elBtm = elTop + $(this).height();
//             if (elTop < scrollMiddle && elBtm > scrollMiddle - 300) {
//               $(this).addClass(this.id + '_hover');
//               $('#' + this.id + ' img').css('transform', 'rotateY(-10deg) rotateX(10deg) rotateZ(1deg) scale(1)');
//             } else {
//               $(this).removeClass(this.id + '_hover');
//               $('#' + this.id + ' img').css('transform', 'rotateY(0) rotateX(0) rotateZ(0) scale(1)');
//             }
//           });
//         });
//       });



ScrollReveal().reveal('#first', { delay: 200, duration: 2000 });
ScrollReveal().reveal('#second', { delay: 400, duration: 2000 });
ScrollReveal().reveal('#reveal1', { delay: 200, duration: 2000 });
ScrollReveal().reveal('#reveal2', { delay: 400, duration: 2000 });
ScrollReveal().reveal('#reveal3', { delay: 600, duration: 2000 });
ScrollReveal().reveal('#reveal4', { delay: 800, duration: 2000 });
ScrollReveal().reveal('#work .subheading', { delay: 200, duration: 2000 });
ScrollReveal().reveal('#work .container', { delay: 400, duration: 2000 });
ScrollReveal().reveal('#projects .subheading', { delay: 200, duration: 2000 });
ScrollReveal().reveal('#projects .container', { delay: 400, duration: 2000 });

//Text writing on the front page
// var textWrapper = document.querySelector('.ml11 .letters');
// textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

// anime.timeline({loop: false})
// .add({
//   targets: '.ml11 .line',
//   scaleY: [0,1],
//   opacity: [0.5,1],
//   easing: "easeOutExpo",
//   duration: 700
// })
// .add({
//   targets: '.ml11 .line',
//   translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
//   easing: "easeOutExpo",
//   duration: 700,
//   delay: 100
// }).add({
//   targets: '.ml11 .letter',
//   opacity: [0,1],
//   easing: "easeOutExpo",
//   duration: 600,
//   offset: '-=775',
//   delay: (el, i) => 34 * (i+1)
// }).add({
//   targets: '.line',
//   opacity: 0,
//   duration: 1000,
//   easing: "easeOutExpo",
//   delay: 1000
// });

//highlight the word
// function highlightFor(id,color,seconds){
//     var element = document.getElementById(id)
//     var origcolor = element.style.backgroundColor
//     element.style.backgroundColor = color;
//     var t = setTimeout(function(){
//        element.style.backgroundColor = origcolor;
//     },(seconds*1000));
// }

//highlight objects
// highlightFor('highlight1','red',8);


// Make the images move
$(document).ready(function(){
  $('body').fadeIn(1000);
  var window_height = $(window).height();
  $(window).scroll(function() {
    var scrollMiddle = $(window).scrollTop() + window_height/2;
    $('.project').each(function(e) {
      elTop = $(this).offset().top;
      elBtm = elTop + $(this).height();
      if (elTop < scrollMiddle && elBtm > scrollMiddle - 100) {
        $(this).addClass(this.id + '_hover');
        $('#' + this.id + ' img').css('transform', 'rotateY(-10deg) rotateX(10deg) rotateZ(1deg) scale(1)');
        $('#' + this.id + ' a').css('color', '#777777');
      } else {
        $(this).removeClass(this.id + '_hover');
        $('#' + this.id + ' img').css('transform', 'rotateY(0) rotateX(0) rotateZ(0) scale(1)');
      }
    });
  });
});

//make the diamonds move
$(document).ready(function(){
  $('.timeline-event').each(function(e) {
    $(this).hover( function() {
      $('#' + this.id + ' .timeline-event-icon').css('transform', 'rotate(45deg)');
      $('#' + this.id + ' .timeline-event-icon').css('background-color', 'white');
    }, function () {
      $('#' + this.id + ' .timeline-event-icon').css('transform', 'rotateY(0) rotateX(0) rotateZ(0)');
      $('#' + this.id + ' .timeline-event-icon').css('background-color', '#777777');
    });
  });
});

//scrolling
// $(document).ready(function(){
//   $('#nav').onePageNav({
//     currentClass: 'current',
//     changeHash: false,
//     scrollSpeed: 1000,
//     scrollThreshold: 0.5,
//     filter: '',
//     easing: 'swing',
//     begin: function() {
//        //Hack so you can click other menu items after the initial click
//        $('body').append('<div id="device-dummy" style="height: 1px;"></div>');
//      },
//      end: function() {
//         //I get fired when the animation is ending
//         $('#device-dummy').remove();
//       },
//       scrollChange: function($currentListItem) {
//         //I get fired when you enter a section and I pass the list item of the section
//       }
//     });
// });



