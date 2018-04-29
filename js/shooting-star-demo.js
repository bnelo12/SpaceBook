(function () {
    var canvas = document.getElementById('shooting-star-demo');
    canvas.width = $(canvas).width();
    canvas.height = $(canvas).height();
    var ctx = canvas.getContext('2d');
    console.log(document.width);

    var draw_star = (star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, 2,0,2*Math.PI);
        ctx.fillStyle='#fff';
        ctx.fill();
    }

    var update_star = (star) => {
        star.x += star.x_speed; star.y += star.y_speed;
        star.x_speed += .05;
        star.y_speed += .03;
        if (star.y > canvas.height) {
            star.y = -canvas.height*Math.random();
            star.x = Math.random()*-400;
            star.x_speed= 1;
            star.y_speed= 1;
        }
    } 

    var star1 = {x: Math.random()*-400, y: -canvas.height*Math.random(), x_speed: 5, y_speed: 5};
    var star2 = {x: Math.random()*-400, y: -canvas.height*Math.random(), x_speed: 5, y_speed: 5};
    var star3 = {x: Math.random()*-400, y: -canvas.height*Math.random(), x_speed: 5, y_speed: 5};
    var star4 = {x: Math.random()*-400, y: -canvas.height*Math.random(), x_speed: 5, y_speed: 5};
    var star5 = {x: Math.random()*-400, y: -canvas.height*Math.random(), x_speed: 5, y_speed: 5};
    var star6 = {x: Math.random()*-400, y: -canvas.height*Math.random(), x_speed: 5, y_speed: 5};

    var loop = function() {
        ctx.globalAlpha=0.35;
        ctx.fillStyle='#4a65a0';
        ctx.fillRect(0,0,1920, 1080);
        ctx.globalAlpha=1;
        draw_star(star1);
        update_star(star1);
        draw_star(star2);
        update_star(star2);
        draw_star(star3);
        update_star(star3);
        draw_star(star4);
        update_star(star4);
        draw_star(star5);
        update_star(star5);
        draw_star(star6);
        update_star(star6);
    }

    setInterval(loop, 1000/60);

} ())

