
﻿var playState = {
	player:null,
	
    create: function () {
		var self = this;
		/*map = game.add.tilemap('world');
		
		map.addTilesetImage('5-01', 'background2');
		map.addTilesetImage('platform','platform2');
		
		map.setCollision
		layer = map.createLayer('background1');
		layer.resizeWorld();
		layer2 = map.createLayer('platform1');
		layer2.resizeWorld();*/
		
		self.player = game.add.sprite(100,300,'Jerry');    
        self.player.frame= 0;
		game.add.existing(self.player);
        self.player.anchor.set(.5,1);
		self.player.scale.setTo(0.1,0.1);
		self.player.animations.add('move',[0,1],10);
		cursors = game.input.keyboard.createCursorKeys();
		game.physics.enable(self.player, Phaser.Physics.ARCADE);
		
    },
	
    update: function () {
		
		var self = this;
		if (cursors.left.isDown)
		{
			self.player.body.velocity.x = -150;
			self.player.animations.play('move');
			self.player.scale.setTo(-0.1,0.1);
			
			
		}
		else if (cursors.right.isDown)
		{
			self.player.body.velocity.x = 150;
			self.player.animations.play('move');
			//self.player.scale.x = 1;
			self.player.scale.setTo(0.1,0.1);
		}
		else
		{
			self.player.animations.stop();
			self.player.body.velocity.x = 0;
			self.player.frame = 3;
		}
		if (cursors.up.isDown && self.player.body.touching.down && hitPlatform)
		{
			self.player.frame = 5;
			self.player.body.velocity.y = -350;	
		}
	}
}