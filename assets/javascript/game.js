$(document).ready(function () {

    var toggle = true;
    var ruby, redDiamond, diamond, tearDrop, randGenerator;
    var total = 0;
    var checkOn = false;

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

            checkOn = true;
        } else {
            startButton.text("Click to Start");
            toggle = true;
        }

        if (toggle) {
            checkOn = true;
            randNum.text("0");
            total = 0;
            chosenText.text("Your number: ");
            endGame.empty();
        }
    });

    r.on('click', function () {
        r.disable = checkOn;
        if (checkOn) {
            total += ruby;
            chosenText.text("Your number: " + total);
            check();
        }
        console.log(ruby);
    });

    rD.on('click', function () {
        rD.disable = checkOn;
        if (checkOn) {
            total += redDiamond;
            chosenText.text("Your number " + total);
            check();
        }
        console.log(redDiamond);
    });

    d.on('click', function () {
        d.disable = checkOn;
        if (checkOn) {
            d.disable = checkOn;
            total += diamond;
            chosenText.text("Your number " + total);
            check();
        }
        console.log(diamond);
    });

    tD.on('click', function () {
        tD.disable = checkOn;
        if (checkOn) {
            total += tearDrop;
            chosenText.text("Your number " + total);
            check();
        }
        console.log(tearDrop);
    });

    function check() {
        if (total > randGenerator && !toggle) {
            endGame.text("Sorry!! you lost >< Try again!!");
            checkOn = false;
        } else if (total === randGenerator && !toggle) {
            endGame.text("Congrats!! you win!! Click restart to restart the Game.");
            checkOn = false;
        } else {
            checkOn = true;
        }
    }
});