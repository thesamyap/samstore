$(document).ready(function(){

	 $('.bxslider').bxSlider({
	    mode: 'fade',
	    captions: true,
	    slideWidth: 1200,
	    pager: true,
	    controls: false,
	    auto: true
	  });

	 const app = document.getElementById('typewriter');

		const typewriter = new Typewriter(app, {
			loop: true,
			delay:95
		});

		typewriter
			.typeString('Conoce las variadades')
			.pauseFor(900)
			.start();


	$('.backtoup').fadeOut();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 150) {
	    $('.backtoup').fadeIn();
	}else{
	    $('.backtoup').fadeOut();
	}
	});
 
	$('.backtoup').click(function () {
	    $("html, body").animate({ scrollTop: 0 }, 800);
    	    return false;
	});
})
