// MAIN.JS
//--------------------------------------------------------------------------------------------------------------------------------
//This is main JS file that contains custom JS scipts and initialization used in this template*/
// -------------------------------------------------------------------------------------------------------------------------------
// Template Name: Brandenburg IOP
// Author: Quadnotion.
// Version 1.0 - Initial Release
// Website: http://quadnotion.com
// Copyright: (C) 2017
// -------------------------------------------------------------------------------------------------------------------------------
/*global $:false */
/*global window: false */
(function() {
    "use strict";

    //-----------------------------------------------------------------

    // SHUFFLE INITIALIZATION

    //-----------------------------------------------------------------
    window.shuff = function() {
        var Shuffle = window.Shuffle,
            shuffleInstance = [], //Define shuffleInstance Array
            filtering = '',
            eachGrid = '',
            sorting = '',
            allGrid = document.querySelectorAll('.grid'); //Select all grids

        for (var i = 0; i < allGrid.length; i++) {
            eachGrid = allGrid[i]; //Select each grid
            callShuffle(eachGrid); //Passing each grid to Shuffle init
        }

        function callShuffle(value) {
            imagesLoaded(value, function() {
                var speed = '';

                if (value.getAttribute('data-animation')) //Check for animation
                    speed = 100;
                else
                    speed = 450;

                // Shuffle Initialization
                shuffleInstance.push(new Shuffle(value, { //Shuffle instance
                    itemSelector: '.shuf-item',
                    sizer: value.querySelector('.sizer'),
                    speed: speed,
                    useTransforms: false,
                    columnThreshold: 0.1,
                }));

                filtering = function(group, grid) {
                    for (var i = 0; i < shuffleInstance.length; i++) {
                        var instance = shuffleInstance[i];
                        var instanceGrid = instance.element.className;
                        if (grid === instanceGrid) {
                            shuffleInstance[i].filter(group); //Filtering
                        }
                    }
                };

                function sortByDate(element) {
                    return parseInt(element.getAttribute('data-created'), 10);
                }

                function sortByAlpha(element) {
                    return element.getAttribute('data-sort-alpha').toLowerCase();
                }

                sorting = function(sortGroup, grid) {
                    for (var i = 0; i < shuffleInstance.length; i++) {
                        var instance = shuffleInstance[i];
                        var instanceGrid = instance.element.className;
                        if (grid === instanceGrid) {

                            var value = sortGroup;
                            var options;
                            if (value === 'sort-order') {
                                options = {
                                    reverse: true,
                                    by: sortByDate,
                                    randomize: false,
                                };
                            } else if (value === 'sort-alpha') {
                                options = {
                                    by: sortByAlpha,
                                };
                            } else {
                                options = {};
                            }

                            shuffleInstance[i].sort(options);

                        }
                    }
                };
            });
        }

        function filter() {
            var filterElement = [].slice.call(document.getElementsByClassName("filter")); //All filter items array
            filterElement.forEach(function(filterItem) {
                filterItem.addEventListener("click", function() { //Click listener
                    var isActive = filterItem.classList.contains('active'); //Active item check
                    var btnGroup = filterItem.getAttribute('data-group'); //Find clicked filter item data group
                    var filterGrid = filterItem.closest('.grid-container-wrap').getElementsByClassName("grid"),
                        filterGridName = filterGrid[0].className; //Find clicked filter item grid
                    if (!isActive) //If clicked item is not active
                    {
                        var children = filterItem.parentNode.children;
                        for (var i = children.length - 1; i >= 0; i--) {
                            children[i].classList.remove('active'); //Remove active class
                        }
                        filterItem.classList.add('active'); //Add active class to clicked item
                        filtering(btnGroup, filterGridName);
                    }
                });
            });
        }
        filter();

        function sort() {
            var sortElement = [].slice.call(document.getElementsByClassName("sort")); //All sort items array
            sortElement.forEach(function(sortItem) {
                sortItem.addEventListener("click", function() { //Click listener

                    var isActive = sortItem.classList.contains('active'); //Active item check
                    var btnSortGroup = sortItem.getAttribute('data-sort-group'); //Find clicked filter item data group
                    var sortGrid = sortItem.closest('.grid-container-wrap').getElementsByClassName("grid"),
                        sortGridName = sortGrid[0].className; //Find clicked filter item grid
                    if (!isActive) //If clicked item is not active
                    {
                        var children = sortItem.parentNode.children;
                        for (var i = children.length - 1; i >= 0; i--) {
                            children[i].classList.remove('active'); //Remove active class
                        }
                        sortItem.classList.add('active'); //Add active class to clicked item
                        sorting(btnSortGroup, sortGridName);
                    }
                });
            });
        }
        sort();
    };

    var sortArray = [];

    $('.grid-container-wrap').each(function() {
        if ($(this).find('.sort-options').length) {
            var _this = $(this);

            _this.find('.shuf-item').each(function() {
                var sortCreatedValue = $(this).data('sort-order');
                sortArray.push(parseInt(sortCreatedValue));
            });
            sortArray.sort(function(a, b) {
                return a - b;
            });
            var sortArrayLen = sortArray.length;
            var alphabetArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
            var alphaIndex = -1;

            for (var i = 0; i < sortArrayLen; i++) {
                alphaIndex++;
                if (alphaIndex > 25)
                    alphaIndex = 0;

                var alphaPrefix = '';
                var modValue = parseInt(i / 26, 0);
                for (var j = 0; j < modValue; j++) {
                    alphaPrefix += 'z';
                }

                _this.find('.shuf-item[data-sort-order="' + sortArray[i] + '"]').attr('data-sort-alpha', alphaPrefix + alphabetArray[alphaIndex]);
            }

        }

    });

    // Shuffle Grid Setting
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

    $(window).on('load', function() {
        setTimeout(function() {
            // if ($('.re-active-sensor-tab').length) {
            //     $('.re-active-sensor-tab').each(function() {
            //         var activeValueData = $(this).data("active-value");
            //         var activeValue = 100 - activeValueData + 2;
            //         $(this).append('<div class="re-inactive-sensor-tab"></div>');
            //         $(this).append('<div class="re-active-sensor-knob text-center"  data-tooltip="' + activeValueData + '% change in alerts over last 1 month"><span class="percent-value">' + activeValueData + '<span class="percent">%</span></span></div>');
            //         $(this).find('.re-inactive-sensor-tab').animate({
            //             width: activeValue + "%"
            //         }, 1300);
            //         $(this).find('.re-active-sensor-knob').animate({
            //             left: activeValueData + "%"
            //         }, 1300);
            //     });
            // }
        }, 1000);

        //-----------------------------------------------------------------

        // OWL CAROUSEL INITIALIZATION

        //-----------------------------------------------------------------
        $('.theme-carousel').each(function() {
            var themeCarousel = $(this);
            themeCarousel.owlCarousel({
                animateOut: $(this).data('animateout'),
                animateIn: $(this).data('animatein'),
                autoplay: $(this).data('autoplay'),
                autoplayTimeout: $(this).data('autoplaytimeout'),
                autoplayHoverPause: $(this).data('autoplayhoverpause'),
                autoHeight: $(this).data('autoheight'),
                center: $(this).data('center'),
                loop: $(this).data('loop'),
                items: $(this).data('itemsdefault'),
                margin: $(this).data('margin'),
                stagePadding: $(this).data('stagepadding'),
                startPosition: $(this).data('startposition'),
                slideBy: $(this).data('slideby'),
                nav: $(this).data('nav'),
                navText: [
                    "<i class='ion-chevron-left'></i>",
                    "<i class='ion-chevron-right'></i>"
                ],
                dots: $(this).data('dots'),
                touchDrag: $(this).data('touchdrag'),
                mouseDrag: $(this).data('mousedrag'),
                responsive: {
                    0: {
                        items: 1
                    },
                    361: {
                        items: themeCarousel.data('xsnumber')
                    },
                    768: {
                        items: themeCarousel.data('smnumber')
                    },
                    1025: {
                        items: themeCarousel.data('mdnumber')
                    }
                }
            });
        });




        //-----------------------------------------------------------------

        // OPTIONS BUTTON CLICK

        //-----------------------------------------------------------------

        // $('.map-options-button').on('click', function(e) {
        //     e.preventDefault();
        //     $(this).closest('.map-options-block').find('.map-options').animate({
        //         'width': 'toggle'
        //     }, 500, 'easeInOutExpo');
        // });
        // $('.map-options-close').on('click', function(e) {
        //     e.preventDefault();
        //     $(this).closest('.map-options-block').find('.map-options').animate({
        //         'width': 'toggle'
        //     }, 500, 'easeInOutExpo');
        // });

        //-----------------------------------------------------------------

        // NAVIGATION TRIGGER CLICK

        //-----------------------------------------------------------------
        var headerInnerWidth = $('.header').outerWidth();
        $('.header-inner').outerWidth(headerInnerWidth);
        $('.sign-out-block a').outerWidth(headerInnerWidth);
        $('.header').width('62');
        $('.header .dropdown').width(headerInnerWidth);
        $('.nav-trigger a').on('click', function() {
            var headerWidth = $(this).closest('.header').outerWidth();
            $(this).toggleClass('active');
            if ($(this).hasClass('active')) {
                $(this).closest('.header').animate({
                    'width': headerInnerWidth
                }, 700, 'easeInOutCubic');
            } else {
                $(this).closest('.header').animate({
                    'width': '62'
                }, 700, 'easeInOutCubic');
            }
            $('.nav ul li .dropdown').slideUp(700);

            return false;
        });


        //-----------------------------------------------------------------

        // NAV ITEM CLICK

        //-----------------------------------------------------------------

        $('.nav > ul > li.has-dropdown > a').on('click', function() {

            if ($(this).parent('.has-dropdown').find('.dropdown').hasClass('opened')) {
                $(this).removeClass('active');
                $(this).parent('.has-dropdown').find('.dropdown a').removeClass('active');
                $(this).parent('.has-dropdown').find('.dropdown').removeClass('opened');
                $(this).parent('.has-dropdown').find('.dropdown').stop().slideUp(500);
            } else {
                $(this).closest('ul').find('li a').removeClass('active');
                $(this).parent('.has-dropdown').siblings('.has-dropdown').find('.dropdown.opened').slideUp(500);
                $(this).parent('.has-dropdown').siblings('.has-dropdown').find('.dropdown.opened').removeClass('opened');
                $(this).parent('.has-dropdown').siblings('.has-dropdown').find('a.active').removeClass('active');

                $(this).parent('.has-dropdown').find('> .dropdown').addClass('opened');
                $(this).parent('.has-dropdown').find('> .dropdown').stop().slideDown(700);
                $(this).addClass('active');
            }

            //ANIMATE HEADER
            if (!$('.nav-trigger a').hasClass('active')) {
                $('.nav-trigger a').toggleClass('active');
                if ($('.nav-trigger a').hasClass('active')) {
                    $('.nav-trigger a').closest('.header').animate({
                        'width': headerInnerWidth
                    }, 700, 'easeInOutCubic');
                } else {
                    $('.nav-trigger a').closest('.header').animate({
                        'width': '65'
                    }, 700, 'easeInOutCubic');
                }
            }

            return false;
        });

        $('.sign-out-block a').on('click', function() {
            return false;
        });

        //-----------------------------------------------------------------

        // QUICK PICKS DROPDOWN

        //-----------------------------------------------------------------

        $('.quick-picks-block').on('mouseenter', function() {
            $(this).find('.quick-picks-dropdown').animate({
                'height': 'toggle'
            }, 500, 'easeInOutExpo');
        });

        $('.quick-picks-block').on('mouseleave', function() {
            $(this).find('.quick-picks-dropdown').animate({
                'height': 'toggle'
            }, 500, 'easeInOutExpo');
        });


        //-----------------------------------------------------------------

        // CONTENT BLOCK SCROLL INITIALIZATION

        //-----------------------------------------------------------------

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
    });

    $('.top-bar .events-block').on('click', function(e) {
        e.preventDefault();
        $('.sensor-alerts-page').addClass('opened');
    });
    $('.sensor-alerts-page .page-close').on('click', function(e) {
        e.preventDefault();
        $('.sensor-alerts-page').removeClass('opened');
    });

    $('.top-bar .notification-block').on('click', function(e) {
        e.preventDefault();
        $('.notifications-page').addClass('opened');
    });
    $('.notifications-page .page-close').on('click', function(e) {
        e.preventDefault();
        $('.notifications-page').removeClass('opened');
    });


    //-----------------------------------------------------------------

    // SVGCONVERT INITIALIZATION

    //-----------------------------------------------------------------
    $('.svg-convert').svgConvert();

    //-----------------------------------------------------------------

    // COUNTTO INITIALIZATION

    //-----------------------------------------------------------------
    $('.count-to').each(function() {
        $(this).countTo({
            speed: 5000
        });
    });


    //-----------------------------------------------------------------

    // TABSLET INITIALIZATION

    //-----------------------------------------------------------------
    if ($('.tabs').length) {
        $('.tabs').tabslet();
    }

    //-----------------------------------------------------------------

    // MODAL TRIGGER

    //-----------------------------------------------------------------
    $('.modal-trigger').on('click', function() {
        event.preventDefault();
        setTimeout(function() {
            initialize();
        }, 100);
    });
})();