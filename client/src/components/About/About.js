import React from 'react';
import { Button } from '../Button/Button';
import { AboutStyles } from './styles';

export const About = ({ onClose }) => {
    return (
        <div style={AboutStyles.overlay}>
            <div style={AboutStyles.modal}>
                <h2 style={AboutStyles.title}>About Surprise Bag</h2>
                <p style={AboutStyles.text}>Share anonymous thoughts. Create a surprise bag with a message, photo, or video. In return, open a surprise from someone else!</p>
                <Button onClick={onClose}>Close</Button>
            </div>
        </div>
    );
};