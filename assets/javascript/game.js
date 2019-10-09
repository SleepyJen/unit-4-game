$(document).ready(function () {

    var toggle = true;
    var ruby, redDiamond, diamond, tearDrop, randGenerator;
    var total = 0;

    var startButton = $('.btn');
    var randNum = $('#number-chosen');
    var r = $('#ruby');
    var rD = $('#redDiamond');
    var d = $('#diamond');
    var tD = $('#tearDrop');
    var endGame = $('.endGame');
    var chosenText = $('#chosen');

    startButton.on('click', function () {
        if (toggle) {
            randGenerator = Math.floor(Math.random() * 100 + 1);
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
            endGame.empty();
        }
    });

    r.on('click', function () {
        total += ruby;
        chosenText.text("Your number: " + total);
        check();
    });

    rD.on('click', function () {
        total += redDiamond;
        chosenText.text("Your number " + total);
        check();
    });

    d.on('click', function () {
        total += diamond;
        chosenText.text("Your number " + total);
        check();
    });

    tD.on('click', function () {
        total += tearDrop;
        chosenText.text("Your number " + total);
        check();
    });

    function check() {
        if (total > randGenerator) {
            endGame.text("Sorry!! you lost >< Try again!!");
            while (!toggle) {
                r.off('click');
            }
        } else if (total === randGenerator) {
            endGame.text("Congrats!! you win!! Click restart to restart the Game.");
        }
    }
});