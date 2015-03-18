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

	$(".results-cards .card button").click(function(e) {
		e.preventDefault();

		var toggleButton = $(this);
		var toggleCard = toggleButton.closest('.card'); 

		toggleCard.toggleClass('flip');
	});
});
