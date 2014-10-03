/*
File created October 3, 2014
Created to be used with Spherical Engine (spheredev.org)
First iteration of Silence, HunterCSCI's take on Legend of Zelda (LoZ)

Source code hosted at github.com/CSCI
Please contact us for any information and/or bugs!
*/

/*
Add any separate scripts with:
EvaluateScript(scriptName);
*/

EvaluateScript("keys.js");
EvaluateScript("character.js");

var currentGame = 0;

function Game() {
	Intro();
	gameLoop(0);
}

var fps = GetFrameRate()||60;
var currentLevel = 0;

function gameLoop(num){
	while (character.isAlive === true){
		loadLevel(currentLevel);
	}

		// Useful variable to add replay value?
		// Perhaps make the game harder with each respawn, in a rogue-legacy esque way.
	currentGame++;
}