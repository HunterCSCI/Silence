// Acceptable Key Input
// event.keycodes;

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

var KEYS = {
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