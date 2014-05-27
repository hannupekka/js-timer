// Init Ion.Sound
$.ionSound({
    sounds: ["bell_ring"],
    path: "sounds/",
    multiPlay: false,
    volume: "0.8"
});

// Get time
var time = typeof(purl().param('time')) == 'undefined' ? purl().segment(2) : purl().param('time');

if (typeof(time) != 'undefined') {
    // Format time to "+<val> unit" so that strtotime() understands it
    time = Math.floor(strtotime(time.replace(/^\+?([0-9]*)(min|sec|hour|day)[s]?$/, "+$1 $2")));
    // Current time
    now = Math.floor(new Date().getTime() / 1000);
    // Seconds until target time
    diff = time - now;

    if (diff > 0) {
        diff--;
        // Get message
        var message = typeof(purl().param('message')) == 'undefined' ? purl().segment(3) : purl().param('message');
        if (typeof('message') != 'undefined')
            message = '';

        // Different time format if target is more than day away
        format = diff > 86400 ? 'j\\d H:i:s' : 'H:i:s';

        // Progress bar
        var bar_wrapper = $('.progress');
        var bar = $('.progress-bar');

        /**
         * Updates formatted time every second
         */
        countdown = function() {
            // Get current seconds from DOM
            var current = time_container.attr('data-seconds');
            if (current > 0) {
                current--;
                // Decrease time by 1 second and update page
                time_container.text(gmdate(format, current)).attr('data-seconds', current);

                // Calculate current percent and update progress bar
                var pct = (current / diff) * 100;
                bar.attr('aria-valuenow', current).width(pct + '%');
            } else {
                // Out of time, hide stuff and alert user
                bar_wrapper.hide();
                time_container.hide();
                clearInterval(counter);
                // Play alert sound and show alert
                $.ionSound.play('bell_ring');
                alert(message);
            }
        }

        // Initial time and percentage
        var time_container = $('#time');
        time_container.text(gmdate(format, diff)).attr('data-seconds', diff);
        bar_wrapper.removeClass('hidden');
        bar.attr('aria-valuemax', diff).width('100%');

        // Set message
        $('#message').text(message);

        // Start counter
        var counter = setInterval(function(){
            countdown();
        }, 1000);
    }
}
