    RP = {
        setup: function() {
            // add invisible 'div' to end of page:
            $('<div id="movieInfo"></div>').
                hide().
                appendTo($('body'));
            $('#movies a').click(RP.getMovieInfo);
        },
        getMovieInfo: function() {
            $.ajax({type: 'GET',
                    url: $(this).attr('href'),
                    timeout: 5000,
                    success: RP.showMovieInfo,
                    error: function() { alert('Error!'); }
                   });
            return(false);
        },
        showMovieInfo: function(data) {
            // center a floater 1/2 as wide and 1/4 as tall as screen
            var oneFourth = Math.ceil($(window).width() / 4);
            $('#movieInfo').
                html(data).
                css({'left': oneFourth,  'width': 2*oneFourth, 'top': 250}).
                show();
            // make the Close link in the hidden element work
            $('#closeLink').click(RP.hideMovieInfo);
            return(false);  // prevent default link action
        },
        hideMovieInfo: function() {
            $('#movieInfo').hide();
            return(false);
        },
    }
    $(RP.setup);
    
