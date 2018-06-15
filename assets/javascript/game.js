$(document).ready(function () {

    function add(a, b) {
        return a + b;
    }



    var wins = 0;
    var lost = 0;
    var startRange = 1;
    var endRange = 100;
    var tally = 0;
    var Gameover = false;
    var generateRandomNumber = function (startRange, endRange) {
        return Math.floor(Math.random() * ((endRange - startRange) + 1) + startRange);
    }
    var RandomNumber = generateRandomNumber(1, 100);
    console.log('RandomNumber', RandomNumber);
    $("#button-1").attr("data-value", generateRandomNumber(1, 5));
    $("#button-2").attr("data-value", generateRandomNumber(1, 5));
    $("#button-3").attr("data-value", generateRandomNumber(1, 5));
    $("#button-4").attr("data-value", generateRandomNumber(1, 5));

    $('#first-Number').text(RandomNumber);
    $('.btn').on('click', function () {
        if (Gameover === true) {
            $('#gameResult').text("");
            Gameover = false;
        }
    })

    $('#button-1').on('click', function () {
        var CrystalNumber = $(this).data('value');
        console.log('crystalNumber', CrystalNumber);
        tally += CrystalNumber;

        $('#TotalNumber').text(tally)
        if (tally === RandomNumber) {
            wins = wins + 1;
            $('#gameResult').text("YOU WON!");
            gameEnd();
        }
        if (tally > RandomNumber) {
            lost = lost + 1;
            $('#gameResult').text("YOU LOST!");
            gameEnd();
        }
        updateScores();
    })

    $('#button-2').on('click', function () {

        var CrystalNumber = $(this).data('value');
        console.log('crystalNumber', CrystalNumber);
        tally += CrystalNumber;

        $('#TotalNumber').text(tally)
        if (tally === RandomNumber) {
            wins = wins + 1;
            $('#gameResult').text("YOU WON!");
            gameEnd();
        }
        if (tally > RandomNumber) {
            lost = lost + 1;
            $('#gameResult').text("YOU LOST!");
            gameEnd();
        }
        updateScores();
    })

    $('#button-3').on('click', function () {
        console.log($(this));
        CrystalNumber = $(this).data('value');
        console.log('crystalNumber', CrystalNumber);
        tally += CrystalNumber;

        $('#TotalNumber').text(tally)
        if (tally === RandomNumber) {
            wins = wins + 1;
            $('#gameResult').text("YOU WON!");
            gameEnd();
        }
        if (tally > RandomNumber) {
            lost = lost + 1;
            $('#gameResult').text("YOU LOST!");
            gameEnd();

        }
        updateScores();
    })

    $('#button-4').on('click', function () {

        console.log($(this));
        CrystalNumber = $(this).data('value');
        console.log('crystalNumber', CrystalNumber);
        tally += CrystalNumber;


        $('#TotalNumber').text(tally)
        if (tally === RandomNumber) {
            wins = wins + 1;
            $('#gameResult').text("YOU WON!");
            gameEnd();
        }
        if (tally > RandomNumber) {
            lost = lost + 1;
            $('#gameResult').text("YOU LOST!");
            gameEnd();
        }
        updateScores();
    })

    function updateScores() {
        $("#win-count").text(wins);
        $("#loss-count").text(lost);
    }

    function gameEnd() {
        tally = 0;
        Gameover = true;
        RandomNumber = generateRandomNumber(1, 100);

        $('#first-Number').text(RandomNumber);

        $('#TotalNumber').text(tally)
    }

});