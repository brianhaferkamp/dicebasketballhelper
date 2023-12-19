// Check the browser to make sure it supports service workers
// if('serviceWorker' in navigator) {
//   navigator.serviceWorker
//     // Register the path to the service worker file
//     .register('onbase-sw.js')
//     .then(function() { console.log("Service Worker Registered"); });
// }


//----------------------------
// Functions
//----------------------------

// first d6 die
function die1() {
  var dice = {
    sides: 6,
    roll: function () {
      var randomNumber = Math.floor(Math.random() * this.sides) + 1;
      return randomNumber;
    }
  }

  // result roll: determine strike or ball
  die1Result = dice.roll();
  console.log('Die 1 result: ' + die1Result);
}

// second d6 die
function die2() {
  var dice = {
    sides: 6,
    roll: function () {
      var randomNumber = Math.floor(Math.random() * this.sides) + 1;
      return randomNumber;
    }
  }

  // result roll: determine strike or ball
  die2Result = dice.roll();
  console.log('Die 2 result: ' + die2Result);
}

// d10 die
function die3() {
  var dice = {
    sides: 10,
    roll: function () {
      var randomNumber = Math.floor(Math.random() * this.sides) + 1;
      return randomNumber;
    }
  }

  // result roll: determine strike or ball
  die3Result = dice.roll();
  console.log('Die 3 result: ' + die3Result);
}

function showPlay() {
  
  $('.play-grid').hide();
    
  if (playResultRoll == 11) {
    $('.one-one').css({
      'display' : 'grid'
    }).fadeIn();
  } else if (playResultRoll == 12) {
    $('.one-two').css({
      'display' : 'grid'
    }).fadeIn();
  } else if (playResultRoll == 13) {
    $('.one-three').css({
      'display' : 'grid'
    }).fadeIn();
    $('.rebound').css({
      'display' : 'grid'
    }).fadeIn();
  } else if (playResultRoll == 14) {
    $('.one-four').css({
      'display' : 'grid'
    }).fadeIn();
    $('.rebound').css({
      'display' : 'grid'
    }).fadeIn();
    $('.assist').css({
      'display' : 'grid'
    }).fadeIn();
  } else if (playResultRoll == 15) {
    $('.one-five').css({
      'display' : 'grid'
    }).fadeIn();
    $('.rebound').css({
      'display' : 'grid'
    }).fadeIn();
    $('.assist').css({
      'display' : 'grid'
    }).fadeIn();
  } else if (playResultRoll == 16) {
    $('.one-six').css({
      'display' : 'grid'
    }).fadeIn();
    $('.rebound').css({
      'display' : 'grid'
    }).fadeIn();
    $('.assist').css({
      'display' : 'grid'
    }).fadeIn();
  } else if (playResultRoll == 22) {
    $('.two-two').css({
      'display' : 'grid'
    }).fadeIn();
  } else if (playResultRoll == 23) {
    $('.two-three').css({
      'display' : 'grid'
    }).fadeIn();
    $('.rebound').css({
      'display' : 'grid'
    }).fadeIn();
    $('.assist').css({
      'display' : 'grid'
    }).fadeIn();
  } else if (playResultRoll == 24) {
    $('.two-four').css({
      'display' : 'grid'
    }).fadeIn();
    $('.rebound').css({
      'display' : 'grid'
    }).fadeIn();
    $('.assist').css({
      'display' : 'grid'
    }).fadeIn();
  } else if (playResultRoll == 25) {
    $('.two-five').css({
      'display' : 'grid'
    }).fadeIn();
    $('.rebound').css({
      'display' : 'grid'
    }).fadeIn();
    $('.assist').css({
      'display' : 'grid'
    }).fadeIn();
  } else if (playResultRoll == 26) {
    $('.two-six').css({
      'display' : 'grid'
    }).fadeIn();
    $('.rebound').css({
      'display' : 'grid'
    }).fadeIn();
  } else if (playResultRoll == 33) {
    $('.three-three').css({
      'display' : 'grid'
    }).fadeIn();
  } else if (playResultRoll == 34) {
    $('.three-four').css({
      'display' : 'grid'
    }).fadeIn();
    $('.rebound').css({
      'display' : 'grid'
    }).fadeIn();
    $('.assist').css({
      'display' : 'grid'
    }).fadeIn();
  } else if (playResultRoll == 35) {
    $('.three-five').css({
      'display' : 'grid'
    }).fadeIn();
    $('.rebound').css({
      'display' : 'grid'
    }).fadeIn();
    $('.assist').css({
      'display' : 'grid'
    }).fadeIn();
  } else if (playResultRoll == 36) {
    $('.three-six').css({
      'display' : 'grid'
    }).fadeIn();
    $('.rebound').css({
      'display' : 'grid'
    }).fadeIn();
    $('.assist').css({
      'display' : 'grid'
    }).fadeIn();
  } else if (playResultRoll == 44) {
    $('.four-four').css({
      'display' : 'grid'
    }).fadeIn();
    $('.rebound').css({
      'display' : 'grid'
    }).fadeIn();
  } else if (playResultRoll == 45) {
    $('.four-five').css({
      'display' : 'grid'
    }).fadeIn();
    $('.rebound').css({
      'display' : 'grid'
    }).fadeIn();
  } else if (playResultRoll == 46) {
    $('.four-six').css({
      'display' : 'grid'
    }).fadeIn();
  } else if (playResultRoll == 55) {
    $('.five-five').css({
      'display' : 'grid'
    }).fadeIn();
    $('.rebound').css({
      'display' : 'grid'
    }).fadeIn();
    $('.assist').css({
      'display' : 'grid'
    }).fadeIn();
  } else if (playResultRoll == 56) {
    $('.five-six').css({
      'display' : 'grid'
    }).fadeIn();
    $('.rebound').css({
      'display' : 'grid'
    }).fadeIn();
    $('.assist').css({
      'display' : 'grid'
    }).fadeIn();
  } else if (playResultRoll == 66) {
    $('.six-six').css({
      'display' : 'grid'
    }).fadeIn();
  }
}

