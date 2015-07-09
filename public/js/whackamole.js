"use strict";
var holes = $('.hole')
var selectedHole = holes[4];
var previousHole;
var score = 0;
var speed = 1000;
var seconds = 0
var highScore = 0;

$('.start').click(function(){
    selectRandom();
    $(this).html('');
    $(this).removeClass('start active');
    $(selectedHole).addClass('active');

    setInterval(game, speed);

    $(this).off('click');

    $('.hole').on('click', function(){
        if ($(this).hasClass('active')){
            score+=10;
            // speed = 1000 - score / 2;
            $('.yourScore').html('Score: ' + score);
            // $('#click').play();
        } else {
            score-=5;
            // speed = 1000 - score / 2;
            $('.yourScore').html('Score: ' + score);
        }
    });
});

function selectRandom() {
    var decision = Math.floor((Math.random() * 9));
    previousHole = selectedHole;
    selectedHole = holes[decision];
};

function game() {    
    selectRandom();
    seconds++;
    $(previousHole).removeClass('active');
    $(selectedHole).addClass('active');

    if ((30 - seconds) >= 10) {
        $('.countdown').html('Time Remaining: 0:' + (30 - seconds));
    }
    if ((30 - seconds) < 10) {
        $('.countdown').html('Time Remaining: 0:0' + (30 - seconds));
    }
    if ((30 - seconds) <= 0){
        gameOver();
    }
};

function gameOver() {
    seconds = 0;
    if (score > highScore) {
        highScore = score;
        $('.highScore').html('High Score: ' + highScore);
    }
    score = 0;
    $('.yourScore').html('Score: ' + score);

}
    

