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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models_Spiral_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/Spiral/index.js */ \"./src/models/Spiral/index.js\");\n\nvar WIDTH = 500;\nvar HEIGHT = WIDTH;\nvar ctx;\nvar centerX;\nvar centerY;\n\nvar init = function init() {\n  var c = document.getElementById('canvas');\n  c.width = WIDTH;\n  c.height = HEIGHT;\n  ctx = c.getContext('2d');\n  centerX = WIDTH / 2;\n  centerY = HEIGHT / 2;\n};\n\nvar draw = function draw() {\n  var diagonal = Math.sqrt(Math.pow(WIDTH, 2) + Math.pow(HEIGHT, 2));\n  var spiral = Object(_models_Spiral_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    diameter: diagonal\n  });\n  spiral.moveTo({\n    x: centerX,\n    y: centerY\n  });\n  ctx.moveTo(centerX, centerY);\n  spiral.path.forEach(function (point) {\n    var x = point.x,\n        y = point.y;\n    ctx.lineTo(x, y);\n  }); // ctx.closePath();\n  // ctx.fill();\n\n  ctx.stroke();\n};\n\ninit();\ndraw();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/models/Point/index.js":
/*!***********************************!*\
  !*** ./src/models/Point/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar newPoint = function newPoint(_ref) {\n  var _ref$center = _ref.center,\n      center = _ref$center === void 0 ? {\n    x: 0,\n    y: 0\n  } : _ref$center,\n      _ref$length = _ref.length,\n      length = _ref$length === void 0 ? 0 : _ref$length,\n      _ref$angle = _ref.angle,\n      angle = _ref$angle === void 0 ? 0 : _ref$angle;\n  var x = center.x + length * Math.cos(angle);\n  var y = center.y + length * Math.sin(angle);\n  return {\n    get x() {\n      return x;\n    },\n\n    get y() {\n      return y;\n    },\n\n    moveTo: function moveTo(vector) {\n      if (vector.x === 0 && vector.y === 0) return this;\n      var center = {\n        x: this.x + vector.x,\n        y: this.y + vector.y\n      };\n      return newPoint({\n        center: center\n      });\n    }\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (newPoint);\n\n//# sourceURL=webpack:///./src/models/Point/index.js?");

/***/ }),

/***/ "./src/models/Spiral/index.js":
/*!************************************!*\
  !*** ./src/models/Spiral/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _makeSpiralPath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./makeSpiralPath */ \"./src/models/Spiral/makeSpiralPath.js\");\n/* harmony import */ var _makeStroke__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./makeStroke */ \"./src/models/Spiral/makeStroke.js\");\n\n\n\nvar newSpiral = function newSpiral(_ref) {\n  var _ref$diameter = _ref.diameter,\n      diameter = _ref$diameter === void 0 ? 500 : _ref$diameter,\n      _ref$vertexDensity = _ref.vertexDensity,\n      vertexDensity = _ref$vertexDensity === void 0 ? 0.5 : _ref$vertexDensity,\n      _ref$coilsGap = _ref.coilsGap,\n      coilsGap = _ref$coilsGap === void 0 ? 10 : _ref$coilsGap;\n  var path = Object(_makeSpiralPath__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    diameter: diameter,\n    vertexDensity: vertexDensity,\n    coilsGap: coilsGap\n  });\n\n  var moveTo = function moveTo(vector) {\n    path = path.map(function (point) {\n      return point.moveTo(vector);\n    });\n  };\n\n  return {\n    get path() {\n      return path;\n    },\n\n    makeStroke: _makeStroke__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    moveTo: moveTo\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (newSpiral);\n\n//# sourceURL=webpack:///./src/models/Spiral/index.js?");

/***/ }),

/***/ "./src/models/Spiral/makeSpiralPath.js":
/*!*********************************************!*\
  !*** ./src/models/Spiral/makeSpiralPath.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Point */ \"./src/models/Point/index.js\");\n\n\nvar makeSpiralPath = function makeSpiralPath(_ref) {\n  var _ref$diameter = _ref.diameter,\n      diameter = _ref$diameter === void 0 ? 500 : _ref$diameter,\n      _ref$vertexDensity = _ref.vertexDensity,\n      vertexDensity = _ref$vertexDensity === void 0 ? 0.5 : _ref$vertexDensity,\n      _ref$coilsGap = _ref.coilsGap,\n      coilsGap = _ref$coilsGap === void 0 ? 10 : _ref$coilsGap;\n  var beta = coilsGap / (2 * Math.PI);\n  var cordLength = 1 / vertexDensity;\n  var spiralPath = [];\n  var theta = 1;\n  var r = (beta + cordLength) / 2;\n\n  do {\n    var point = Object(_Point__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n      length: r,\n      angle: theta\n    });\n    spiralPath.push(point);\n    theta += cordLength / r;\n    r = beta * theta;\n  } while (r < diameter / 2);\n\n  return spiralPath;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (makeSpiralPath);\n\n//# sourceURL=webpack:///./src/models/Spiral/makeSpiralPath.js?");

/***/ }),

/***/ "./src/models/Spiral/makeStroke.js":
/*!*****************************************!*\
  !*** ./src/models/Spiral/makeStroke.js ***!
  \*****************************************/
/*! exports provided: offsetPath, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"offsetPath\", function() { return offsetPath; });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(n); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar offsetPath = function offsetPath(_ref) {\n  var path = _ref.path,\n      _ref$offset = _ref.offset,\n      offset = _ref$offset === void 0 ? 20 : _ref$offset,\n      _ref$direction = _ref.direction,\n      direction = _ref$direction === void 0 ? 1 : _ref$direction;\n\n  if (typeof offset === 'number') {\n    return path.map(function (point) {\n      return point;\n    });\n  }\n\n  return path.map(function (point, i) {\n    point.x += offset[i][0] * direction;\n    point.y += offset[i][1] * direction;\n    return point;\n  });\n};\n\nvar makeStroke = function makeStroke(path) {\n  var postiveOffsetedPath = offsetPath({\n    path: path\n  });\n  var negativeOffsetedPath = offsetPath({\n    path: path,\n    direction: -1\n  });\n  var combinedPath = [].concat(_toConsumableArray(postiveOffsetedPath), _toConsumableArray(negativeOffsetedPath.reverse()));\n  return combinedPath;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (makeStroke);\n\n//# sourceURL=webpack:///./src/models/Spiral/makeStroke.js?");

/***/ })

/******/ });