function diceRoll() {
  // roll the dice when clicking on dice group
  $('.dice-group').on('click', function() {
    // roll all the dice
    die1();
    die2();
    die3();

    // hide all dice on click
    $('.die1, .die2, .die3').hide();

    // inserts roll results of the first two dice and
    // insures first die is always smaller
    if (die2Result < die1Result) {
      $('.die1 span').text(die2Result);
      $('.die2 span').text(die1Result);
    } else {
      $('.die1 span').text(die1Result);
      $('.die2 span').text(die2Result);
    }

    // inserts roll result of the third die roll
    $('.die3 span').text(die3Result);

    // show all the dice with a fade animation
    $('.die1, .die2, .die3').fadeIn();
    
    playResultRoll = $('.die1 span').text() + $('.die2 span').text();
    // console.log(playResultRoll);
    
    showPlay();
    
    cardFlip();
    
  });
}

diceRoll();

function refreshRoll() {
  // roll the dice when clicking on refresh icon
  $('.refresh').on('click', function() {
    // roll all the dice
    die1();
    die2();
    die3();

    // hide all dice on click
    $('.die1, .die2, .die3').hide();

    // inserts roll results of the first two dice and
    // insures first die is always smaller
    if (die2Result < die1Result) {
      $('.die1 span').text(die2Result);
      $('.die2 span').text(die1Result);
    } else {
      $('.die1 span').text(die1Result);
      $('.die2 span').text(die2Result);
    }

    // inserts roll result of the third die roll
    $('.die3 span').text(die3Result);

    // show all the dice with a fade animation
    $('.die1, .die2, .die3').fadeIn();
  });
}

refreshRoll();

function cardFlip() {
  $('.card').on('click', function() {
    var currNumber = $('.card span').text();
    // console.log('Current card #: ' + currNumber);
    currNumber = parseInt(currNumber);
    
    if (currNumber > 1) {
      currNumber--;
      $('.card span').text(currNumber);
    } else if (currNumber == 1) {
      $('.card span').text('End of Quarter');
    } else if ($('.card span').text() == 'End of Quarter') {
      var currQuarter = $('.quarter span').text();
      // console.log('Current quarter #: ' + currQuarter);
      // currQuarter = parseInt(currQuarter);
      
      if (currQuarter < 4) {
        currQuarter++;
        $('.quarter span').text(currQuarter);
        $('.card span').text('60');
      } else if (currQuarter == 4 || currQuarter == 'OT') {
        currQuarter = 'OT';
        $('.quarter span').text(currQuarter);
        $('.card span').text('28');
      }
    }
    
    
  });
}

function cardFlip() {
  var currNumber = $('.card span').text();
  // console.log('Current card #: ' + currNumber);
  currNumber = parseInt(currNumber);

  if (currNumber > 1) {
    currNumber--;
    $('.card span').text(currNumber);
  } else if (currNumber == 1) {
    $('.card span').text('End of Quarter');
  } else if ($('.card span').text() == 'End of Quarter') {
    var currQuarter = $('.quarter span').text();
    // console.log('Current quarter #: ' + currQuarter);
    // currQuarter = parseInt(currQuarter);

    if (currQuarter < 4) {
      currQuarter++;
      $('.quarter span').text(currQuarter);
      $('.card span').text('60');
    } else if (currQuarter == 4 || currQuarter == 'OT') {
      currQuarter = 'OT';
      $('.quarter span').text(currQuarter);
      $('.card span').text('28');
    }
  }
}




function addToScore() {
  $('.away-points .one-point').on('click', function() {
    var awayScore = $('.away-score').text();
    awayScore = parseInt(awayScore);
    awayScore = awayScore+1;
    $('.away-score').text(awayScore);
  });
  
  $('.away-points .two-points').on('click', function() {
    var awayScore = $('.away-score').text();
    awayScore = parseInt(awayScore);
    awayScore = awayScore+2;
    $('.away-score').text(awayScore);
  });
  
  $('.away-points .three-points').on('click', function() {
    var awayScore = $('.away-score').text();
    awayScore = parseInt(awayScore);
    awayScore = awayScore+3;
    $('.away-score').text(awayScore);
  });
  
  // home score
  $('.home-points .one-point').on('click', function() {
    var homeScore = $('.home-score').text();
    homeScore = parseInt(homeScore);
    homeScore = homeScore+1;
    $('.home-score').text(homeScore);
  });
  
  $('.home-points .two-points').on('click', function() {
    var homeScore = $('.home-score').text();
    homeScore = parseInt(homeScore);
    homeScore = homeScore+2;
    $('.home-score').text(homeScore);
  });
  
  $('.home-points .three-points').on('click', function() {
    var homeScore = $('.home-score').text();
    homeScore = parseInt(homeScore);
    homeScore = homeScore+3;
    $('.home-score').text(homeScore);
  });
}

addToScore();