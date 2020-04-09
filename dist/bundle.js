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

/***/ "./src/Path/computeVertexNormals.js":
/*!******************************************!*\
  !*** ./src/Path/computeVertexNormals.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(n); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (_ref) {\n  var _ref2 = _slicedToArray(_ref, 3),\n      p1 = _ref2[0],\n      p2 = _ref2[1],\n      p3 = _ref2[2];\n\n  var _ref3 = [p1.clone(), p2.clone(), p3.clone()];\n  p1 = _ref3[0];\n  p2 = _ref3[1];\n  p3 = _ref3[2];\n  var vertexNormal = p1.add(p3).divide(2).subtract(p2).normalize();\n  return vertexNormal;\n});\n\n//# sourceURL=webpack:///./src/Path/computeVertexNormals.js?");

/***/ }),

/***/ "./src/Path/index.js":
/*!***************************!*\
  !*** ./src/Path/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _computeVertexNormals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./computeVertexNormals */ \"./src/Path/computeVertexNormals.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(n); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\nvar Path = function Path() {\n  var _points = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n\n  var _vertexNormals = [];\n\n  function calculateNormals() {\n    _toConsumableArray(_points).forEach(function (point, i) {\n      if (i >= _points.length - 2) return;\n      var vertexNormal = Object(_computeVertexNormals__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([point, _points[i + 1], _points[i + 2]]);\n\n      _vertexNormals.push(vertexNormal);\n    });\n\n    _vertexNormals = [_points[0].clone().normalize()].concat(_toConsumableArray(_vertexNormals), [_points.slice(-1)[0].clone().normalize()]);\n  }\n\n  function offset() {\n    _points = _vertexNormals.map(function (normal, i) {\n      var point = _points[i];\n      return normal.add(point);\n    });\n  }\n\n  function jitter(_ref) {\n    var _ref$wiggle = _ref.wiggle,\n        wiggle = _ref$wiggle === void 0 ? 50 : _ref$wiggle;\n    this.calculateNormals();\n    _vertexNormals = _vertexNormals.map(function (normal, i) {\n      return normal.multiply(Math.random() * 2 + Math.sin(i * wiggle) * 2);\n    });\n    this.offset();\n  }\n\n  return {\n    get points() {\n      return _points;\n    },\n\n    get vertexNormals() {\n      return _vertexNormals;\n    },\n\n    calculateNormals: calculateNormals,\n    offset: offset,\n    jitter: jitter\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Path);\n\n//# sourceURL=webpack:///./src/Path/index.js?");

/***/ }),

/***/ "./src/Point/index.js":
/*!****************************!*\
  !*** ./src/Point/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// copied some Vector.js functions for some of the vector manipulation\n// https://github.com/maxkueng/victor/blob/master/index.js\n// And Paper.js\n// https://github.com/paperjs/paper.js/blob/9206135a1f9fed1241ee8c9964c8b13bb0e57743/src/basic/Point.js\nvar newPoint = function newPoint(_ref) {\n  var x = _ref.x,\n      y = _ref.y,\n      _ref$center = _ref.center,\n      center = _ref$center === void 0 ? {\n    x: 0,\n    y: 0\n  } : _ref$center,\n      _ref$length = _ref.length,\n      length = _ref$length === void 0 ? 0 : _ref$length,\n      _ref$angle = _ref.angle,\n      angle = _ref$angle === void 0 ? 0 : _ref$angle;\n\n  var _x;\n\n  var _y;\n\n  if (x && y) {\n    _x = x;\n    _y = y;\n  } else {\n    _x = center.x + length * Math.cos(angle);\n    _y = center.y + length * Math.sin(angle);\n  }\n\n  var deg2Radian = function deg2Radian(angle) {\n    return angle / 180 * Math.PI;\n  };\n\n  var sanitizeVector = function sanitizeVector(vec) {\n    if (typeof vec === 'number') return {\n      x: vec,\n      y: vec\n    };\n    return vec;\n  };\n\n  function add() {\n    var vector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {\n      x: 0,\n      y: 0\n    };\n    vector = sanitizeVector(vector);\n    _x += vector.x;\n    _y += vector.y;\n    return this;\n  }\n\n  function subtract(vector) {\n    this.add({\n      x: -vector.x,\n      y: -vector.y\n    });\n    return this;\n  }\n\n  function multiply() {\n    var vector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {\n      x: 1,\n      y: 1\n    };\n    vector = sanitizeVector(vector);\n    _x *= vector.x;\n    _y *= vector.y;\n    return this;\n  }\n\n  function divide(vector) {\n    vector = sanitizeVector(vector);\n    this.multiply({\n      x: 1 / vector.x,\n      y: 1 / vector.y\n    });\n    return this;\n  }\n\n  function rotate(_ref2) {\n    var _ref2$center = _ref2.center,\n        center = _ref2$center === void 0 ? {\n      x: 0,\n      y: 0\n    } : _ref2$center,\n        _ref2$angle = _ref2.angle,\n        angle = _ref2$angle === void 0 ? 90 : _ref2$angle;\n    if (angle === 0) return this;\n    angle = deg2Radian(angle);\n    _x -= center.x;\n    _y -= center.y;\n    var sin = Math.sin(angle);\n    var cos = Math.cos(angle);\n    var newX = _x * cos - _y * sin;\n    var newY = _x * sin + _y * cos;\n    _x = newX + center.x;\n    _y = newY + center.y;\n    return this;\n  }\n\n  function calcLength() {\n    return Math.sqrt(Math.pow(_x, 2) + Math.pow(_y, 2));\n  }\n\n  function normalize() {\n    length = this.calcLength();\n    this.divide(length);\n    return this;\n  }\n\n  function clone() {\n    var clone = newPoint({\n      x: this.x,\n      y: this.y\n    });\n    return clone;\n  }\n\n  return {\n    get x() {\n      return _x;\n    },\n\n    get y() {\n      return _y;\n    },\n\n    add: add,\n    subtract: subtract,\n    multiply: multiply,\n    divide: divide,\n    rotate: rotate,\n    calcLength: calcLength,\n    normalize: normalize,\n    clone: clone\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (newPoint);\n\n//# sourceURL=webpack:///./src/Point/index.js?");

/***/ }),

