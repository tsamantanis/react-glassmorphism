var arrayWithHoles = require("@babel/runtime-corejs3/helpers/arrayWithHoles");

var iterableToArrayLimit = require("@babel/runtime-corejs3/helpers/iterableToArrayLimit");

var unsupportedIterableToArray = require("@babel/runtime-corejs3/helpers/unsupportedIterableToArray");

var nonIterableRest = require("@babel/runtime-corejs3/helpers/nonIterableRest");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;