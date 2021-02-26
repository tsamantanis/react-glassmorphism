import styled from 'styled-components';

interface ButtonProps {
    border?: boolean,
    blur?: number,
}

const Button = styled.button<ButtonProps>`
        padding: 0.5rem 0.75rem 0.5rem 0.75rem;
        margin: 0 auto;
        background: rgba( 255, 255, 255, 0.25 );
        backdrop-filter: blur(${(props: ButtonProps) => `${props.blur}px`});
        -webkit-backdrop-filter: blur(${(props: ButtonProps) => `${props.blur}px`});
        border-radius: 5px;
        border: ${(props: ButtonProps) => props.border === false ? `none;` : `1px solid rgba( 255, 255, 255, 0.18 );`}
    `
export default Button;
