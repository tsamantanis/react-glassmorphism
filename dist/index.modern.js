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
const Button = styled.button(_t$1 || (_t$1 = _$1`
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

export { index as Button, Card };
//# sourceMappingURL=index.modern.js.map
