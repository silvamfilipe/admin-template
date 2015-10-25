/**
 * Main application services
 */
materialAdmin

    // =========================================================================
    // Nice Scroll - Custom Scroll bars
    // =========================================================================
    .service('nicescrollService', function() {
        var ns = {};
        ns.niceScroll = function(selector, color, cursorWidth) {
            
            $(selector).niceScroll({
                cursorcolor: color,
                cursorborder: 0,
                cursorborderradius: 0,
                cursorwidth: cursorWidth,
                bouncescroll: true,
                mousescrollstep: 100,
                autohidemode: false
            });
        }
        
        return ns;
    })

;