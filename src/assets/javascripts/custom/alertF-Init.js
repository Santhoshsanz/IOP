flyCountvsTime("flyCountvsTime");
flyCount("flyCount");
var contentOneH = $('.content-pane-left').outerHeight();
var contentTwoH = $('.content-pane-right').outerHeight();
if (contentOneH > contentTwoH) {
    $('.content-pane-left').height(contentTwoH);
    $('.content-pane-left').addClass('mCustomScrollbar');
} else {
    $('.content-pane-right').height(contentOneH);
    $('.content-pane-right').addClass('mCustomScrollbar');
}


$('.add-scroll').mCustomScrollbar({
    "autoHideScrollbar": true
});
$('.options-button').on('click', function(e) {
    e.preventDefault();
    $(this).closest('.options-button-block').find('.options-button-expand').animate({
        'width': 'toggle'
    }, 500, 'easeInOutExpo');
});
$('.options-button-expand-close').on('click', function(e) {
    e.preventDefault();
    $(this).closest('.options-button-block').find('.options-button-expand').animate({
        'width': 'toggle'
    }, 500, 'easeInOutExpo');
});

$('.facility-details').each(function() {
    $(this).find('.client-logo').height($(this).find('.facility-details-block').height());
});
$('.live-weather').each(function() {
    $(this).find('.date-time').height($(this).find('.weather').height());
});

$('.pocessing-steps-flow').each(function() {
    $(this).find('.step-circle').each(function() {
        $(this).height($(this).width());
    });
    $(this).find('.steps-seperator-wrap').each(function() {
        $(this).height($('.step-circle').height());
    });
});