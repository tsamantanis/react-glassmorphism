var AsyncGenerator = require("@babel/runtime-corejs3/helpers/AsyncGenerator");

function _wrapAsyncGenerator(fn) {
  return function () {
    return new AsyncGenerator(fn.apply(this, arguments));
  };
}

module.exports = _wrapAsyncGenerator;
module.exports["default"] = module.exports, module.exports.__esModule = true;