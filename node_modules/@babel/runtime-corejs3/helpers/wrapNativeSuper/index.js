var _Map = require("@babel/runtime-corejs3/core-js/map");

var _Object$create = require("@babel/runtime-corejs3/core-js/object/create");

var getPrototypeOf = require("@babel/runtime-corejs3/helpers/getPrototypeOf");

var setPrototypeOf = require("@babel/runtime-corejs3/helpers/setPrototypeOf");

var isNativeFunction = require("@babel/runtime-corejs3/helpers/isNativeFunction");

var construct = require("@babel/runtime-corejs3/helpers/construct");

function _wrapNativeSuper(Class) {
  var _cache = typeof _Map === "function" ? new _Map() : undefined;

  module.exports = _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return construct(Class, arguments, getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = _Object$create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return setPrototypeOf(Wrapper, Class);
  };

  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _wrapNativeSuper(Class);
}

module.exports = _wrapNativeSuper;
module.exports["default"] = module.exports, module.exports.__esModule = true;