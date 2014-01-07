$('#mainpage').live("swiperight", function() {
    var target = $("#Plans");
    $.mobile.pageContainer.pagecontainer("change", target, {transition: "slide",
                                    reverse: true});
});

$('#mainpage').live("swipeleft", function() {
    var target = $("#Cities");
    $.mobile.pageContainer.pagecontainer("change", target, {transition: "slide",
                                    reverse: true});
});

$('#Plans').live("swiperight", function() {
    var target = $("#mainpage");
    $.mobile.pageContainer.pagecontainer("change", target, {transition: "slide",
                                    reverse: true});
});

$('#Cities').live("swipeleft", function() {
    var target = $("#mainpage");
    $.mobile.pageContainer.pagecontainer("change", target, {transition: "slide",
                                    reverse: true});
});