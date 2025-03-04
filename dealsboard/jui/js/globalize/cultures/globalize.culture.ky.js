/*
 * Globalize Culture ky
 *
 * http://github.com/jquery/globalize
 *
 * Copyright Software Freedom Conservancy, Inc.
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * This file was generated by the Globalize Culture Generator
 * Translation: bugs found in this file need to be fixed in the generator
 */

(function( window, undefined ) {

var Globalize;

if ( typeof require !== "undefined" &&
	typeof exports !== "undefined" &&
	typeof module !== "undefined" ) {
	// Assume CommonJS
	Globalize = require( "globalize" );
} else {
	// Global variable
	Globalize = window.Globalize;
}

Globalize.addCultureInfo( "ky", "default", {
	name: "ky",
	englishName: "Kyrgyz",
	nativeName: "Кыргыз",
	language: "ky",
	numberFormat: {
		",": " ",
		".": ",",
		percent: {
			pattern: ["-n%","n%"],
			",": " ",
			".": ","
		},
		currency: {
			pattern: ["-n $","n $"],
			",": " ",
			".": "-",
			symbol: "сом"
		}
	},
	calendars: {
		standard: {
			"/": ".",
			firstDay: 1,
			days: {
				names: ["Жекшемби","Дүйшөмбү","Шейшемби","Шаршемби","Бейшемби","Жума","Ишемби"],
				namesAbbr: ["Жш","Дш","Шш","Шр","Бш","Жм","Иш"],
				namesShort: ["Жш","Дш","Шш","Шр","Бш","Жм","Иш"]
			},
			months: {
				names: ["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь",""],
				namesAbbr: ["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек",""]
			},
			AM: null,
			PM: null,
			patterns: {
				d: "dd.MM.yy",
				D: "d'-'MMMM yyyy'-ж.'",
				t: "H:mm",
				T: "H:mm:ss",
				f: "d'-'MMMM yyyy'-ж.' H:mm",
				F: "d'-'MMMM yyyy'-ж.' H:mm:ss",
				M: "d MMMM",
				Y: "MMMM yyyy'-ж.'"
			}
		}
	}
});

}( this ));
;