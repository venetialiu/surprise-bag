import React, { useState } from 'react';
import { ButtonStyles } from './styles';

export const Button = ({ onClick, children, variant = 'primary' }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <button
            style={ButtonStyles.button(variant, isHovered)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={onClick}
        >
            {children}
        </button>
    );
};