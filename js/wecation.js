$('#mainpage').live("swiperight", function() {
    var target = $("#Plans");
    $.mobile.changePage(target, {transition: "slide",
                                    reverse: true}, true, true);
});

$('#mainpage').live("swipeleft", function() {
    var target = $("#Cities");
    $.mobile.changePage(target, {transition: "slide",
                                    reverse: true}, true, true);
});

$('#Plans').live("swiperight", function() {
    var target = $("#mainpage");
    $.mobile.changePage(target, {transition: "slide",
                                    reverse: true}, true, true);
});

$('#Cities').live("swipeleft", function() {
    var target = $("#mainpage");
    $.mobile.changePage(target, {transition: "slide",
                                    reverse: true}, true, true);
});