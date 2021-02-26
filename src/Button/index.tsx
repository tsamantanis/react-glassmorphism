import React from "react"
import Button from './styles';

export interface ButtonProps {
    text?: string,
    onClick?: () => void
}

export default (props: ButtonProps) => {
    const {text, onClick} = props;
    return <Button
                onClick={() => onClick && onClick()}
            >
                {text}
            </Button>
    }
