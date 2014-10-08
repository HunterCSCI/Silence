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

//EvaluateScript("keys.js");
//EvaluateScript("character.js");

var canvas = document.getElementById("mainCanvas");
var	ctx = canvas.getContext("2d");

//canvas.addEventListener("mousedown",initiateIntro());

var currentGame = 0;
var currentLevel = 0;
var levelComplete = false;

function Game() {
	Intro();
	gameLoop(0);
}

// New function to get framerate?
var fps = GetFrameRate()||60;

function gameLoop(num){
		loadLevel(currentLevel);
	while (character.isAlive === true && levelComplete === false){
	}

		// Useful variable to add replay value?
		// Perhaps make the game harder with each respawn, in a rogue-legacy esque way.
		
	currentGame++;
}