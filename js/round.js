// zombie golf round
// v0.01
// sam thompson

var round = {
    course : {},
    start : function(course) {
        this.course = course;
        out.update();
        $('.course').show();
        $('.nocourse').hide();
    }
};