

// Slider Home

var slider = $('.sh_cont');
var link = $('.sh_cont .sh_slide a');
var titulo = $('.sh_cont .sh_slide h1');
var titulo2 = $('.sh_cont .sh_slide h2');
var img = $('.sh_cont .sh_slide img');


	// Init
	link.fadeIn(750);
	titulo.fadeIn(750);
	titulo2.fadeIn(750);
	window.setTimeout(function(){
			img.fadeIn(750);
		}, 500);
	window.setTimeout(function(){
			link.fadeOut(750);
			titulo.fadeOut(750);
			titulo2.fadeOut(750);
		}, 6000);
	window.setTimeout(function(){
			img.fadeOut(750);
		}, 6500);

function mover(){

	link.fadeIn(750);
	titulo.fadeIn(750);
	titulo2.fadeIn(750);
	window.setTimeout(function(){
			img.fadeIn(750);
		}, 500);
	window.setTimeout(function(){
			link.fadeOut(750);
			titulo.fadeOut(750);
			titulo2.fadeOut(750);
		}, 6000);
	window.setTimeout(function(){
			img.fadeOut(750);
		}, 6500);

	// Infinite Cicle
		$('.sh_cont .sh_slide:first').insertAfter('.sh_cont .sh_slide:last');
}

function autoplay(){
	interval = setInterval(function(){
		mover();
	}, 9250);
}

autoplay();