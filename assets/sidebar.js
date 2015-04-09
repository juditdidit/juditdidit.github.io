$(function() {
	$('#sidenav').affix({
		offset: {
			top: ($('#sidenav').offset().top) - 64, // container padding top minus negative margin top
		}
	})

	console.log($('#sidenav').height());
	console.log(($('.footer').outerHeight(true)) + 70);
});