var gridWidth,
setFlag = 0;

window.gridSetting = function() {
$('.grid').each(function() {
    var $grid = $(this),
        width = '',
        colNo = $(this).data('col-no'),
        gutter = $(this).data('gutter'),
        gutterPixel = '',
        gutter_pixel = '';

    //If gutter value is not defined
    if (gutter === undefined) {}
    // If gutter Value in Pixel
    else if (gutter.indexOf('%') === -1) {
        gutterPixel = parseFloat(gutter, 10);
        width = (100 / colNo) + 0.04;
        $grid.find('.shuf-item').each(function() {
            $(this).css({
                'margin-top': gutterPixel,
                'padding-left': gutterPixel / 2 + 'px',
                'padding-right': gutterPixel / 2 + 'px'
            });
        });
        $grid.css('margin-top', -gutterPixel);

        // Grid width calculation for desktops
        if (!device.tablet() && !device.mobile()) {
            if (setFlag === 0) {
                gridWidth = $grid.parent('.grid-container').innerWidth();
                $grid.width(gridWidth + gutterPixel);
                $grid.parent('.grid-container').css({
                    'margin-left': -gutterPixel / 2
                });
                setFlag = 1;
            } else {
                $grid.parent('.grid-container').css({
                    'margin-left': 0
                });
                gridWidth = $grid.parent('.grid-container').innerWidth();
                $grid.width(gridWidth + gutterPixel);
                $grid.parent('.grid-container').css({
                    'margin-left': -gutterPixel / 2
                });
            }
            // Grid width calculation for mobiles and tablets
        } else {
            gridWidth = $grid.parent('.grid-container').innerWidth();
            $grid.width(gridWidth);
        }
    }

    //Add sizer width
    $grid.find('.sizer').each(function() {
        console.log("sizer running");
        $(this).css({
            'width': width + '%',
        });
    });
});
};

if ($('.grid').length) {
shuff();
gridSetting();
}
