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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_makeStroke_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/makeStroke.js */ \"./src/utils/makeStroke.js\");\n/* harmony import */ var _models_Spiral_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/Spiral.js */ \"./src/models/Spiral.js\");\n\n\n\nconst WIDTH = 500;\nconst HEIGHT = WIDTH;\n\nlet ctx;\nlet centerX;\nlet centerY;\n\nconst init = () => {\n  const c = document.getElementById('canvas');\n  c.width = WIDTH;\n  c.height = HEIGHT;\n  ctx = c.getContext('2d');\n\n  centerX = WIDTH / 2;\n  centerY = HEIGHT / 2;\n};\n\nconst draw = () => {\n  const diagonal = Math.sqrt(WIDTH ** 2 + HEIGHT ** 2);\n\n  const spiral = Object(_models_Spiral_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n    diameter: diagonal,\n  });\n\n  spiral.makeStroke();\n\n  ctx.moveTo(centerX, centerY);\n  spiral.path.forEach((point) => {\n    let { x, y } = point;\n    x += centerX;\n    y += centerY;\n\n    ctx.lineTo(x, y);\n  });\n\n  ctx.closePath();\n  ctx.fill();\n  ctx.stroke();\n};\n\ninit();\ndraw();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/models/Point.js":
/*!*****************************!*\
  !*** ./src/models/Point.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst newPoint = ({ x = 0, y = 0 }) => ({\n  x,\n  y,\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (newPoint);\n\n\n//# sourceURL=webpack:///./src/models/Point.js?");

/***/ }),

/***/ "./src/models/Spiral.js":
/*!******************************!*\
  !*** ./src/models/Spiral.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_makeSpiralPath_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/makeSpiralPath.js */ \"./src/utils/makeSpiralPath.js\");\n/* harmony import */ var _utils_makeStroke_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/makeStroke.js */ \"./src/utils/makeStroke.js\");\n\n\n\nconst newSpiral = ({ diameter = 500, vertexDensity = 0.5, coilsGap = 10 }) => {\n  let path = Object(_utils_makeSpiralPath_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({ diameter, vertexDensity, coilsGap });\n\n  return {\n    get path() {\n      return path;\n    },\n    makeStroke() {\n      path = Object(_utils_makeStroke_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(path);\n    },\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (newSpiral);\n\n\n//# sourceURL=webpack:///./src/models/Spiral.js?");

/***/ }),

/***/ "./src/utils/makeSpiralPath.js":
/*!*************************************!*\
  !*** ./src/utils/makeSpiralPath.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models_Point_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/Point.js */ \"./src/models/Point.js\");\n\n\nconst makeSpiralPath = ({\n  diameter = 500,\n  vertexDensity = 0.5,\n  coilsGap = 10,\n}) => {\n  const beta = coilsGap / (2 * Math.PI);\n  const cordLength = 1 / vertexDensity;\n  const spiralPath = [];\n\n  let theta = 1;\n  let r = beta * 2;\n\n  do {\n    spiralPath.push(\n      Object(_models_Point_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        x: r * Math.cos(theta),\n        y: r * Math.sin(theta),\n      }),\n    );\n\n    theta += cordLength / r;\n    r = beta * theta;\n  } while (r < diameter / 2);\n  return spiralPath;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (makeSpiralPath);\n\n\n//# sourceURL=webpack:///./src/utils/makeSpiralPath.js?");

/***/ }),

/***/ "./src/utils/makeStroke.js":
/*!*********************************!*\
  !*** ./src/utils/makeStroke.js ***!
  \*********************************/
/*! exports provided: offsetPath, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"offsetPath\", function() { return offsetPath; });\nconst offsetPath = ({ path, offset = 20, direction = 1 }) => {\n  if (typeof offset === 'number') {\n    return path.map((point) => point);\n  }\n\n  return path.map((point, i) => {\n    point.x += offset[i][0] * direction;\n    point.y += offset[i][1] * direction;\n    return point;\n  });\n};\n\nconst makeStroke = (path) => {\n  const postiveOffsetedPath = offsetPath({ path });\n  const negativeOffsetedPath = offsetPath({ path, direction: -1 });\n\n  const combinedPath = [\n    ...postiveOffsetedPath,\n    ...negativeOffsetedPath.reverse(),\n  ];\n\n  return combinedPath;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (makeStroke);\n\n\n//# sourceURL=webpack:///./src/utils/makeStroke.js?");

/***/ })

/******/ });