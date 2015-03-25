$(function() {

	// prevent css transition from triggering on page load
	setTimeout(function() {
		$('body').removeClass('preload');
	}, 400); 

	//scroll "dropdown" box into view on index page
	$('#dropdown-toggle').click(function() {
		if ($('#dropdown-toggle').attr('aria-expanded') === 'false') {
			$('html, body').animate({
				scrollTop: $('#start').offset().top
			}, 500);
		}
	});

	// results page card flip
	$('.results-cards .card button').click(function(e) {
		e.preventDefault();

		var toggleButton = $(this);
		var toggleCard = toggleButton.closest('.card'); 

		toggleCard.toggleClass('flip');
	});

	// results page sticky table header
	var cellProduct = $('#results tbody td.product').css('width');
	var cellEScore = $('#results thead td.e-score').css('height');

	console.log(cellProduct + ' ' + cellEScore);

	function stickyTableHeader() {
		
	}
});
