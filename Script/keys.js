// Acceptable Key Input
// event.keycodes;

// Most code sourced from http://www.iguanademos.com/Jare/docs/html5/Lessons/Lesson3/js/InputManager.js
	// as a part of http://www.iguanademos.com/Jare/docs/html5/Lessons/Lesson3/ (Javascript/HTML game Lessons Lesson 3)
// To be revised further

var player = {
	input:{
		left: false,
		right: false,
		up: false,
		down: false,
		jump: false,
		shield: false,
		map: false,
		inventory: false
	}
}

this.KEY = {
	BACKSPACE: 8,
    TAB:       9,
    RETURN:   13,
    ESC:      27,
    SPACE:    32,
    PAGEUP:   33,
    PAGEDOWN: 34,
    END:      35,
    HOME:     36,
    LEFT:     37,
    UP:       38,
    RIGHT:    39,
    DOWN:     40,
    INSERT:   45,
    DELETE:   46,
    ZERO:     48, ONE: 49, TWO: 50, THREE: 51, FOUR: 52, FIVE: 53, SIX: 54, SEVEN: 55, EIGHT: 56, NINE: 57,
    A:        65, B: 66, C: 67, D: 68, E: 69, F: 70, G: 71, H: 72, I: 73, J: 74, K: 75, L: 76, M: 77, N: 78, O: 79, P: 80, Q: 81, R: 82, S: 83, T: 84, U: 85, V: 86, W: 87, X: 88, Y: 89, Z: 90,
    TILDA:    192
  };

/*

// Movement
var CKEY_W = KEY_W;
var CKEY_A = KEY_A;
var CKEY_S = KEY_S;
var CKEY_D = KEY_D;

// To be programmed for 'jump'
var CKEY_J = KEY_J;
// To be programmed for 'attack'
var CKEY_K = KEY_K;
// To be programmed for 'shield'
var CKEY_L = KEY_L;
// To be programmed for 'inventory'
var CKEY_I = KEY_I;
// To be programmed for 'map'
var CKEY_M = KEY_M;
*/

inputManager = new function(){
	this.reset = function(){
		this.currentlyKeyPressed = {};
		this.lastKeyPressed = null;
		this.mouseDown = false;
		this.mouseClick = false;
		this.deltaX = 0;
		this.deltaY = 0;
	}
	this.reset();
		this.lastMouseX = 0;
		this.lastMouseY = 0;
	this.handleKeyDown = function(event){
		this.currentlyKeyPressed[event.keyCode] = true;
		this.lastKeyPressed = event.keyCode;
		if (event.keyCode != 116 && event.keyCode != 122) // F5 and F11
		{
			event.stopPropogation();
			event.preventDefault();
		}
	}
	this.handleKeyUp = function(event){	
		this.currentlyKeyPressed[event.keycode] = false;
		this.lastKeyPressed = event.keyCode;
		if (event.keyCode != 116 && event.keyCode != 122) // F5 and F11
		{
			event.stopPropogation();
			event.preventDefault();
		}
	}
	this.KEY = {
		BACKSPACE: 8,
    	TAB:       9,
    	RETURN:   13,
    	ESC:      27,
    	SPACE:    32,
    	PAGEUP:   33,
    	PAGEDOWN: 34,
    	END:      35,
	    HOME:     36,
	    LEFT:     37,
	    UP:       38,
	    RIGHT:    39,
	    DOWN:     40,
	    INSERT:   45,
	    DELETE:   46,
	    ZERO:     48, ONE: 49, TWO: 50, THREE: 51, FOUR: 52, FIVE: 53, SIX: 54, SEVEN: 55, EIGHT: 56, NINE: 57,
	    A:        65, B: 66, C: 67, D: 68, E: 69, F: 70, G: 71, H: 72, I: 73, J: 74, K: 75, L: 76, M: 77, N: 78, O: 79, P: 80, Q: 81, R: 82, S: 83, T: 84, U: 85, V: 86, W: 87, X: 88, Y: 89, Z: 90,
	    TILDA:    192
  };
  	/* 0 - 9 */
	for (var i = 48; i <= 57; i++) {
		this.KEY['' + (i - 48)] = i;
	}
	/* A - Z */
	for (i = 65; i <= 90; i++) {
		this.KEY['' + String.fromCharCode(i)] = i;
	}
	/* NUM_PAD_0 - NUM_PAD_9 */
	for (i = 96; i <= 105; i++) {
		this.KEY['NUM_PAD_' + (i - 96)] = i;
	}
	/* F1 - F12 */
	for (i = 112; i <= 123; i++) {
		this.KEY['F' + (i - 112 + 1)] = i;
	}

	this.handleMouseDown = function (event)
	{
		this.mouseDown = true;
		var newPos = GetRelativePosition(canvas, event.pageX, event.pageY);
		this.lastMouseX = newPos.x;
		this.lastMouseY = newPos.y;
	}

	this.handleMouseUp = function (event)
	{
		this.mouseDown = false;
	}

	this.handleMouseMove = function (event)
	{
		var newPos = GetRelativePosition(canvas, event.pageX, event.pageY);

		this.deltaX = newPos.x - this.lastMouseX;
		this.deltaY = newPos.y - this.lastMouseY;

		this.lastMouseX = newPos.x;
		this.lastMouseY = newPos.y;
	}

	this.handleMouseClick = function (event)
	{
		// Only used for pad emulation on iOS. TODO: Support touch events 
		// iOS emulates taps by sending mousedown then mouseup immediately.
		this.mouseClick = true;
	}

	this.connect = function(document, canvas)
	{
		var bindThis = this;
		$(document).keydown  (function(event) { bindThis.handleKeyDown.call(bindThis, event); });
		$(document).keyup    (function(event) { bindThis.handleKeyUp.call(bindThis, event); });
		$(canvas).mousedown  (function(event) { bindThis.handleMouseDown.call(bindThis, event); });
		$(canvas).click      (function(event) { bindThis.handleMouseClick.call(bindThis, event); });
		$(document).mouseup  (function(event) { bindThis.handleMouseUp.call(bindThis, event); });
		$(document).mousemove(function(event) { bindThis.handleMouseMove.call(bindThis, event); });
	}
	
	// Useful abstraction:
	
	this.PAD = { 'UP': 1, 'DOWN': 2, 'LEFT': 4, 'RIGHT': 8, 'OK': 16, 'CANCEL': 32 };
	
	this.padUpdate = function()
	{
		var state = 0;
		if (this.currentlyPressedKeys[this.KEY.ARROW_UP])  	 state = state | this.PAD.UP;
		if (this.currentlyPressedKeys[this.KEY.ARROW_DOWN])  state = state | this.PAD.DOWN;
		if (this.currentlyPressedKeys[this.KEY.ARROW_LEFT])  state = state | this.PAD.LEFT;
		if (this.currentlyPressedKeys[this.KEY.ARROW_RIGHT]) state = state | this.PAD.RIGHT;
		if (this.currentlyPressedKeys[this.KEY.SPACEBAR]) 	state = state | this.PAD.OK;
		if (this.currentlyPressedKeys[this.KEY.ENTER]) 		state = state | this.PAD.OK;
		if (this.mouseDown || this.mouseClick) 		        state = state | this.PAD.OK;
		if (this.currentlyPressedKeys[this.KEY.ESCAPE]) 	state = state | this.PAD.CANCEL;
		
		this.padPressed = state & (~this.padState);
		this.padReleased = (~state) & this.padState;
		this.padState = state;
		this.mouseClick = false;
	}
}