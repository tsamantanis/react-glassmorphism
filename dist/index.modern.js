import React__default, { createElement } from 'react';
import styled from 'styled-components';

let _ = t => t,
    _t;
const StyledCard = styled.div(_t || (_t = _`
        height: auto;
        min-width: 100px;
        padding: 2rem;
        background: rgba( 255, 255, 255, 0.25 );
        backdrop-filter: blur(${0});
        -webkit-backdrop-filter: blur(${0});
        border-radius: 10px;
        border: ${0}
        color: white;
    `), props => `${props.blur}px`, props => `${props.blur}px`, props => props.border === false ? `none;` : `1px solid rgba( 255, 255, 255, 0.18 );`);

const Card = props => {
  console.log(props);
  return createElement(StyledCard, Object.assign({}, props), props.children && props.children);
};

let _$1 = t => t,
    _t$1;

function hexToRgbA(hexCode, opacity) {
  let hex = hexCode.replace('#', '');

  if (hex.length === 3) {
    hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
  }

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  return `rgba(${r},${g},${b},${opacity})`;
}

const StyledCustomCard = styled.div(_t$1 || (_t$1 = _$1`
        height: auto;
        min-width: 100px;
        padding: 2rem;
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(${0});
        -webkit-backdrop-filter: blur(${0});
        border-radius: ${0};
        color: ${0};
        box-shadow: inset 0px 39px 56px -36px rgba(255, 255, 255, 0.5),
        inset 0px 1px 4px 0px ${0},
        inset 0px -82px 68px -64px ${0},
        inset 0px 98px 100px -48px ${0},
        inset 0px 4px 18px 0px ${0},
        inset 0px 1px 40px 0px ${0},
        inset 0px 1px 40px 0px ${0};
        -webkit-box-shadow: inset 0px 39px 56px -36px rgba(255, 255, 255, 0.5),
        inset 0px 1px 4px 0px ${0},
        inset 0px -82px 68px -64px ${0},
        inset 0px 98px 100px -48px ${0},
        inset 0px 4px 18px 0px ${0},
        inset 0px 1px 40px 0px ${0},
        inset 0px 1px 40px 0px ${0};
    `), props => `${props.blur}px`, props => `${props.blur}px`, props => `${props.borderRadius ? props.borderRadius : 10}px`, props => `${props.color ? props.color : 'white'}`, props => hexToRgbA(props.effectColor, 0.3), props => hexToRgbA(props.effectColor, 0.3), props => hexToRgbA(props.effectColor, 0.3), props => hexToRgbA(props.effectColor, 0.3), props => hexToRgbA(props.effectColor, 0.2), props => hexToRgbA(props.effectColor, 0.2), props => hexToRgbA(props.effectColor, 0.3), props => hexToRgbA(props.effectColor, 0.3), props => hexToRgbA(props.effectColor, 0.3), props => hexToRgbA(props.effectColor, 0.3), props => hexToRgbA(props.effectColor, 0.2), props => hexToRgbA(props.effectColor, 0.2));

const CustomCard = props => {
  console.log(props);
  return createElement(StyledCustomCard, Object.assign({}, props), props.children && props.children);
};

let _$2 = t => t,
    _t$2;
const Button = styled.button(_t$2 || (_t$2 = _$2`
        padding: 0.75rem 1.25rem 0.75rem 1.25rem;
        margin: 0 auto;
        background: rgba( 255, 255, 255, 0.25 );
        backdrop-filter: blur(${0});
        -webkit-backdrop-filter: blur(${0});
        border-radius: 5px;
        border: ${0}
        font-weight: 800;
        font-size: 1rem;
        color: white;
        transition: 0.3s ease;
        &:hover {
            background: rgba( 255, 255, 255, 0.35);
            cursor: pointer;
        }
    `), props => `${props.blur}px`, props => `${props.blur}px`, props => props.border === false ? `none;` : `1px solid rgba( 255, 255, 255, 0.18 );`);

var index = (props => {
  const {
    text,
    onClick
  } = props;
  return React__default.createElement(Button, {
    onClick: () => onClick && onClick()
  }, text);
});

export { index as Button, Card, CustomCard };
//# sourceMappingURL=index.modern.js.map
