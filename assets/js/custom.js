'use strict';

// Javascript to enable link to tab
var url = document.location.toString();
if (url.match('#')) {
    $('.nav-tabs-ver a[href="#' + url.split('#')[1] + '"]').tab('show');
}

// Change hash for page-reload
$('.nav-tabs-ver a').on('shown.bs.tab', function (e) {
    window.location.hash = e.target.hash;
})

// For Slide Text



// 	var width = 750;
// 	var animationSpeed = 1000;
// 	var pause = 3000;
// 	var currentText = 1;

// 	var $main_text_container = $('#main-text-container')
// 	var $text_container = $main_text_container.find('.text-slide-container');
// var interval;

// 	interval = setInterval(function(){
// 		$text_container.animate({'left' : '-='+width},animationSpeed);
// 		currentText++;
// 		if(currentText == $text_container.length){
// 			clearInterval(interval);
// }
		
// 	},pause);

// 	$(function(){
// 	 var animationSpeed = 1000;
//    var pause = 3000;
//    var currentText = 1;
// var $text_container = $('.text-slide-container');
// var interval;
//    $("#main-text-container > .text-slide-container:gt(0)").hide();

// function starSlide(){
//    interval = setInterval(function() { 
//   $('#main-text-container > .text-slide-container:first')
//     .hide()
//     .next()
//     .fadeIn(1000)
//     .end()
//     .appendTo('#main-text-container');
//     currentText++;
//     if(currentText == $text_container.length){
//          clearInterval(interval);
// }
// },pause);
//       }
//         $('#carouselExampleIndicators').bind('slide.bs.carousel', function (e) {
//     starSlide();
// });

// var boxCount = 1;

//  $(".box-pos").css('opacity','0').hide();
// setInterval(function() { 

// $(".box-pos").each(function(i) {
//     $(this).delay(500 * i).animate({'opacity':'1'},800).fadeIn(500);
//     boxCount++;
//     if(boxCount == $(".box-pos").length){
//     	$(".box-pos").css('opacity','0').hide();
//     }
// })
// },1000);


//  })


var animationSpeed = 1000;
   var pause = 3000;
   var currentText = 1;
var $text_container = $('.text-slide-container');
var interval;

function starSlideText(){
   $("#main-text-container > .text-slide-container:gt(0)").hide();
   interval = setInterval(function() { 
  $('#main-text-container > .text-slide-container:first')
    .hide()
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#main-text-container');
    currentText++;
    if(currentText == $text_container.length){
         clearInterval(interval);
}
},pause);
      }
var boxCount = 1;
var BoxPos = $('#carouselExampleIndicators').find('.box-pos');



 function ShowAll(elems){
    elems.hide();
setInterval(function() { 
elems.each(function(i) {
    $(this).delay(500 * i).fadeIn();
    boxCount++;
})
},1000);
}




    

 $('#carouselExampleIndicators').carousel();
 ShowAll(BoxPos);

        $('#carouselExampleIndicators').on('slide.bs.carousel', function (e) {
         var fadInBox = $(e.relatedTarget).find('.box-pos')
    ShowAll(fadInBox);
    starSlideText()
});

