$(document).ready(function () {
    $('#mainpage').on("swiperight", function() {
        var target = $("#Plans");
        $.mobile.pageContainer.pagecontainer("change", target, {transition: "slide",
                                        reverse: true});
    });
    
    $('#mainpage').on("swipeleft", function() {
        var target = $("#Cities");
        $.mobile.pageContainer.pagecontainer("change", target, {transition: "slide",
                                        reverse: true});
    });
    
    $('#Plans').on("swiperight", function() {
        var target = $("#mainpage");
        $.mobile.pageContainer.pagecontainer("change", target, {transition: "slide",
                                        reverse: true});
    });
    
    $('#Cities').on("swipeleft", function() {
        var target = $("#mainpage");
        $.mobile.pageContainer.pagecontainer("change", target, {transition: "slide",
                                        reverse: true});
    });
});