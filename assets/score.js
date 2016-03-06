$(function () {

  var scoreFormater = function (score) {
    if (score < 0) {
      score = 999;
    } else if (score < 10) {
      score = '0' + score;
    } else if (score > 999) {
      score = '00';
    }

    return score;
  };

  var updateSaveFile = function () {
    var scoreA = parseInt($('#scoreA').text());
    var scoreB = parseInt($('#scoreB').text());

    var obj = {
      scoreA: scoreA,
      scoreB: scoreB,
    };
    localStorage.setItem('save.json', JSON.stringify(obj));
  };

  var scorePercentUpdate = function () {
    var scoreA = parseInt($('#scoreA').text());
    var scoreB = parseInt($('#scoreB').text());
    var total = scoreA + scoreB;
    var percent = Math.round((scoreA * 100) / total);

    if (total == 0) {
      percent = 100;
    }

    $('#percent').html(percent + '%');
  };

  $('#incScoreA').click(function () {
    var scoreA = $('#scoreA').text();
    var score = parseInt(scoreA);

    score = scoreFormater(++score);

    $('#scoreA').html(score);
    scorePercentUpdate();
    updateSaveFile();
  });

  $('#decScoreA').click(function () {
    var scoreA = $('#scoreA').text();
    var score = parseInt(scoreA);

    score = scoreFormater(--score);

    $('#scoreA').html(score);
    scorePercentUpdate();
    updateSaveFile();
  });

  $('#incScoreB').click(function () {
    var scoreA = $('#scoreB').text();
    var score = parseInt(scoreA);

    score = scoreFormater(++score);

    $('#scoreB').html(score);
    scorePercentUpdate();
    updateSaveFile();
  });

  $('#decScoreB').click(function () {
    var scoreA = $('#scoreB').text();
    var score = parseInt(scoreA);

    score = scoreFormater(--score);

    $('#scoreB').html(score);
    scorePercentUpdate();
    updateSaveFile();
  });

  $('#reset').click(function () {

    $('#scoreA').html('00');
    $('#scoreB').html('00');
    $('#percent').html('100%');
    updateSaveFile();
  });

  if (localStorage.getItem('save.json') != null) {
    var obj = JSON.parse(localStorage.getItem('save.json'));
    $('#scoreA').html(scoreFormater(obj.scoreA));
    $('#scoreB').html(scoreFormater(obj.scoreB));
    scorePercentUpdate();

  } else {
    updateSaveFile();
  }
});
