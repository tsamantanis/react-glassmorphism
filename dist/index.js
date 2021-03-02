function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var styled = _interopDefault(require('styled-components'));

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  strings.raw = raw;
  return strings;
}

var _templateObject;
var StyledCard = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n        height: auto;\n        min-width: 100px;\n        padding: 2rem;\n        background: rgba( 255, 255, 255, 0.25 );\n        backdrop-filter: blur(", ");\n        -webkit-backdrop-filter: blur(", ");\n        border-radius: 10px;\n        border: ", "\n        color: white;\n    "])), function (props) {
  return props.blur + "px";
}, function (props) {
  return props.blur + "px";
}, function (props) {
  return props.border === false ? "none;" : "1px solid rgba( 255, 255, 255, 0.18 );";
});

var Card = function Card(props) {
  console.log(props);
  return React.createElement(StyledCard, Object.assign({}, props), props.children && props.children);
};

var _templateObject$1;
var Button = styled.button(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteralLoose(["\n        padding: 0.75rem 1.25rem 0.75rem 1.25rem;\n        margin: 0 auto;\n        background: rgba( 255, 255, 255, 0.25 );\n        backdrop-filter: blur(", ");\n        -webkit-backdrop-filter: blur(", ");\n        border-radius: 5px;\n        border: ", "\n        font-weight: 800;\n        font-size: 1rem;\n        color: white;\n        transition: 0.3s ease;\n        &:hover {\n            background: rgba( 255, 255, 255, 0.35);\n            cursor: pointer;\n        }\n    "])), function (props) {
  return props.blur + "px";
}, function (props) {
  return props.blur + "px";
}, function (props) {
  return props.border === false ? "none;" : "1px solid rgba( 255, 255, 255, 0.18 );";
});

var index = (function (props) {
  var text = props.text,
      _onClick = props.onClick;
  return React__default.createElement(Button, {
    onClick: function onClick() {
      return _onClick && _onClick();
    }
  }, text);
});

exports.Button = index;
exports.Card = Card;
//# sourceMappingURL=index.js.map
