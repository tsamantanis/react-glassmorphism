import * as React from 'react'
import StyledCustomCard from './styles';

interface CustomCardProps {
    borderRadius?: number,
    blur?: number,
    color?: string,
    effectColor: string,
    content?: HTMLElement
}

const CustomCard: React.FC<CustomCardProps> = (props) => {
    console.log(props)
    return (
        <StyledCustomCard
            {...props}
        >{ props.children && props.children }
        </StyledCustomCard>
    )
};

export default CustomCard;
