var _Array$isArray = require("@babel/runtime-corejs3/core-js/array/is-array");

var arrayLikeToArray = require("@babel/runtime-corejs3/helpers/arrayLikeToArray");

function _arrayWithoutHoles(arr) {
  if (_Array$isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;