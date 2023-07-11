var dateToday = dayjs().format('dddd, MMMM D YYYY');
var currentHour =dayjs().format('HH');
var numCurrentHour = Number(currentHour);


var hour09event = $(body).children().eq(1).children().eq(0).children().eq(1);
var hour09button = $(body).children().eq(1).children().eq(0).children().eq(2);

var hour09 = $('#hour-09');
var hour10 = $('#hour-10');
var hour11 = $('#hour-11');
var hour12 = $('#hour-12');
var hour13 = $('#hour-13');
var hour14 = $('#hour-14');
var hour15 = $('#hour-15');
var hour16 = $('#hour-16');
var hour17 = $('#hour-17');

pastPresFut_hour09();
pastPresFut_hour10();
pastPresFut_hour11();
pastPresFut_hour12();
pastPresFut_hour13();
pastPresFut_hour14();
pastPresFut_hour15();
pastPresFut_hour16();
pastPresFut_hour17();


function pastPresFut_hour09() {
    if (numCurrentHour < 9) {
        hour09.addClass('future');
    } else if (numCurrentHour === 9) {
        hour09.addClass('present');
    } else {
        hour09.addClass('past'); 
    }
}

function pastPresFut_hour10() {
        if (numCurrentHour < 10) {
            hour10.addClass('future');
        } else if (numCurrentHour === 10) {
            hour10.addClass('present');
        } else {
            hour10.addClass('past'); 
        }
}
function pastPresFut_hour11() {
        if (numCurrentHour < 11) {
            hour11.addClass('future');
        } else if (numCurrentHour === 11) {
            hour11.addClass('present');
        } else {
            hour11.addClass('past'); 
        }
}
function pastPresFut_hour12() {
    if (numCurrentHour < 12) {
        hour12.addClass('future');
    } else if (numCurrentHour === 12) {
        hour12.addClass('present');
    } else {
        hour12.addClass('past'); 
    }
}
function pastPresFut_hour13() {
    if (numCurrentHour < 13) {
        hour13.addClass('future');
    } else if (numCurrentHour === 13) {
        hour13.addClass('present');
    } else {
        hour13.addClass('past'); 
    }
}
function pastPresFut_hour14() {
    if (numCurrentHour < 14) {
        hour14.addClass('future');
    } else if (numCurrentHour === 14) {
        hour14.addClass('present');
    } else {
        hour14.addClass('past'); 
    }
}
function pastPresFut_hour15() {
    if (numCurrentHour < 15) {
        hour15.addClass('future');
    } else if (numCurrentHour === 15) {
        hour15.addClass('present');
    } else {
        hour15.addClass('past'); 
    }
}
function pastPresFut_hour16() {
    if (numCurrentHour < 16) {
        hour16.addClass('future');
    } else if (numCurrentHour === 16) {
        hour16.addClass('present');
    } else {
        hour16.addClass('past'); 
    }
}
function pastPresFut_hour17() {
    if (numCurrentHour < 17) {
        hour17.addClass('future');
    } else if (numCurrentHour === 17) {
        hour17.addClass('present');
    } else {
        hour17.addClass('past'); 
    }
}



// 

// pass all jquery arguments here so that the dom loads first
$(document).ready(function(){
    // puts today's date at the top of the screen using day.js
    $('#dateToday').text(dateToday);

    // saves entered info in local storage when save button clicked
    $(hour09button).on("click", function() {
        localStorage.setItem("event09", JSON.stringify(hour09event.val()));        
    });

    var savedEvent = JSON.parse(localStorage.getItem("event09"));
    $(hour09event).text(savedEvent);  
})

var timeInterval = setInterval(function (){
    // check the time every minute to see which hour we're in
}, 60000)


// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?  