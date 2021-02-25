var arrayWithHoles = require("@babel/runtime-corejs3/helpers/arrayWithHoles");

var iterableToArray = require("@babel/runtime-corejs3/helpers/iterableToArray");

var unsupportedIterableToArray = require("@babel/runtime-corejs3/helpers/unsupportedIterableToArray");

var nonIterableRest = require("@babel/runtime-corejs3/helpers/nonIterableRest");

function _toArray(arr) {
  return arrayWithHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableRest();
}

module.exports = _toArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;