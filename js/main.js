// zombie golf main
// v0.01
// sam thompson

var main = {
    onload : function() {
        if (state.visited === false) {
            out.say(strings.welcome, 1, function(){$('.start').show()});
            state.visited = true;
        }
    }
}

window.onload = main.onload.bind(main);