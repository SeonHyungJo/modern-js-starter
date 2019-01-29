import React from 'react';

var styles = ".lds-facebook {\r\n  display: inline-block;\r\n  position: relative;\r\n  width: 64px;\r\n  height: 64px;\r\n}\r\n.lds-facebook div {\r\n  display: inline-block;\r\n  position: absolute;\r\n  left: 6px;\r\n  width: 13px;\r\n  background: #fff;\r\n  animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;\r\n}\r\n.lds-facebook div:nth-child(1) {\r\n  left: 6px;\r\n  animation-delay: -0.24s;\r\n}\r\n.lds-facebook div:nth-child(2) {\r\n  left: 26px;\r\n  animation-delay: -0.12s;\r\n}\r\n.lds-facebook div:nth-child(3) {\r\n  left: 45px;\r\n  animation-delay: 0;\r\n}\r\n@keyframes lds-facebook {\r\n  0% {\r\n    top: 6px;\r\n    height: 51px;\r\n  }\r\n  50%,\r\n  100% {\r\n    top: 19px;\r\n    height: 26px;\r\n  }\r\n}\r\n";

var Facebook = function Facebook(props) {
  return React.createElement(React.Fragment, null, React.createElement("style", null, "$", "".concat(styles)), React.createElement("div", {
    className: "lds-facebook"
  }, React.createElement("div", null), React.createElement("div", null), React.createElement("div", null)));
};

var styles$1 = ".lds-circle {\r\n  display: inline-block;\r\n  transform: translateZ(1px);\r\n}\r\n.lds-circle > div {\r\n  display: inline-block;\r\n  width: 51px;\r\n  height: 51px;\r\n  margin: 6px;\r\n  border-radius: 50%;\r\n  background: #fff;\r\n  animation: lds-circle 2.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;\r\n}\r\n@keyframes lds-circle {\r\n  0%,\r\n  100% {\r\n    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);\r\n  }\r\n  0% {\r\n    transform: rotateY(0deg);\r\n  }\r\n  50% {\r\n    transform: rotateY(1800deg);\r\n    animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);\r\n  }\r\n  100% {\r\n    transform: rotateY(3600deg);\r\n  }\r\n}\r\n";

var Circle = function Circle(props) {
  return React.createElement(React.Fragment, null, React.createElement("style", null, "$", "".concat(styles$1)), React.createElement("div", {
    className: "lds-circle"
  }, React.createElement("div", null)));
};

var styles$2 = ".lds-heart {\r\n  display: inline-block;\r\n  position: relative;\r\n  width: 64px;\r\n  height: 64px;\r\n  transform: rotate(45deg);\r\n  transform-origin: 32px 32px;\r\n}\r\n.lds-heart div {\r\n  top: 23px;\r\n  left: 19px;\r\n  position: absolute;\r\n  width: 26px;\r\n  height: 26px;\r\n  background: #fff;\r\n  animation: lds-heart 1.2s infinite cubic-bezier(0.215, 0.61, 0.355, 1);\r\n}\r\n.lds-heart div:after,\r\n.lds-heart div:before {\r\n  content: \" \";\r\n  position: absolute;\r\n  display: block;\r\n  width: 26px;\r\n  height: 26px;\r\n  background: #fff;\r\n}\r\n.lds-heart div:before {\r\n  left: -17px;\r\n  border-radius: 50% 0 0 50%;\r\n}\r\n.lds-heart div:after {\r\n  top: -17px;\r\n  border-radius: 50% 50% 0 0;\r\n}\r\n@keyframes lds-heart {\r\n  0% {\r\n    transform: scale(0.95);\r\n  }\r\n  5% {\r\n    transform: scale(1.1);\r\n  }\r\n  39% {\r\n    transform: scale(0.85);\r\n  }\r\n  45% {\r\n    transform: scale(1);\r\n  }\r\n  60% {\r\n    transform: scale(0.95);\r\n  }\r\n  100% {\r\n    transform: scale(0.9);\r\n  }\r\n}\r\n";

var Heart = function Heart(props) {
  return React.createElement(React.Fragment, null, React.createElement("style", null, "$", "".concat(styles$2)), React.createElement("div", {
    className: "lds-heart"
  }, React.createElement("div", null)));
};

export { Facebook, Circle, Heart };