$(function() {
  var player = 'black'

  $('#start-button').on('click', function() {
    startGame();
    $(this).text('Restart');
    $(this).css('backgroundColor', '#b2c2b7');
  });

  $('td').click(function () {
    placePiece(this, player);
    $('#turn-indicator-' + player).hide();
    player === 'white' ? player = 'black' : player = 'white';
    takeTurn(player);
  });
});

function placePiece(object, player) {
  $(object).addClass('piece-' + player);
}

function startGame() {
  $('td').removeClass('piece-white piece-black')
  $('tr:nth-child(4) td:nth-child(4)').addClass('piece-white');
  $('tr:nth-child(4) td:nth-child(5)').addClass('piece-black');
  $('tr:nth-child(5) td:nth-child(4)').addClass('piece-black');
  $('tr:nth-child(5) td:nth-child(5)').addClass('piece-white');

  takeTurn(player);
}

function takeTurn(player) {
  $('#turn-indicator-' + player).show();
}
