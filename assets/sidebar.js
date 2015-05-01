$(function() {
    $('#sidenav').affix({
        offset: {
            top: $('#sidenav').offset().top, // initial location of #sidenav
            bottom: ($('.has-sidebar').outerHeight(true) * -1) // negative height of .has-nav container
        }
    });




});