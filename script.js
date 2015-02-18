$(function() {

  $('#start-button').on('click', function() {
    startGame(player);
    $(this).text('Restart');
    $(this).css('backgroundColor', '#b2c2b7');
  });

  $('td.active').click(function () {
    placePiece(this, player);
    $('#turn-indicator-' + player).hide();
    player === 'white' ? player = 'black' : player = 'white';
    startTurn(player);
  });
});

var player = 'black'

function placePiece(object, player) {
  $(object).addClass('piece-' + player);
}

function startGame(player) {
  $('td').removeClass('piece-white piece-black')
  $('tr:nth-child(4) td:nth-child(4)').addClass('piece-white');
  $('tr:nth-child(4) td:nth-child(5)').addClass('piece-black');
  $('tr:nth-child(5) td:nth-child(4)').addClass('piece-black');
  $('tr:nth-child(5) td:nth-child(5)').addClass('piece-white');

  startTurn(player);
}

function startTurn(player) {
  $('#turn-indicator-' + player).show();
  $('.active').removeClass('active');
  var otherPlayer = player === 'white' ? 'black' : 'white';
  var opponentSpaces = $('tbody .piece-' + otherPlayer);
  opponentSpaces.each(activateSpaces);
}

function activateSpaces(index, space) {
  var coordinates = getCoordinates(space);
  goWest(space, coordinates[0], coordinates[1]);
  goEast(space, coordinates[0], coordinates[1]);
  goNorth(space, coordinates[0], coordinates[1]);
  goSouth(space, coordinates[0], coordinates[1]);

  $('td.active').click(function () {
    placePiece(this, player);
    $('#turn-indicator-' + player).hide();
    player === 'white' ? player = 'black' : player = 'white';
    startTurn(player);
  });

  $('td:not(.active)').off('click');
}

function getCoordinates(object) {
  var coordinates = []
  coordinates.push(object.cellIndex + 1);
  coordinates.push(object.parentElement.rowIndex + 1);
  return coordinates;
}

function goWest(space, x, y) {
  var nextSpace = $('tr:nth-child(' + (x -1) + ') td:nth-child(' + y + ')');
  var nextCoordinates = getCoordinates(nextSpace[0]);
  var otherPlayer = player === 'white' ? 'black' : 'white';
  if (nextSpace.hasClass('active')) {
    return;
  } else if (nextSpace.hasClass('piece-' + player)) {
    return;
  } else if (nextSpace.hasClass('piece-' + otherPlayer)) {
    goWest(space, nextCoordinates[0], nextCoordinates[1]);
  } else if (nextSpace.hasClass('')) {
    if (lookForPartner('east', nextCoordinates[0], nextCoordinates[1])) {
      nextSpace.addClass('active');
    }
  }
}

function goEast(space, x, y) {
  var nextSpace = $('tr:nth-child(' + x + ') td:nth-child(' + (y + 1) + ')');
  var nextCoordinates = getCoordinates(nextSpace[0]);
  var otherPlayer = player === 'white' ? 'black' : 'white';
  if (nextSpace.hasClass('active')) {
    return;
  } else if (nextSpace.hasClass('piece-' + player)) {
    return;
  } else if (nextSpace.hasClass('piece-' + otherPlayer)) {
    goEast(space, nextCoordinates[0], nextCoordinates[1]);
  } else if (nextSpace.hasClass('')) {
    if (lookForPartner('west', nextCoordinates[0], nextCoordinates[1])) {
      nextSpace.addClass('active');
    }
  }
}

function goNorth(space, x, y) {
  var nextSpace = $('tr:nth-child(' + (x - 1) + ') td:nth-child(' + y + ')');
  var nextCoordinates = getCoordinates(nextSpace[0]);
  var otherPlayer = player === 'white' ? 'black' : 'white';
  if (nextSpace.hasClass('active')) {
    return;
  } else if (nextSpace.hasClass('piece-' + player)) {
    return;
  } else if (nextSpace.hasClass('piece-' + otherPlayer)) {
    goNorth(space, nextCoordinates[0], nextCoordinates[1]);
  } else if (nextSpace.hasClass('')) {
    if (lookForPartner('south', nextCoordinates[0], nextCoordinates[1])) {
      nextSpace.addClass('active');
    }
  }
}

function goSouth(space, x, y) {
  var nextSpace = $('tr:nth-child(' + (x + 1) + ') td:nth-child(' + y + ')');
  var nextCoordinates = getCoordinates(nextSpace[0]);
  var otherPlayer = player === 'white' ? 'black' : 'white';
  if (nextSpace.hasClass('active')) {
    return;
  } else if (nextSpace.hasClass('piece-' + player)) {
    return;
  } else if (nextSpace.hasClass('piece-' + otherPlayer)) {
    goSouth(space, nextCoordinates[0], nextCoordinates[1]);
  } else if (nextSpace.hasClass('')) {
    if (lookForPartner('north', nextCoordinates[0], nextCoordinates[1])) {
      nextSpace.addClass('active');
    }
  }
}

function lookForPartner(direction, x, y) {
  var legalSpace = false;
  switch (direction) {
    case 'east':
      var nextSpace = $('tr:nth-child(' + (x + 1) + ') td:nth-child(' + y + ')');
      var sibs = nextSpace.siblings();
      sibs.slice(nextSpace.index(), 6).each(function (index, value) {
        if (value.className === ('piece-' + player)) {
          legalSpace = true;
        }
      });
    case 'west':
      var nextSpace = $('tr:nth-child(' + (x - 1) + ') td:nth-child(' + y + ')');
      var sibs = nextSpace.siblings();
      sibs.slice(1, nextSpace.index()).each(function (index, value) {
        if (value.className === ('piece-' + player)) {
          legalSpace = true;
        }
      });
    case 'south':
      var nextSpace = $('tr:nth-child(' + x + ') td:nth-child(' + (y + 1) + ')');
      var sibs = nextSpace.siblings();
      sibs.slice(nextSpace.index(), 6).each(function (index, value) {
        if (value.className === ('piece-' + player)) {
          legalSpace = true;
        }
      });
    case 'north':
      var nextSpace = $('tr:nth-child(' + x + ') td:nth-child(' + (y - 1) + ')');
      var sibs = nextSpace.siblings();
      sibs.slice(1, nextSpace.index()).each(function (index, value) {
        if (value.className === ('piece-' + player)) {
          legalSpace = true;
        }
      });
  }
  return legalSpace;
}
