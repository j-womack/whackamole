"use strict";
var holes = $('.hole')
var selectedHole = holes[4];
var previousHole;
var score = 0;
var speed = 1000 - (score / 2)

$('.start').click(function(){
    console.log(speed);
    selectRandom();
    $(this).html('');
    $(this).removeClass('start active');
    
    $(selectedHole).addClass('active');
    game();
    $(this).off('click');
    $('.hole').on('click', function(){
        if ($(this).hasClass('active')){
            score+=10;
            console.log(score);
            $('.yourScore').html('Score: ' + score);
        } else {
            score-=5;
            console.log(score);
            $('.yourScore').html('Score: ' + score);
        }
    })
});

function selectRandom() {
    var decision = Math.floor((Math.random() * 9));
    previousHole = selectedHole;
    
    selectedHole = holes[decision];

    // console.log(previousHole);
    // console.log(selectedHole);
};

function game() {

        // console.log(selectedHole);
    setInterval(function() {
        
        selectRandom();
        console.log(1000 - score);
        $(previousHole).removeClass('active');
        $(selectedHole).addClass('active')

    }, speed);

};


