
var titleState = {
    create: function () {
		var nameTitle = game.add.text(300,200,"CHERRY JERRY",{font:'bold 54pt Copperplate Gothic', fill: '#ffffff'});
        var nameLabel = game.add.text(400,400,"Click anywhere to start", {
			font: '40px Space Mono',fill: '#ffffff',
		});
		game.input.activePointer.capture=true;
        
    },
    update: function () {
		if (game.input.activePointer.isDown){
			game.state.start('play')
		}
    }
}
