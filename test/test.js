module('Test start button functionality');

test( 'start button starts game', function() {

  $('#start-button').click();
    startGame('black');
    ok(true, 'game is started');
});

// test start-to-restart-shift

test( 'pieces are placed correctly', function() {

  $('#start-button').click();
    startGame('black');

    $('tr:nth-child(4) td:nth-child(4)').class;
    strictEqual( 'piece-white', 'piece-white', "pieces in place" );

});


// test that black turn indicator is revealed
// test that restart button resets board


//
// module('Test basic playability');
//
// test reveal of available spaces
// test that player can place a piece of the correct color
// test that pieces flip after legal turn
// test turn alternation
