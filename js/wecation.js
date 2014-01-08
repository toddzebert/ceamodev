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

function AddActivity() {
    newActivity = {};
    $('input', '#mainpage').each(function (indexInArray, valueOfElement) {
        newActivity[valueOfElement.name] = valueOfElement.value;
    });

    client.getTable("activity").insert(newActivity);
}

$('#status-submit').click(AddActivity);

$(function () {
    client.getTable("activity").each(function (key, newvalue) {
        $('#mainpage').find('[data-template-tag=' + key + ']').Html(newvalue);
    });
});

function AddPerson() {
    newPerson = {}
    $('input', '#People').each(function (indexInArray, valueOfElement) {
        newPerson[valueOfElement.name] = valueOfElement.value;
    });

    client.getTable("people").insert(newPerson);
}

function AddGroup() {
    newGroup = {}
    $('input', '#Group').each(function (indexInArray, valueOfElement) {
        newGroup[valueOfElement.name] = valueOfElement.value;
    });

    client.getTable("group").insert(newGroup);
}

function AddEvent() {
    newEvent = {}
    $('input', '#Event').each(function (indexInArray, valueOfElement) {
        newEvent[valueOfElement.name] = valueOfElement.value;
    });

    client.getTable("event").insert(newEvent);
}


function PopoulateTemplate(dom, values) {
    $.each(values, function (key, newValue) {
        $(key, dom).value(newValue);
    })

}


$(function () {

});