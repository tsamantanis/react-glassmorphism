import styled from 'styled-components';

interface StyledCustomCardProps {
    borderRadius?: number,
    blur?: number,
    color?: string,
    effectColor: string,
}

function hexToRgbA(hexCode: string, opacity: number): string {
    let hex: any = hexCode.replace('#', '');

    if (hex.length === 3) {
        hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
    }

    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    return `rgba(${r},${g},${b},${opacity})`;
}

const StyledCustomCard = styled.div<StyledCustomCardProps>`
        height: auto;
        min-width: 100px;
        padding: 2rem;
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(${(props: StyledCustomCardProps) => `${props.blur}px`});
        -webkit-backdrop-filter: blur(${(props: StyledCustomCardProps) => `${props.blur}px`});
        border-radius: ${(props: StyledCustomCardProps) => `${props.borderRadius ? props.borderRadius : 10}px`};
        color: ${(props: StyledCustomCardProps) => `${props.color ? props.color : 'white'}`};
        box-shadow: inset 0px 39px 56px -36px rgba(255, 255, 255, 0.5),
        inset 0px 1px 4px 0px ${(props: StyledCustomCardProps) => hexToRgbA(props.effectColor, 0.3)},
        inset 0px -82px 68px -64px ${(props: StyledCustomCardProps) => hexToRgbA(props.effectColor, 0.3)},
        inset 0px 98px 100px -48px ${(props: StyledCustomCardProps) => hexToRgbA(props.effectColor, 0.3)},
        inset 0px 4px 18px 0px ${(props: StyledCustomCardProps) => hexToRgbA(props.effectColor, 0.3)},
        inset 0px 1px 40px 0px ${(props: StyledCustomCardProps) => hexToRgbA(props.effectColor, 0.2)},
        inset 0px 1px 40px 0px ${(props: StyledCustomCardProps) => hexToRgbA(props.effectColor, 0.2)};
        -webkit-box-shadow: inset 0px 39px 56px -36px rgba(255, 255, 255, 0.5),
        inset 0px 1px 4px 0px ${(props: StyledCustomCardProps) => hexToRgbA(props.effectColor, 0.3)},
        inset 0px -82px 68px -64px ${(props: StyledCustomCardProps) => hexToRgbA(props.effectColor, 0.3)},
        inset 0px 98px 100px -48px ${(props: StyledCustomCardProps) => hexToRgbA(props.effectColor, 0.3)},
        inset 0px 4px 18px 0px ${(props: StyledCustomCardProps) => hexToRgbA(props.effectColor, 0.3)},
        inset 0px 1px 40px 0px ${(props: StyledCustomCardProps) => hexToRgbA(props.effectColor, 0.2)},
        inset 0px 1px 40px 0px ${(props: StyledCustomCardProps) => hexToRgbA(props.effectColor, 0.2)};
    `
export default StyledCustomCard;
