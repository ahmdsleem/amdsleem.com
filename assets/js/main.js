/*  
    amdsleem Core System v1.0  
    Technical Architecture by Ahmad Sleem  
    Optimized for stability, maintainability, and controlled transitions  
*/

(function($) {

    var $window = $(window),
        $body = $('body');

    // Breakpoints.
    breakpoints({
        wide:      [ '961px',  '1880px' ],
        normal:    [ '961px',  '1620px' ],
        narrow:    [ '961px',  '1320px' ],
        narrower:  [ '737px',  '960px'  ],
        mobile:    [ null,     '736px'  ]
    });

    // Play initial animations on page load.
    $window.on('load', function() {
        window.setTimeout(function() {
            $body.removeClass('is-preload');
        }, 100);
    });

    // Header (narrower + mobile).
    // Toggle button for mobile sidebar
    $('<div id="headerToggle">' +
        '<a href="#header" class="toggle"></a>' +
      '</div>')
        .appendTo($body);

    // Sidebar panel behavior
    $('#header')
        .panel({
            delay: 500,
            hideOnClick: true,
            hideOnSwipe: true,
            resetScroll: true,
            resetForms: true,
            side: 'left',
            target: $body,
            visibleClass: 'header-visible'
        });

})(jQuery);