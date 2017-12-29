$('.top-bar .events-block').on('click', function (e) {
    e.preventDefault();
    $('.sensor-alerts-page').addClass('opened');
});
$('.sensor-alerts-page .page-close').on('click', function (e) {
    e.preventDefault();
    $('.sensor-alerts-page').removeClass('opened');
});

$('.top-bar .notification-block').on('click', function (e) {
    e.preventDefault();
    $('.notifications-page').addClass('opened');
});
$('.notifications-page .page-close').on('click', function (e) {
    e.preventDefault();
    $('.notifications-page').removeClass('opened');
});