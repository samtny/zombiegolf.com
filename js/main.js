// zombie golf main
// v0.01
// sam thompson

var main = {
    onload : function() {
        if (state.roundsStarted === 0) {
            out.say(strings.welcome, 1, function(){$('.start').show()});
        }
    }
}

window.onload = main.onload.bind(main);