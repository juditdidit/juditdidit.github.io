$(function() {
	setTimeout(function() {
		$("body").removeClass("preload");
	}, 400); 


	$("#dropdown-toggle").click(function() {
		if ($('#dropdown-toggle').attr('aria-expanded') === 'false') {
			$('html, body').animate({
				scrollTop: $("#start").offset().top
			}, 500);
		}
	});
});
