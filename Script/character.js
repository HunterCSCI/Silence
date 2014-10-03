// Character related functions
// Character Object

var woodenSword = {
	damage: 1;
}

var ironSword = {
	damage: 2;
}

var steelSword = {
	damage: 3;
}

var clothArmor = {
	block: .5;
}

var leatherArmor = {
	block: 1;
}

var steelArmor = {
	block: 1.5;
}

var character = {}
character.maxHealth = 3;
character.currentHealth = 3;
character.currentMap = 1;
character.currentWeapon = "none"
character.currentDamage = 0;
character.currentArmor = "none";
character.currentBlock = 0;
character.posX = 0;
character.posY = 0;
character.isAlive = true;

character.setCurrentHealth = function(numHealth){
	this.currentHealth = numHealth;
}

character.addHealth = function(numHealth){
	this.currentHealth += numHealth;
}

character.changeWeapon = function(weaponName){
	if (weaponName.damage > this.currentDamage){
		this.currentWeapon = weaponName;
		this.currentDamage = weaponName.damage;
	}
}

character.changeArmor = function(armorName){
	if (armorName.armor > this.currentBlock){
		this.currentArmor = currentArmor;
		this.currentBlock = currentArmor.block;
	}
}

character.takeDamage = function(enemyDamage){
	this.currentHealth = enemyDamage - this.currentblock;
	if (this.currentHealth <= 0){
		this.isAlive = false;
	}
}

character.findHeart = function(sizeHeart){
	this.maxHealth += sizeHeart;
	this.currentHealth += sizeHeart;
}