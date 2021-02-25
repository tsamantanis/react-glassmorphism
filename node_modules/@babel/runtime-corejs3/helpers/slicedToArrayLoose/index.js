var arrayWithHoles = require("@babel/runtime-corejs3/helpers/arrayWithHoles");

var iterableToArrayLimitLoose = require("@babel/runtime-corejs3/helpers/iterableToArrayLimitLoose");

var unsupportedIterableToArray = require("@babel/runtime-corejs3/helpers/unsupportedIterableToArray");

var nonIterableRest = require("@babel/runtime-corejs3/helpers/nonIterableRest");

function _slicedToArrayLoose(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimitLoose(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArrayLoose;
module.exports["default"] = module.exports, module.exports.__esModule = true;