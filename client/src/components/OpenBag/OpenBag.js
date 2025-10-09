import React, { useState } from 'react';
import { Button } from '../Button/Button';
import { OpenBagStyles } from './styles';
import { useNavigate } from 'react-router-dom';

export const OpenBag = ({ bagContent }) => {
    const [isUnwrapped, setIsUnwrapped] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();

    const handleUnwrap = () => {
        if (!bagContent || (!bagContent.message && !bagContent.image && !bagContent.video)) {
            alert("No bag has been created yet! Please create one first.");
            navigate('/create');
            return;
        }
        setIsUnwrapped(true);
    };

    if (isUnwrapped) {
        return (
            <div style={OpenBagStyles.container}>
                <div style={OpenBagStyles.contentContainer}>
                    {bagContent.message && (
                        <div style={OpenBagStyles.messageBox}>
                            <p>{bagContent.message}</p>
                        </div>
                    )}
                    <div style={OpenBagStyles.mediaGrid}>
                        {bagContent.image && <div style={OpenBagStyles.mediaWrapper}><img src={bagContent.image} alt="Surprise" style={{ width: '100%', borderRadius: '0.25rem', display: 'block' }}/></div>}
                        {bagContent.video && <div style={OpenBagStyles.mediaWrapper}><video src={bagContent.video} controls style={{ width: '100%', borderRadius: '0.25rem' }}/></div>}
                    </div>
                     <div style={{marginTop: '1.5rem'}}><Button onClick={() => navigate('/')}>Close</Button></div>
                </div>
            </div>
        );
    }
    
    return (
        <div style={OpenBagStyles.container}>
            <h1 style={OpenBagStyles.title} marginBottom="30px">Click to unwrap the surprise!</h1>
            <div
                style={OpenBagStyles.gradientBag(isHovered)}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={handleUnwrap}
            >
               <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="48" 
                    height="48" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="white" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                >
                    <polyline points="20 12 20 22 4 22 4 12"></polyline>
                    <rect x="2" y="7" width="20" height="5"></rect>
                    <line x1="12" y1="22" x2="12" y2="7"></line>
                    <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
                    <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
                </svg>
            </div>
        </div>
    );
};