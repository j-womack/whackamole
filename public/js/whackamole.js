"use strict";
var holes = $('.hole')
var selectedHole = holes[4];
var previousHole;
var score = 0;
var speed = 1000;
var seconds = 0
$('.start').click(function(){
    selectRandom();
    $(this).html('');
    $(this).removeClass('start active');
    $(selectedHole).addClass('active');
    var interval = setInterval(game, speed);
    $(this).off('click');
    $('.hole').on('click', function(){
        if ($(this).hasClass('active')){
            score+=10;
            speed = 1000 - score / 2;
            // console.log(score);
            $('.yourScore').html('Score: ' + score);
            // $(this).hide("puff", 100);
        } else {
            score-=5;
            speed = 1000 - score / 2;
            // console.log(score);
            $('.yourScore').html('Score: ' + score);
        }
            // setTimeout(function(){
            // $(this).show("fold", 50));
            // }, 100)
        return speed;
    })
});

function selectRandom() {
    var decision = Math.floor((Math.random() * 9));
    previousHole = selectedHole;
    selectedHole = holes[decision];
};

function game(interval) {    
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
        gameOver(interval);
    }
};

function gameOver(interval) {
    console.log(interval);
    clearInterval(interval);
    seconds = 0;
    score = 0;
    $('.highScore').html('High Score: ' + score);

}
    

