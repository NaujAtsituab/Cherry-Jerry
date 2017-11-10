
﻿var playState = {
	player:null,
	
    create: function () {
		
		map = game.add.tilemap('World');	
		map.addTilesetImage('5-01', '5-01');
		map.addTilesetImage('platform','platform1');
		
		backLayer = map.createLayer('background1').resizeWorld();	
		blockedLayer = map.createLayer('platform');
		alfieLayer = map.createLayer('Alfie');
		
		//this.game.physics.enable(blockedLayer);
		//this.map.setCollisionBetween([0,1]);
		//blockedLayer.debug = true;
		
		map.setLayer(blockedLayer);
		map.setCollisionBetween(0, 1);
		
		this.player = game.add.sprite(100,800,'Jerry');    
        this.player.frame= 0;
		this.game.add.existing(this.player);
        this.player.anchor.set(.5,1);
		this.player.scale.setTo(0.1,0.1);
		this.player.animations.add('move',[0,1],10);
		
		this.game.world.addAt(this.player,1);
		cursors = game.input.keyboard.createCursorKeys();
		this.physics.enable(this.player, Phaser.Physics.ARCADE);
		this.player.body.collideWorldBounds = true;  
		this.player.body.gravity.y = 200;
		
		
		
    },
	
    update: function () {
		
		game.physics.arcade.collide(this.player, blockedLayer);
		
		if (cursors.left.isDown)
		{
			this.player.scale.setTo(-0.1,0.1);
			this.player.body.velocity.x = -300;
			this.player.animations.play('move');	
		}
		else if (cursors.right.isDown)
		{
			this.player.scale.setTo(0.1,0.1);
			this.player.body.velocity.x = 300;
			this.player.animations.play('move');		
		}
		else
		{	
			this.player.body.velocity.x = 0;
			this.player.frame = 3;
			this.player.animations.stop();
		}
		if (cursors.up.isDown && this.player.body.onFloor())
		{
			this.player.frame = 4;
			this.player.body.velocity.y = -300;	
		}
		if (!this.player.body.onFloor())
		{
			this.player.frame=4;
		}	
	}
}