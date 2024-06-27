import {FC} from 'react';

interface Props {
    width?: string;
    height?: string;
    className?: string;
}

export const LogoText: FC<Props> = ({
    height = '16px',
    width = '16px',
    className = ''
}): JSX.Element => (
    <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1150 478"
        preserveAspectRatio="xMidYMid meet"
        style={{width, height}}
        className={className}
    >
        <g
            transform="translate(0.000000,478.000000) scale(0.100000,-0.100000)"
            stroke="none"
        >
            <text
        x="90%"
        y="90%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontFamily="Arial"
        fontSize="9000"
        fill="black"
      >
        Hello World
      </text>
        </g>
    </svg>
);
