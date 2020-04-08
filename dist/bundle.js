/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/SingleStroke.js":
/*!*****************************!*\
  !*** ./src/SingleStroke.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models_Spiral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/Spiral */ \"./src/models/Spiral/index.js\");\n\n\nvar SingleStroke = function () {\n  var WIDTH = 500;\n  var HEIGHT = WIDTH;\n  var ctx;\n  var spiral;\n\n  var init = function init() {\n    var c = document.getElementById('canvas');\n    c.width = WIDTH;\n    c.height = HEIGHT;\n    ctx = c.getContext('2d');\n    var diagonal = Math.sqrt(Math.pow(WIDTH, 2) + Math.pow(HEIGHT, 2));\n    spiral = Object(_models_Spiral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n      center: {\n        x: WIDTH / 2,\n        y: HEIGHT / 2\n      },\n      diameter: diagonal\n    });\n  };\n\n  var modify = function modify() {\n    spiral.path.forEach(function (point) {\n      var x = point.x,\n          y = point.y;\n      ctx.lineTo(x, y);\n    }); // ctx.closePath();\n    // ctx.fill();\n\n    ctx.stroke();\n  };\n\n  var start = function start() {\n    init();\n    modify();\n  };\n\n  return {\n    start: start\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SingleStroke);\n\n//# sourceURL=webpack:///./src/SingleStroke.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _SingleStroke_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SingleStroke.js */ \"./src/SingleStroke.js\");\n\n_SingleStroke_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].start();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/models/Point/index.js":
/*!***********************************!*\
  !*** ./src/models/Point/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _moveTo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moveTo */ \"./src/models/Point/moveTo.js\");\n\n\nvar newPoint = function newPoint(_ref) {\n  var _ref$center = _ref.center,\n      center = _ref$center === void 0 ? {\n    x: 0,\n    y: 0\n  } : _ref$center,\n      _ref$length = _ref.length,\n      length = _ref$length === void 0 ? 0 : _ref$length,\n      _ref$angle = _ref.angle,\n      angle = _ref$angle === void 0 ? 0 : _ref$angle;\n  var x = center.x + length * Math.cos(angle);\n  var y = center.y + length * Math.sin(angle);\n  return {\n    x: x,\n    y: y,\n    moveTo: _moveTo__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (newPoint);\n\n//# sourceURL=webpack:///./src/models/Point/index.js?");

/***/ }),

/***/ "./src/models/Point/moveTo.js":
/*!************************************!*\
  !*** ./src/models/Point/moveTo.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return moveTo; });\nfunction moveTo(vector) {\n  if (vector.x === 0 && vector.y === 0) return this;\n  this.x += vector.x;\n  this.y += vector.y;\n  return this;\n}\n\n//# sourceURL=webpack:///./src/models/Point/moveTo.js?");

/***/ }),

/***/ "./src/models/Spiral/index.js":
/*!************************************!*\
  !*** ./src/models/Spiral/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _makeSpiralPath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./makeSpiralPath */ \"./src/models/Spiral/makeSpiralPath.js\");\n\n\nvar newSpiral = function newSpiral(_ref) {\n  var _ref$center = _ref.center,\n      center = _ref$center === void 0 ? {\n    x: 0,\n    y: 0\n  } : _ref$center,\n      _ref$diameter = _ref.diameter,\n      diameter = _ref$diameter === void 0 ? 500 : _ref$diameter,\n      _ref$vertexDensity = _ref.vertexDensity,\n      vertexDensity = _ref$vertexDensity === void 0 ? 0.5 : _ref$vertexDensity,\n      _ref$coilsGap = _ref.coilsGap,\n      coilsGap = _ref$coilsGap === void 0 ? 10 : _ref$coilsGap;\n  var path = Object(_makeSpiralPath__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    center: center,\n    diameter: diameter,\n    vertexDensity: vertexDensity,\n    coilsGap: coilsGap\n  });\n  return {\n    get path() {\n      return path;\n    }\n\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (newSpiral);\n\n//# sourceURL=webpack:///./src/models/Spiral/index.js?");

/***/ }),

/***/ "./src/models/Spiral/makeSpiralPath.js":
/*!*********************************************!*\
  !*** ./src/models/Spiral/makeSpiralPath.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Point */ \"./src/models/Point/index.js\");\n\n\nvar makeSpiralPath = function makeSpiralPath(_ref) {\n  var center = _ref.center,\n      diameter = _ref.diameter,\n      vertexDensity = _ref.vertexDensity,\n      coilsGap = _ref.coilsGap;\n  var beta = coilsGap / (2 * Math.PI);\n  var cordLength = 1 / vertexDensity;\n  var spiralPath = [];\n  var theta = 1;\n  var r = (beta + cordLength) / 2;\n\n  do {\n    var point = Object(_Point__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n      center: center,\n      length: r,\n      angle: theta\n    });\n    spiralPath.push(point);\n    theta += cordLength / r;\n    r = beta * theta;\n  } while (r < diameter / 2);\n\n  return spiralPath;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (makeSpiralPath);\n\n//# sourceURL=webpack:///./src/models/Spiral/makeSpiralPath.js?");

/***/ })

/******/ });