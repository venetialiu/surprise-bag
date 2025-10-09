import React from 'react';
import { Button } from '../Button/Button';
import { HomeStyles } from './styles';
import { useNavigate } from 'react-router-dom';

export const Home = ({ setPage }) => {
    console.log("Home component mounted");
    const navigate = useNavigate();

    return (
        <div style={HomeStyles.container}>
            <h1 style={HomeStyles.title}>Hi Welcome to Surprise Bag!</h1>
            <p style={HomeStyles.subtitle}>Do you want to ...</p>
            <div style={HomeStyles.buttonContainer}>
                <Button onClick={() => navigate('/open')}>Open a Bag</Button>
                <Button onClick={() => navigate('/create')} variant="secondary">Create a Bag</Button>
            </div>
        </div>
    );
};
