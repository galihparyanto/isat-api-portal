jQuery(document).on('click', '.mega-dropdown', function(e) {
    e.stopPropagation()
});

// Dropdown Menu Fade
jQuery(document).ready(function(){
    $('.dropdown').hover(
        function() { $('.dropdown-menu', this).fadeIn("fast");
        },
        function() { $('.dropdown-menu', this).fadeOut("fast");
        }
    );
});

$('#productCarousel').on('slide.bs.carousel', function (e) {

    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 3;
    var totalItems = $('.product .carousel-item').length;

    // alert(idx);
    // alert(totalItems);
    if (idx >= totalItems-(itemsPerSlide-1)) {
        // alert('test');
        var it = itemsPerSlide - (totalItems - idx);
        for (var i=0; i<it; i++) {
            // append slides to end
            if (e.direction==="left") {
                $('.product .carousel-item').eq(i).appendTo('.product .carousel-inner');
                // $('.product .carousel-item').eq(0).appendTo('.product .carousel-inner');
                console.log(e);
            }
            else if(e.direction==="right") {
                // $('.product .carousel-item').eq(i).appendTo('.product .carousel-inner');
                $('.product .carousel-item').eq(0).appendTo('.product .carousel-inner');
                console.log(e);
            }
        }
    }
});

// for every slide in carousel, copy the next slide's item in the slide.
// Do the same for the next, next item.
// $('.product .carousel-item').each(function(){
//     var next = $(this).next();
//     if (!next.length) {
//         next = $(this).siblings(':first');
//     }
//     next.children(':first-child').clone().appendTo($(this));
//
//     if (next.next().length>0) {
//         next.next().children(':first-child').clone().appendTo($(this));
//     } else {
//         $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
//     }
// });

$('#productCarousel').carousel({
    interval: false
});