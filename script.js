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
    $(this).css('backgroundColor', 'red');
  });

});

function turnBlack(object) {
  $(object).toggleClass('piece-black');
}

function turnWhite(object) {
  $(object).toggleClass('piece-white');
}
