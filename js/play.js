
﻿var playState = {
	
	
    create: function () {
		var player = game.add.sprite(100,300,'Jerry');    
        player.frame= 0;
		game.add.existing(player);
        player.anchor.set(.5,1);
		player.scale.setTo(0.1,0.1);
	//  self.player.animations.add('wait',[0,3,4],2, true); 
	//	player.animations.add('move',[0,1],2,true);
	//  self.player.animations.add('jump', [0,5],2,true);
	//	game.physics.enable(self.player, Phaser.Physics.ARCADE);
		
    },
    update: function () {
		
		
		//player.body.velocity.x = 0;
		//self.player.frame = 1;
		//if (cursors.left.is.Down)
		//{
		//	player.body.velocity.x = -150;
		//	player.animations.play('move');
			
			
			
		//}
		//else if (cursors.right.isDown)
		//{
		//	player.body.velocity.x = 150;
		//	player.animations.play('move');
			
		//}
		//else
		//{
		//	player.animations.stop();
		//	player.frame = 4;
		//}
		//if (cursors.up.isDown && player.body.touching.down && hitPlatform)
		//{
		//	player.frame = 5;
		//	player.body.velocity.y = -350;
		//
		//}
	}
}