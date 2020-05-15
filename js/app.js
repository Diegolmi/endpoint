$(document).ready(function(){
	$('.mobile .menu li:has(ul)').click(function(e){
		e.preventDefault();
		if($(this).hasClass('activado'))
		{
			$(this).removeClass('activado');
			$(this).children('ul').slideUp();
		}
		else
		{
			$('.mobile .menu li ul').slideUp();
			$('.mobile .menu li').removeClass('activado');
			$(this).addClass('activado');
			$(this).children('ul').slideDown();
		}
	});

	$('.mobile .btn-menu').click(function(){
		$('.mobile .contenedor-menu .menu').slideToggle();
	});
	/*
	$(window).resize(function(){
		if ($(document).width() <= 768) {
			$('.contenedor-menu .menu').css({'display' : 'none'});
			$('.mobile .menu li ul').slideUp();
			$('.mobile .menu li').removeClass('activado');
		}
	});
	*/

	$('.mobile .menu li ul li a').click(function(e){
		window.location.href = $(this).attr("href");
	});
});




