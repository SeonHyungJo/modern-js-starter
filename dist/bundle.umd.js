(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react')) :
	typeof define === 'function' && define.amd ? define(['react'], factory) :
	(global = global || self, global.ReactCssSpinners = factory(global.React));
}(this, function (React) { 'use strict';

	React = React && React.hasOwnProperty('default') ? React['default'] : React;

	var Spinner = function Spinner(props) {
	  return React.createElement("h1", null, "Spinner");
	};

	return Spinner;

}));
