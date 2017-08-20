//Invert color scheme function
var toggleInvert = function(i) {
    if(i == 0) {
        $("body").css("background","#090809");
        $("#main").addClass("inverted");
        return;
    }

    $("body").css("background","#F6F7F6");
    $("#main").removeClass("inverted");
    return;
}
