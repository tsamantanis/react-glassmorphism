import styled from 'styled-components';

interface StyledCardProps {
    border?: boolean,
    blur?: number,
}

const StyledCard = styled.div<StyledCardProps>`
        height: auto;
        min-width: 100px;
        padding: 2rem;
        background: rgba( 255, 255, 255, 0.25 );
        backdrop-filter: blur(${(props: StyledCardProps) => `${props.blur}px`});
        -webkit-backdrop-filter: blur(${(props: StyledCardProps) => `${props.blur}px`});
        border-radius: 10px;
        border: ${(props: StyledCardProps) => props.border === false ? `none;` : `1px solid rgba( 255, 255, 255, 0.18 );`}
        color: white;
    `
export default StyledCard;
