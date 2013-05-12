// zombie golf run loop
// v0.01
// sam thompson

;jQuery(document).ready(function($){
    
    var state = new $.state();
    var strings = new $.strings();
    
    var say = function(output, speed) {
        if (Array.isArray(output)) {
            $('.out').append(output[0]);
            var t = 1000 * output.length;
            var next = 1;
            doTimer(t, speed, function(){
                    $('.out').append(output[next]);
                    next++;
                }
            );
        } else {
            $('.out').append(output);
        }
    };
    
    if (state.started === false) {
        state.started = true;
        say(strings.welcome, 1);
    }
    
});