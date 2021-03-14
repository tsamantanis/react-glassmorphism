import * as React from 'react';
interface CustomCardProps {
    borderRadius?: number;
    blur?: number;
    color?: string;
    effectColor: string;
    content?: HTMLElement;
}
declare const CustomCard: React.FC<CustomCardProps>;
export default CustomCard;
