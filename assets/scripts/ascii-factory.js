!function e(t,r,n){function a(o,u){if(!r[o]){if(!t[o]){var c="function"==typeof require&&require;if(!u&&c)return c(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var s=r[o]={exports:{}};t[o][0].call(s.exports,function(e){var r=t[o][1][e];return a(r?r:e)},s,s.exports,e,t,r,n)}return r[o].exports}for(var i="function"==typeof require&&require,o=0;o<n.length;o++)a(n[o]);return a}({1:[function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();Object.defineProperty(r,"__esModule",{value:!0});var i=function(){function e(){n(this,e)}return a(e,null,[{key:"getAscii",value:function(e,t){var r="",n=function(t){var r=void 0;return e.forEach(function(e){r&&Math.abs(t-e.lightness)>=Math.abs(t-r.lightness)||(r=e)}),r.character};return t.data.forEach(function(e,a){a>0&&a%t.width===0&&(r+="\r\n"),r+=n(e)}),r}}]),e}();r["default"]=i},{}],2:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}var a=e("../factories/AsciiFactory"),i=n(a),o=self;o.onmessage=function(e){o.postMessage(i["default"].getAscii(e.data.characterLightnessSet,e.data.imageLightnessData))}},{"../factories/AsciiFactory":1}]},{},[2]);
//# sourceMappingURL=ascii-factory.js.map