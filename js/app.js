var app = {
    page_number: 0,
    selected_pilot: 0
}

$(document).ready(function() {
    $('#blueorigin-button').click(zoom_glen);
    $('#spacex-button').click(zoom_falcon);
    $('#countdown-button').click(countdown);
});

var zoom_falcon = function() {
    app.selected_pilot = 2;
    $('#new-shepard-logo-page').velocity({ opacity: 0 }, { display: "none" });
    $('#falcon-heavy-logo-page').velocity({transform: "translateX(-100px)", duration: 500});
    $('#select-ceo-buttons').velocity({ opacity: 0 }, { display: "none" }, function() {});
    $('#countdown-button').velocity({ opacity: 1 }, {delay: '500', duration: 500});
}

var zoom_glen = function() {
    app.selected_pilot = 1;
    $('#falcon-heavy-logo-page').velocity({ opacity: 0 }, { display: "none" });
    $('#new-shepard-logo-page').velocity({transform: "translateX(100px)", duration: 500});
    $('#select-ceo-buttons').velocity({ opacity: 0 }, { display: "none" });
    $('#countdown-button').velocity({ opacity: 1 }, {delay: '500', duration: 500});
}

var countdown = function() {
    $('body').append('<audio autoplay="true" src="audio/launch-audio.mp3"></audio>');
    $('#logo-page').velocity({transform: "translateY(1000px)"}, {duration: 5000, delay: 12000});
    if (app.selected_pilot == 2) {
        $('#falcon-heavy-logo-page').velocity({bottom: "2000px"}, {duration: 5000, delay: 12000});
    } else {
        $('#new-shepard-logo-page').velocity({bottom: "2000px"}, {duration: 5000, delay: 12000});
    }
}