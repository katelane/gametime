$(function() {

  $('#start-button').on('click', function() {
    startGame();
    $(this).text('Restart');
    $(this).css('backgroundColor', '#b2c2b7');
  });

});

function placeBlack(object) {
  $(object).addClass('piece-black');
}

function placeWhite(object) {
  $(object).addClass('piece-white');
}

function startGame() {
  $('td').removeClass('piece-white piece-black')
  $('tr:nth-child(3) td:nth-child(3)').addClass('piece-white');
  $('tr:nth-child(3) td:nth-child(4)').addClass('piece-black');
  $('tr:nth-child(4) td:nth-child(3)').addClass('piece-black');
  $('tr:nth-child(4) td:nth-child(4)').addClass('piece-white');
  blackTurn();
}

function blackTurn() {
  $('#turn-indicator-black').show();
  $('td').click(function () {
    placeBlack(this);
    $('#turn-indicator-black').hide();
    whiteTurn();
  });

  /*
   -- find all available space
   -- indicate to user availble spaces
   --- flip to black
   */
}

function whiteTurn() {
  $('#turn-indicator-white').show();
  $('td').click(function () {
    placeWhite(this);
    $('#turn-indicator-white').hide();
    blackTurn();
  });
}
