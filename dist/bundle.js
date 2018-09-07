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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n// ===============================================\n// Mixin Factory\n// ===============================================\nvar mix = function mix(klass) {\n  return new MixinFactory(klass);\n};\n\nvar MixinFactory =\n/*#__PURE__*/\nfunction () {\n  function MixinFactory(klass) {\n    _classCallCheck(this, MixinFactory);\n\n    this.superClass = klass;\n  }\n\n  _createClass(MixinFactory, [{\n    key: \"with\",\n    value: function _with() {\n      for (var _len = arguments.length, mixins = new Array(_len), _key = 0; _key < _len; _key++) {\n        mixins[_key] = arguments[_key];\n      }\n\n      // Think ruby array#inject { |mixedClass, member| ... } here\n      return mixins.reduce(function (mixedClass, mixin) {\n        return mixin(mixedClass);\n      }, this.superClass);\n    }\n  }]);\n\n  return MixinFactory;\n}(); // ===============================================\n// Mixins\n// ===============================================\n\n\nvar Imageable = function Imageable(klass) {\n  return (\n    /*#__PURE__*/\n    function (_klass) {\n      _inherits(_class, _klass);\n\n      function _class() {\n        var _this;\n\n        _classCallCheck(this, _class);\n\n        _this = _possibleConstructorReturn(this, _getPrototypeOf(_class).call(this));\n        _this.image = null;\n        console.log('Image attribute is now available');\n        return _this;\n      }\n\n      _createClass(_class, [{\n        key: \"setImage\",\n        value: function setImage(url) {\n          this.image = url;\n          console.log(\"Image has been set to \".concat(url));\n        }\n      }]);\n\n      return _class;\n    }(klass)\n  );\n};\n\nvar Taggable = function Taggable(klass) {\n  return (\n    /*#__PURE__*/\n    function (_klass2) {\n      _inherits(_class2, _klass2);\n\n      function _class2() {\n        var _this2;\n\n        _classCallCheck(this, _class2);\n\n        _this2 = _possibleConstructorReturn(this, _getPrototypeOf(_class2).call(this));\n        _this2.tags = [];\n        console.log('Tags attribute is now available');\n        return _this2;\n      }\n\n      _createClass(_class2, [{\n        key: \"addTag\",\n        value: function addTag(tag) {\n          this.tags.push(tag);\n          console.log(\"\".concat(tag, \" has been added to the list\"));\n        }\n      }, {\n        key: \"tagCount\",\n        value: function tagCount() {\n          return this.tags.length;\n        }\n      }]);\n\n      return _class2;\n    }(klass)\n  );\n}; // =================================================================\n\n\nvar Person = function Person(name) {\n  _classCallCheck(this, Person);\n\n  this.name = name;\n  console.log('name has been set');\n};\n\nvar Programmer =\n/*#__PURE__*/\nfunction (_mix$with) {\n  _inherits(Programmer, _mix$with);\n\n  function Programmer(name) {\n    var _this3;\n\n    _classCallCheck(this, Programmer);\n\n    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(Programmer).call(this));\n    _this3.name = name;\n    console.log(\"Hello, I'm a programmer!\");\n    return _this3;\n  }\n\n  return Programmer;\n}(mix(Person).with(Taggable, Imageable));\n\nwindow.Programmer = Programmer;\n\n//# sourceURL=webpack:///./main.js?");

/***/ }),

/***/ 0:
/*!***********************!*\
  !*** multi ./main.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./main.js */\"./main.js\");\n\n\n//# sourceURL=webpack:///multi_./main.js?");

/***/ })

/******/ });