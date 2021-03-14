import * as React from 'react';
interface CustomCardProps {
    border?: boolean;
    blur?: number;
    color: string;
    content?: HTMLElement;
}
declare const CustomCard: React.FC<CustomCardProps>;
export default CustomCard;
