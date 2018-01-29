// window.shuff = function() {
//     var Shuffle = window.Shuffle,
//         shuffleInstance = [], //Define shuffleInstance Array
//         filtering = '',
//         eachGrid = '',
//         sorting = '',
//         allGrid = document.querySelectorAll('.grid'); //Select all grids

//     for (var i = 0; i < allGrid.length; i++) {
//         eachGrid = allGrid[i]; //Select each grid
//         callShuffle(eachGrid); //Passing each grid to Shuffle init
//     }

//     function callShuffle(value) {
//         imagesLoaded(value, function () {
//             var speed = '';

//             if (value.getAttribute('data-animation')) //Check for animation
//                 speed = 100;
//             else
//                 speed = 450;

//             // Shuffle Initialization
//             shuffleInstance.push(new Shuffle(value, { //Shuffle instance
//                 itemSelector: '.shuf-item',
//                 sizer: value.querySelector('.sizer'),
//                 speed: speed,
//                 useTransforms: false,
//                 columnThreshold: 0.1,
//             }));

//             filtering = function (group, grid) {
//                 for (var i = 0; i < shuffleInstance.length; i++) {
//                     var instance = shuffleInstance[i];
//                     var instanceGrid = instance.element.className;
//                     if (grid === instanceGrid) {
//                         shuffleInstance[i].filter(group); //Filtering
//                     }
//                 }
//             };

//             function sortByDate(element) {
//               return parseInt(element.getAttribute('data-created'),10);
//             }

//             function sortByAlpha(element) {
//               return element.getAttribute('data-sort-alpha').toLowerCase();
//             }

//             sorting = function (sortGroup, grid) {
//                 for (var i = 0; i < shuffleInstance.length; i++) {
//                     var instance = shuffleInstance[i];
//                     var instanceGrid = instance.element.className;
//                     if (grid === instanceGrid) {

//                         var value = sortGroup;
//                         var options;
//                         if (value === 'sort-order') {
//                           options = {
//                             reverse: true,
//                             by: sortByDate,
//                             randomize: false,
//                           };
//                         } else if (value === 'sort-alpha') {
//                           options = {
//                             by: sortByAlpha,
//                           };
//                         } else {
//                           options = {};
//                         }

//                         shuffleInstance[i].sort(options);

//                     }
//                 }
//             };
//         });
//     }

//     function filter() {
//         var filterElement = [].slice.call(document.getElementsByClassName("filter")); //All filter items array
//         filterElement.forEach(function (filterItem) {
//             filterItem.addEventListener("click", function () { //Click listener
//                 var isActive = filterItem.classList.contains('active'); //Active item check
//                 var btnGroup = filterItem.getAttribute('data-group'); //Find clicked filter item data group
//                 var filterGrid = filterItem.closest('.grid-container-wrap').getElementsByClassName("grid"),
//                     filterGridName = filterGrid[0].className; //Find clicked filter item grid
//                 if (!isActive) //If clicked item is not active
//                 {
//                     var children = filterItem.parentNode.children;
//                     for (var i = children.length - 1; i >= 0; i--) {
//                         children[i].classList.remove('active'); //Remove active class
//                     }
//                     filterItem.classList.add('active'); //Add active class to clicked item
//                     filtering(btnGroup, filterGridName);
//                 }
//             });
//         });
//     }
//     filter();

//     function sort() {
//         var sortElement = [].slice.call(document.getElementsByClassName("sort")); //All sort items array
//         sortElement.forEach(function (sortItem) {
//             sortItem.addEventListener("click", function () { //Click listener

//                 var isActive = sortItem.classList.contains('active'); //Active item check
//                 var btnSortGroup = sortItem.getAttribute('data-sort-group'); //Find clicked filter item data group
//                 var sortGrid = sortItem.closest('.grid-container-wrap').getElementsByClassName("grid"),
//                     sortGridName = sortGrid[0].className; //Find clicked filter item grid
//                 if (!isActive) //If clicked item is not active
//                 {
//                     var children = sortItem.parentNode.children;
//                     for (var i = children.length - 1; i >= 0; i--) {
//                         children[i].classList.remove('active'); //Remove active class
//                     }
//                     sortItem.classList.add('active'); //Add active class to clicked item
//                     sorting(btnSortGroup, sortGridName);
//                 }
//             });
//         });
//     }
//     sort();
// };

// var sortArray = [];

// $('.grid-container-wrap').each(function() {
//   if ($(this).find('.sort-options').length) {
//     var _this = $(this);

//     _this.find('.shuf-item').each(function() {
//       var sortCreatedValue = $(this).data('sort-order');
//       sortArray.push(parseInt(sortCreatedValue));
//     });
//     sortArray.sort(function(a, b){return a-b;});
//     var sortArrayLen = sortArray.length;
//     var alphabetArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
//     var alphaIndex = -1;

//       for (var i=0; i < sortArrayLen; i++) {
//         alphaIndex++;
//         if(alphaIndex > 25)
//           alphaIndex = 0;

//           var alphaPrefix = '';
//           var modValue = parseInt(i/26,0);
//           for (var j=0; j<modValue; j++) {
//             alphaPrefix += 'z';
//           }

//         _this.find('.shuf-item[data-sort-order="'+sortArray[i]+'"]').attr('data-sort-alpha',alphaPrefix + alphabetArray[alphaIndex]);
//         }

//     }

// });

// // Shuffle Grid Setting
// var gridWidth,
//     setFlag = 0;

// window.gridSetting = function () {
//     $('.grid').each(function () {
//         var $grid = $(this),
//             width = '',
//             colNo = $(this).data('col-no'),
//             gutter = $(this).data('gutter'),
//             gutterPixel = '',
//             gutter_pixel = '';

//         //If gutter value is not defined
//         if (gutter === undefined) {}
//         // If gutter Value in Pixel
//         else if (gutter.indexOf('%') === -1) {
//             gutterPixel = parseFloat(gutter, 10);
//             width = (100 / colNo) + 0.04;
//             $grid.find('.shuf-item').each(function () {
//                 $(this).css({
//                     'margin-top': gutterPixel,
//                     'padding-left': gutterPixel / 2 + 'px',
//                     'padding-right': gutterPixel / 2 + 'px'
//                 });
//             });
//             $grid.css('margin-top', -gutterPixel);

//             // Grid width calculation for desktops
//             if (!device.tablet() && !device.mobile()) {
//                 if (setFlag === 0) {
//                     gridWidth = $grid.parent('.grid-container').innerWidth();
//                     $grid.width(gridWidth + gutterPixel);
//                     $grid.parent('.grid-container').css({
//                         'margin-left': -gutterPixel / 2
//                     });
//                     setFlag = 1;
//                 } else {
//                     $grid.parent('.grid-container').css({
//                         'margin-left': 0
//                     });
//                     gridWidth = $grid.parent('.grid-container').innerWidth();
//                     $grid.width(gridWidth + gutterPixel);
//                     $grid.parent('.grid-container').css({
//                         'margin-left': -gutterPixel / 2
//                     });
//                 }
//             // Grid width calculation for mobiles and tablets
//             } else {
//                 gridWidth = $grid.parent('.grid-container').innerWidth();
//                 $grid.width(gridWidth);
//             }
//         }

//         //Add sizer width
//         $grid.find('.sizer').each(function () {
//             //console.log("sizer running");
//             $(this).css({
//                 'width': width + '%',
//             });
//         });
//     });
// };

// if ($('.grid').length) {
//     shuff();
//     gridSetting();
// }


