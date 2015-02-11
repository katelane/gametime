$(function() {

  $('tbody td').click(function() {
    if (this.classList.length === 0) {
      turnWhite(this);
    } else {
      turnBlack(this);
      turnWhite(this);
    }
  });

  $('#start-button').on('click', function() {
    startGame();
    $(this).text('Restart');
    $(this).css('backgroundColor', '#b2c2b7');
  });

});

function turnBlack(object) {
  $(object).toggleClass('piece-black');
}

function turnWhite(object) {
  $(object).toggleClass('piece-white');
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

}
