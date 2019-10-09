$(document).ready(function () {

    var toggle = true;
    var ruby, redDiamond, diamond, tearDrop;
    var total = 0;

    var startButton = $('.btn');
    var randNum = $('#number-chosen');
    var r = $('#ruby');
    var chosenText = $('#chosen');

    startButton.on('click', function () {
        if (toggle) {
            var randGenerator = Math.floor(Math.random() * 100 + 1);
            ruby = Math.floor(Math.random() * 10 + 1);
            redDiamond = Math.floor(Math.random() * 10 + 1);
            diamond = Math.floor(Math.random() * 10 + 1);
            tearDrop = Math.floor(Math.random() * 10 + 1);
            randNum.text(randGenerator);

            startButton.text("Click to Reset");
            toggle = false;
        } else {
            startButton.text("Click to Start");
            toggle = true;
        }

        if (toggle) {
            randNum.text("0");
            total = 0;
            chosenText.text("Your number: ");
        }
    });

    r.on('click', function () {
        total += ruby
        chosenText.text("Your number: " + total);
    });


});