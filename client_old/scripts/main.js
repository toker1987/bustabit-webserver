define([
    'lib/react',
    'components/Game',
    'lib/clib',
    'game-logic/engine',
    'lib/socket.io-1.2.1'
], function(
    React,
    GameClass,
    Clib,
    Engine,
    io
) {
    // Expose Socket.IO globally for other modules
    window.io = io;

    var Game = React.createFactory(GameClass);

    React.render(
        Game(),
        document.getElementById('game')
    );

    //Update the balance in an ugly way TODO: Improve
    Engine.on('all', function() {
        var elem = document.getElementById('balance_bits');
        if (elem)
            elem.innerHTML = Clib.formatSatoshis(Engine.balanceSatoshis, 2);
        else
            console.log('[main] No balance container');
    });
});