/***/ "./src/SingleStroke/createCanvas.js":
/*!******************************************!*\
  !*** ./src/SingleStroke/createCanvas.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar setCanvasDimensions = function setCanvasDimensions(canvas, img) {\n  var width;\n  var height;\n\n  if (canvas.attributes.height) {\n    var offsetHeight = canvas.offsetHeight;\n    var aspectRatio = img.width / img.height;\n    width = aspectRatio * offsetHeight;\n    height = offsetHeight;\n  } else {\n    var offsetWidth = canvas.offsetWidth;\n\n    var _aspectRatio = img.height / img.width;\n\n    width = offsetWidth;\n    height = _aspectRatio * offsetWidth;\n  }\n\n  var _ref = [width, height];\n  canvas.width = _ref[0];\n  canvas.height = _ref[1];\n  return canvas;\n};\n\nvar loadImage = function loadImage(imageSrc) {\n  var img = document.createElement('img');\n  img.style = 'display:none';\n  img.src = imageSrc;\n  document.body.appendChild(img);\n  return img;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var canvas = document.querySelector('canvas');\n  var img = loadImage(canvas.attributes.src.value);\n  setCanvasDimensions(canvas, img);\n  return canvas;\n});\n\n//# sourceURL=webpack:///./src/SingleStroke/createCanvas.js?");

/***/ }),

/***/ "./src/SingleStroke/index.js":
/*!***********************************!*\
  !*** ./src/SingleStroke/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Spiral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Spiral */ \"./src/Spiral/index.js\");\n/* harmony import */ var _createCanvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createCanvas */ \"./src/SingleStroke/createCanvas.js\");\n\n\n\nvar SingleStroke = function () {\n  var c = Object(_createCanvas__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  var ctx = c.getContext('2d');\n  var spiral;\n\n  var init = function init() {\n    var diagonal = Math.sqrt(Math.pow(c.width, 2) + Math.pow(c.height, 2));\n    spiral = Object(_Spiral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n      center: {\n        x: c.width / 2,\n        y: c.height / 2\n      },\n      diameter: diagonal\n    });\n  };\n\n  var draw = function draw() {\n    spiral.jitter({});\n    spiral.points.forEach(function (point) {\n      var x = point.x,\n          y = point.y;\n      ctx.lineTo(x, y);\n    });\n  };\n\n  var start = function start() {\n    init();\n    draw(); // ctx.closePath();\n    // ctx.fill();\n\n    ctx.stroke();\n  };\n\n  return {\n    start: start\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SingleStroke);\n\n//# sourceURL=webpack:///./src/SingleStroke/index.js?");

/***/ }),

/***/ "./src/Spiral/index.js":
/*!*****************************!*\
  !*** ./src/Spiral/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _makeSpiral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./makeSpiral */ \"./src/Spiral/makeSpiral.js\");\n/* harmony import */ var _Path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Path */ \"./src/Path/index.js\");\n\n\n\nvar newSpiral = function newSpiral(params) {\n  var points = Object(_makeSpiral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(params);\n  return Object(_Path__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(points);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (newSpiral);\n\n//# sourceURL=webpack:///./src/Spiral/index.js?");

/***/ }),

/***/ "./src/Spiral/makeSpiral.js":
/*!**********************************!*\
  !*** ./src/Spiral/makeSpiral.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Point */ \"./src/Point/index.js\");\n\n\nvar makeSpiralPath = function makeSpiralPath(_ref) {\n  var _ref$center = _ref.center,\n      center = _ref$center === void 0 ? {\n    x: 0,\n    y: 0\n  } : _ref$center,\n      _ref$diameter = _ref.diameter,\n      diameter = _ref$diameter === void 0 ? 500 : _ref$diameter,\n      _ref$vertexDensity = _ref.vertexDensity,\n      vertexDensity = _ref$vertexDensity === void 0 ? 0.5 : _ref$vertexDensity,\n      _ref$coilsGap = _ref.coilsGap,\n      coilsGap = _ref$coilsGap === void 0 ? 10 : _ref$coilsGap;\n  var beta = coilsGap / (2 * Math.PI);\n  var cordLength = 1 / vertexDensity;\n  var spiralPath = [];\n  var theta = 1;\n  var r = (beta + cordLength) / 2;\n\n  do {\n    var point = Object(_Point__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n      center: center,\n      length: r,\n      angle: theta\n    });\n    spiralPath.push(point);\n    theta += cordLength / r;\n    r = beta * theta;\n  } while (r < diameter / 2);\n\n  return spiralPath;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (makeSpiralPath);\n\n//# sourceURL=webpack:///./src/Spiral/makeSpiral.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _SingleStroke__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SingleStroke */ \"./src/SingleStroke/index.js\");\n\n_SingleStroke__WEBPACK_IMPORTED_MODULE_0__[\"default\"].start();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });