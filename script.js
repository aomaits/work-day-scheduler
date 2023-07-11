var dateToday = dayjs().format('dddd, MMMM D YYYY');
var currentHour =dayjs().format('HH');
var numCurrentHour = Number(currentHour);

var hour09event = $(body).children().eq(1).children().eq(0).children().eq(1);
var hour10event = $(body).children().eq(1).children().eq(1).children().eq(1);
var hour11event = $(body).children().eq(1).children().eq(2).children().eq(1);
var hour12event = $(body).children().eq(1).children().eq(3).children().eq(1);
var hour13event = $(body).children().eq(1).children().eq(4).children().eq(1);
var hour14event = $(body).children().eq(1).children().eq(5).children().eq(1);
var hour15event = $(body).children().eq(1).children().eq(6).children().eq(1);
var hour16event = $(body).children().eq(1).children().eq(7).children().eq(1);
var hour17event = $(body).children().eq(1).children().eq(8).children().eq(1);

var hour09button = $(body).children().eq(1).children().eq(0).children().eq(2);
var hour10button = $(body).children().eq(1).children().eq(1).children().eq(2);
var hour11button = $(body).children().eq(1).children().eq(2).children().eq(2);
var hour12button = $(body).children().eq(1).children().eq(3).children().eq(2);
var hour13button = $(body).children().eq(1).children().eq(4).children().eq(2);
var hour14button = $(body).children().eq(1).children().eq(5).children().eq(2);
var hour15button = $(body).children().eq(1).children().eq(6).children().eq(2);
var hour16button = $(body).children().eq(1).children().eq(7).children().eq(2);
var hour17button = $(body).children().eq(1).children().eq(8).children().eq(2);

var hour09 = $('#hour-09');
var hour10 = $('#hour-10');
var hour11 = $('#hour-11');
var hour12 = $('#hour-12');
var hour13 = $('#hour-13');
var hour14 = $('#hour-14');
var hour15 = $('#hour-15');
var hour16 = $('#hour-16');
var hour17 = $('#hour-17');

// pass all jquery arguments here so that the dom loads first
$(document).ready(function(){
    // puts today's date at the top of the screen using day.js
    $('#dateToday').text(dateToday);

    // saves entered info in local storage when save button clicked
    $(hour09button).on("click", function() {
        localStorage.setItem("event09", JSON.stringify(hour09event.val()));        
    });

    $(hour10button).on("click", function() {
        localStorage.setItem("event10", JSON.stringify(hour10event.val()));        
    });

    $(hour11button).on("click", function() {
        localStorage.setItem("event11", JSON.stringify(hour11event.val()));        
    });

    $(hour12button).on("click", function() {
        localStorage.setItem("event12", JSON.stringify(hour12event.val()));        
    });

    $(hour13button).on("click", function() {
        localStorage.setItem("event13", JSON.stringify(hour13event.val()));        
    });

    $(hour14button).on("click", function() {
        localStorage.setItem("event14", JSON.stringify(hour14event.val()));        
    });

    $(hour15button).on("click", function() {
        localStorage.setItem("event15", JSON.stringify(hour15event.val()));        
    });

    $(hour16button).on("click", function() {
        localStorage.setItem("event16", JSON.stringify(hour16event.val()));        
    });

    $(hour17button).on("click", function() {
        localStorage.setItem("event17", JSON.stringify(hour17event.val()));        
    });

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

    var savedEvent09 = JSON.parse(localStorage.getItem("event09"));
    $(hour09event).text(savedEvent09);  

    var savedEvent10 = JSON.parse(localStorage.getItem("event10"));
    $(hour10event).text(savedEvent10);  

    var savedEvent11 = JSON.parse(localStorage.getItem("event11"));
    $(hour11event).text(savedEvent11);  

    var savedEvent12 = JSON.parse(localStorage.getItem("event12"));
    $(hour12event).text(savedEvent12);  

    var savedEvent13 = JSON.parse(localStorage.getItem("event13"));
    $(hour13event).text(savedEvent13);  

    var savedEvent14 = JSON.parse(localStorage.getItem("event14"));
    $(hour14event).text(savedEvent14);  

    var savedEvent15 = JSON.parse(localStorage.getItem("event15"));
    $(hour15event).text(savedEvent15);  

    var savedEvent16 = JSON.parse(localStorage.getItem("event16"));
    $(hour16event).text(savedEvent16);  

    var savedEvent17 = JSON.parse(localStorage.getItem("event17"));
    $(hour17event).text(savedEvent17);  

})

var timeInterval = setInterval(function (){
    // check the time every minute to see which hour we're in
}, 60000)
