$(function() {

  $('tbody td').click(function() {
    if (this.classList.length === 0) {
      turnWhite(this);
    } else {
      turnBlack(this);
      turnWhite(this);
    }
  });
});

function turnBlack(object) {
  $(object).toggleClass('turn-black');
}

function turnWhite(object) {
  $(object).toggleClass('turn-white');
}

