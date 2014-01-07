$('#mainpage').live("swiperight", function() {
    $.mobile.changePage("#Plans", {transition: "slide",
                                    reverse: true}, true, true);
});

$('#mainpage').live("swipeleft", function() {
    $.mobile.changePage("#Cities", {transition: "slide",
                                    reverse: true}, true, true);
});

$('#Plans').live("swiperight", function() {
    $.mobile.changePage("#mainpage", {transition: "slide",
                                    reverse: true}, true, true);
});

$('#Cities').live("swipeleft", function() {
    $.mobile.changePage("#mainpage", {transition: "slide",
                                    reverse: true}, true, true);
});