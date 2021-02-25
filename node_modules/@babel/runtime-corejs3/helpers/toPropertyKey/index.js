var _typeof = require("@babel/runtime-corejs3/helpers/typeof")["default"];

var toPrimitive = require("@babel/runtime-corejs3/helpers/toPrimitive");

function _toPropertyKey(arg) {
  var key = toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}

module.exports = _toPropertyKey;
module.exports["default"] = module.exports, module.exports.__esModule = true;