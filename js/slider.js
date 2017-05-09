

// Slider Home

var slider = $('.sh_cont');
var link = $('.sh_cont .sh_slide a');
var h1 = $('.sh_cont .sh_slide h1');
var h2 = $('.sh_cont .sh_slide h2');
var img = $('.sh_cont .sh_slide img');


	// Init
	// window.setTimeout(function(){
	// 		link.fadeIn(1000);
	// 		h1.fadeIn(1200);
	// 		h2.fadeIn(1000);
	// 	}, 500);
	// window.setTimeout(function(){
	// 		img.fadeIn(1000);
	// 	}, 500);
	// window.setTimeout(function(){
	// 		link.fadeOut(1000);
	// 		h1.fadeOut(1200);
	// 		h2.fadeOut(1000);
	// 	}, 6000);
	// window.setTimeout(function(){
	// 		img.fadeOut(1000);
	// 	}, 6500);

function mover(){

	// Settings Moves
	window.setTimeout(function(){
			link.fadeIn(1000);
			h1.fadeIn(1200);
			h2.fadeIn(1000);
		}, 500);
	window.setTimeout(function(){
			img.fadeIn(1000);
		}, 500);
	window.setTimeout(function(){
			link.fadeOut(1000);
			h1.fadeOut(1000);
			h2.fadeOut(800);
		}, 6000);
	window.setTimeout(function(){
			img.fadeOut(1000);
		}, 6500);

	// Infinite Cicle
	$('.sh_cont .sh_slide:first').insertAfter('.sh_cont .sh_slide:last');
}

function autoplay(){
	interval = setInterval(function(){
		mover();
	}, 8000);
}

autoplay();