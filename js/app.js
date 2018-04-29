var app = {
    page_number: 0,
    selected_pilot: 0
}


$(document).ready(function() {
    $('#blueorigin-button').click(zoom_glen);
    $('#spacex-button').click(zoom_falcon);
    $('#countdown-button').click(countdown);
    $('#continue-button').click(display_spaceshipQuiz);
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
    $('#logo-page').velocity({transform: "translateY(2000px)"}, {duration: 8000, delay: 12000});
    $('#countdown-button').css('display', 'none');
    $('#factbook1').css('display', 'block');
    if (app.selected_pilot == 2) {
        setTimeout(function(){
            $('#falcon-heavy-logo-page').attr('src', 'img/falcon-heavy-fire.png');
        }, 9000);
        $('#falcon-heavy-logo-page').velocity({bottom: "4000px"}, {duration: 8000, delay: 12000, complete: display_page_2});
    } else {
        setTimeout(function(){
            $('#new-shepard-logo-page').attr('src', 'img/new-glenn-fire.png');
        }, 9000);
        $('#new-shepard-logo-page').velocity({bottom: "4000px"}, {duration: 8000, delay: 12000, complete: display_page_2})
    }
}

var display_page_2 = function() {
    $('#logo-page').css('display', 'none');
    $('#exposition-page').velocity({'opacity': 0}, { duration: 0 })
    .velocity({'opacity': 1}, { duration: 1000 });
    $('#exposition-page').css('display', 'block');
    $('#earth-image').velocity({transform: "translateY(50vh)"}, {duration: 0})
    .velocity({transform: "translateY(0)"}, {duration: 3000, complete: animate_tesla})
}

var animate_tesla = function() {
    $('#elon-tesla').css('display', 'block');
    $('#elon-tesla')
    .velocity({transform: "translateY(40vh) translateX(-10)"}, {duration: 0})
    .velocity({transform: 'translateY(20vh) translateX(50vw)'}, {duration: 4000, delay: 600})
    .velocity({transform: 'translateY(40vh) translateX(110vw)'}, {duration: 4000, complete: show_continue_button})
}

var show_continue_button = function() {
    $('#continue-button').css('display', 'block');
}

var  display_spaceshipQuiz = function() {
    $('#exposition-page').css('display', 'none');
    $('#ship-quiz-page').css('display', 'block');

}
