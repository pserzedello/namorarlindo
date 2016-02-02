jQuery(function($) {'use strict';
	$('li.dropdown').find('.fa-angle-down').each(function(){
		$(this).on('click', function(){
			if( $(window).width() < 768 ) {$(this).parent().next().slideToggle();}
			return false;
		});
	});
	if( $('#video-container').length ) {$("#video-container").fitVids();}
	new WOW().init();

});
