$(document).ready(function () {
    $('#mainpage').on("swiperight", function() {
        var target = $("#Plans");
        $.mobile.pageContainer.pagecontainer("change", target, {transition: "slide", reverse: true});
    });
    
    $('#mainpage').on("swipeleft", function() {
        var target = $("#Cities");
        $.mobile.pageContainer.pagecontainer("change", target, {transition: "slide"});
    });
    
    $('#Plans').on("swipeleft", function() {
        var target = $("#mainpage");
        $.mobile.pageContainer.pagecontainer("change", target, {transition: "slide"});
    });
    
    $('#Cities').on("swiperight", function() {
        var target = $("#mainpage");
        $.mobile.pageContainer.pagecontainer("change", target, {transition: "slide", reverse: true});
    });
    
    $( 'input[type=range]' ).on( "change", function(event, ui) {
        event.stopImmediatePropagation();
    });
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