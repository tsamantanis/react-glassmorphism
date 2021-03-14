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

function hexToRgbA(hexCode, opacity) {
  var hex = hexCode.replace('#', '');

  if (hex.length === 3) {
    hex = "" + hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }

  var r = parseInt(hex.substring(0, 2), 16);
  var g = parseInt(hex.substring(2, 4), 16);
  var b = parseInt(hex.substring(4, 6), 16);
  return "rgba(" + r + "," + g + "," + b + "," + opacity + ")";
}

var StyledCustomCard = styled.div(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteralLoose(["\n        height: auto;\n        min-width: 100px;\n        padding: 2rem;\n        background: rgba(255, 255, 255, 0.1);\n        backdrop-filter: blur(", ");\n        -webkit-backdrop-filter: blur(", ");\n        border-radius: ", ";\n        color: ", ";\n        box-shadow: inset 0px 39px 56px -36px rgba(255, 255, 255, 0.5),\n        inset 0px 1px 4px 0px ", ",\n        inset 0px -82px 68px -64px ", ",\n        inset 0px 98px 100px -48px ", ",\n        inset 0px 4px 18px 0px ", ",\n        inset 0px 1px 40px 0px ", ",\n        inset 0px 1px 40px 0px ", ";\n        -webkit-box-shadow: inset 0px 39px 56px -36px rgba(255, 255, 255, 0.5),\n        inset 0px 1px 4px 0px ", ",\n        inset 0px -82px 68px -64px ", ",\n        inset 0px 98px 100px -48px ", ",\n        inset 0px 4px 18px 0px ", ",\n        inset 0px 1px 40px 0px ", ",\n        inset 0px 1px 40px 0px ", ";\n    "])), function (props) {
  return props.blur + "px";
}, function (props) {
  return props.blur + "px";
}, function (props) {
  return (props.borderRadius ? props.borderRadius : 10) + "px";
}, function (props) {
  return "" + (props.color ? props.color : 'white');
}, function (props) {
  return hexToRgbA(props.effectColor, 0.3);
}, function (props) {
  return hexToRgbA(props.effectColor, 0.3);
}, function (props) {
  return hexToRgbA(props.effectColor, 0.3);
}, function (props) {
  return hexToRgbA(props.effectColor, 0.3);
}, function (props) {
  return hexToRgbA(props.effectColor, 0.2);
}, function (props) {
  return hexToRgbA(props.effectColor, 0.2);
}, function (props) {
  return hexToRgbA(props.effectColor, 0.3);
}, function (props) {
  return hexToRgbA(props.effectColor, 0.3);
}, function (props) {
  return hexToRgbA(props.effectColor, 0.3);
}, function (props) {
  return hexToRgbA(props.effectColor, 0.3);
}, function (props) {
  return hexToRgbA(props.effectColor, 0.2);
}, function (props) {
  return hexToRgbA(props.effectColor, 0.2);
});

var CustomCard = function CustomCard(props) {
  console.log(props);
  return React.createElement(StyledCustomCard, Object.assign({}, props), props.children && props.children);
};

var _templateObject$2;
var Button = styled.button(_templateObject$2 || (_templateObject$2 = _taggedTemplateLiteralLoose(["\n        padding: 0.75rem 1.25rem 0.75rem 1.25rem;\n        margin: 0 auto;\n        background: rgba( 255, 255, 255, 0.25 );\n        backdrop-filter: blur(", ");\n        -webkit-backdrop-filter: blur(", ");\n        border-radius: 5px;\n        border: ", "\n        font-weight: 800;\n        font-size: 1rem;\n        color: white;\n        transition: 0.3s ease;\n        &:hover {\n            background: rgba( 255, 255, 255, 0.35);\n            cursor: pointer;\n        }\n    "])), function (props) {
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
exports.CustomCard = CustomCard;
//# sourceMappingURL=index.js.map
