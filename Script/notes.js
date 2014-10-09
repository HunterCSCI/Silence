// Necessary Knowledge:

/*
	Usage of:
		Heroku (node.js)
		JavaScript
		HTML
		CSS
		jQuery v 2.1.1 // NOTE: Currently used version of jQuery will not function with IE browers
		If necessary, revert back to jQuery v1.11.1
		Possibly Tiled (For generating maps) - Though possible without.
*/

// List of Possible Events:

/*
	EvaluateScript(keys.js);
*/


/* Startup Functions
	Intro();

*/

/*
map.loadMap(map1);
	Load default map
character.character();
	Spawn new character with base stats and equipment using a constructor
	Set new character's position

*/

//To be implemented:

/*

Character Class / Functions:

character.checkMove();
	Interpret new position if input command is legal
	Check if move is legal (unpassable terrain)
character.move();
	Cause character to move if checkMove returns true;
character.attack();
	Attack if:
		Weapon is equipped
	Successful if:
		Breakable terrain
		Enemy
		Empty space
	Interpret damage based on:
		Enemy armor
		Current weapon
chracter.speed = propervalue;
	Set the speed at which character can move.
character.invulnerability = false;
	To be invoked when character is hit, or picks up the proper item
*/

/*

Monster Class:
	monster.type
	monster.name
	monster.armor
	monster.damage
	monster.size
	monster.ifCollision

*/

/*

Treasure / Items Class:
	treasure.type
	treasure.name
	treasure.openEvent
	
	item.type
	item.name
	item.openEvent
*/

/*
Complete:

character.changeWeapon(weaponName);
	Replace character.currentWeapon();
	Change character.currentDamage();
character.changeArmor(armorName);
	Replace character.currentArmor;
	Change character.currentBlock;
character.takeDamage(amount);
	Cause character to lose health
character.findHeart(sizeHeart);
	Heal amount based on item
	Check if health would be greater than max health
character.findHeartContainer(sizeHeart);
	Increase max health based on container found
	Increase current health by container (but not above max)
*/