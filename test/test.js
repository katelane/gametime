module('Test start button functionality');

test( 'start button starts game', function() {

  $('#start-button').click();
    startGame('black');
    ok(true, 'game is started');
});

test ( 'start to restart button change', function() {
  $('#start-button').click();
    startGame('black');
    ok("Restart", "Restart");
});

test( 'pieces are placed correctly', function() {

  $('#start-button').click();
    startGame('black');

    $('tr:nth-child(4) td:nth-child(4)').class;
    strictEqual( 'piece-white', 'piece-white', "pieces in place" );

});

test( 'black turn indicator is revealed', function() {

  $('#start-button').click();
    startGame('black');

    strictEqual( '#turn-indicator-black', '#turn-indicator-black' );
});

test ( 'restart button resets board' , function() {
  $('#start-button').click();
    startGame('black');

    $('tr:nth-child(4) td:nth-child(3)').addClass('piece-black');
    $('#start-button').click();
    $('tr:nth-child(4) td:nth-child(3)').class;
    strictEqual( '', '' );
});


//
// module('Test basic playability');
//
// test reveal of available spaces
// test turn indicator
// test that player can place a piece of the correct color
// test that pieces flip after legal turn
// test turn alternation
