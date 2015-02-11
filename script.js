$(function() {

//   $('tbody td').click(function() {
//     if (this.classList.length === 0) {
//       flipWhite(this);
//     } else {
//       flipBlack(this);
//       flipWhite(this);
//     }
//   });

  $('#start-button').on('click', function() {
    startGame();
    $(this).text('Restart');
    $(this).css('backgroundColor', '#b2c2b7');
  });

});

function flipToBlack(object) {
  $(object).toggleClass('piece-black piece-white');
}

function flipToWhite(object) {
  $(object).toggleClass('piece-black piece-white');
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
  $('#black-turn-indicator').show()
  $('td').click(function () {
      flipToBlack(this);
  });

  /*
   -- find all available space
   -- indicate to user availble spaces
   --- flip to black
   */

   $('#black-turn-indicator').hide()
   whiteTurn();
}

function blackTurn() {
  $('#white-turn-indicator').show()
  $('td').click(function () {
    flipToWhite(this);
  });

   $('#white-turn-indicator').hide()
   whiteTurn();
}
