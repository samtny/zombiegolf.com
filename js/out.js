// zombie golf output
// v0.01
// sam thompson

var out = {
    say : function(output, speed, done) {
        if (Array.isArray(output)) {
            $('.out').append(output[0]);
            var t = 1000 * output.length;
            var next = 1;
            doTimer(t, speed, 
                function(){
                    $('.out').append(output[next]);
                    next++;
                },
                function(){
                    call(done);
                }
            );
        } else {
            $('.out').append(output);
            call(done);
        }
    },
    update : function () {
        $('.course .title').text(round.course.name);
    }
};