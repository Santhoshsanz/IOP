gauge("gauge");
rodentDirection("rodentDir");
renderActivitygauge('activityGauge');
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