import React, { useState } from 'react';
import { HeaderStyles } from './styles';

export const Header = ({ onAboutClick }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <header style={HeaderStyles.header}>
            <button
                style={HeaderStyles.button(isHovered)}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={onAboutClick}
            >
                About
            </button>
        </header>
    );
};