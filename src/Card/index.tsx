import * as React from 'react'
import StyledCard from './styles';

interface CardProps {
  border?: boolean,
  blur?: number,
  content?: HTMLElement
}

const Card: React.FC<CardProps> = (props) => {
    console.log(props)
    return (
        <StyledCard
            {...props}
        >{ props.children && props.children }
        </StyledCard>
    )
};

export default Card;
