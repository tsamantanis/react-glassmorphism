var temporalUndefined = require("@babel/runtime-corejs3/helpers/temporalUndefined");

var tdz = require("@babel/runtime-corejs3/helpers/tdz");

function _temporalRef(val, name) {
  return val === temporalUndefined ? tdz(name) : val;
}

module.exports = _temporalRef;
module.exports["default"] = module.exports, module.exports.__esModule = true;