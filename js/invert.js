var toggleInvert = function(i) {
    if(i == 0) {
        $("body").css("background","black");
        $("#main").addClass("inverted");
        return;
    }
    
    $("body").css("background","white");
    $("#main").removeClass("inverted");
    return;
}
