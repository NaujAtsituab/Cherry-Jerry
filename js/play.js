
﻿var playState = {
	player:null,
	
    create: function () {
		
		this.map = this.game.add.tilemap('World');	
		this.map.addTilesetImage('5-01', '5-01');
		this.map.addTilesetImage('platform','platform1');
		
		
		var backgroundLayer = this.map.createLayer('background1').resizeWorld();
		
		var blockedLayer = this.map.createLayer('platform');
		
		
		
		
		
		this.player = game.add.sprite(100,800,'Jerry');    
        this.player.frame= 0;
		this.game.add.existing(this.player);
        this.player.anchor.set(.5,1);
		this.player.scale.setTo(0.1,0.1);
		this.player.animations.add('move',[0,1],10);
		
		this.game.world.addAt(this.player,1);
		cursors = game.input.keyboard.createCursorKeys();
		this.game.physics.enable(this.player, Phaser.Physics.ARCADE);
		this.player.body.collideWorldBounds = true;  
		this.player.body.gravity.y = 400;
		//this.game.physics.enable(blockedLayer);
		//this.map.setCollisionBetween(0, 10, true, blockedLayer);
    },
	
    update: function () {
		this.game.physics.arcade.collide(this.player, this.blockedLayer);
		
		if (cursors.left.isDown)
		{
			this.player.body.velocity.x = -150;
			this.player.animations.play('move');
			this.player.scale.setTo(-0.1,0.1);
			
			
		}
		else if (cursors.right.isDown)
		{
			this.player.body.velocity.x = 500;
			this.player.animations.play('move');
			this.player.scale.setTo(0.1,0.1);
		}
		else
		{
			this.player.animations.stop();
			this.player.body.velocity.x = 0;
			this.player.frame = 3;
		}
		if (cursors.up.isDown && this.player.body.onFloor())
		{
			this.player.frame = 4;
			this.player.body.velocity.y = -350;	
		}
		if (!this.player.body.onFloor())
		{
			this.player.frame=4;
		}
	}
}