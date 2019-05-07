jQuery(document).ready(function ($) {
    $(window).load(function () {
        $('#loader').fadeOut('slow', function () { $(this).remove(); });
    });
});