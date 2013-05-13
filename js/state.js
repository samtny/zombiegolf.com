// zombie golf game state
// v0.01
// sam thompson

;(function($){
    
    $.state = function(options) {
        
        var defaults = {
            visited:    false
        }
        
        var state = this;
        
        state.settings = {};
        state.visited = false;
        
        var init = function() {
            state.settings = $.extend({}, defaults, options);
        }
        
        init();
        
    }
    
}(jQuery));


