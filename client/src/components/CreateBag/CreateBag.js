import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { Button } from '../Button/Button';
import { CreateBagStyles } from './styles.js';
import { ButtonStyles } from '../Button/styles.js';

export const CreateBag = ({ onBagCreated }) => {
    const navigate = useNavigate(); 
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [message, setMessage] = useState('');
    const [image, setImage] = useState(null);
    const [video, setVideo] = useState(null);

    const handleSubmit = () => {
        if (!message && !image && !video) {
            alert("Please add something to your bag!");
            return;
        }
        onBagCreated({ message, image, video });
        setIsSubmitted(true);
    };
    
    const handleResetAndCreate = () => {
        setIsSubmitted(false);
        setMessage('');
        setImage(null);
        setVideo(null);
    }

    if (isSubmitted) {
        return (
            <div style={CreateBagStyles.container}>
                <h1 style={CreateBagStyles.title}>Thanks!</h1>
                <p style={CreateBagStyles.subtitle}>Your surprise bag is created & on its way to someone!</p>
                <div style={CreateBagStyles.buttonContainer}>
                    {/* These buttons now handle the navigation */}
                    <Button onClick={() => navigate('/open')}>Open The Bag</Button>
                    <Button onClick={handleResetAndCreate} variant="secondary">Create Another</Button>
                </div>
            </div>
        );
    }

    // default view
    return (
        <div style={CreateBagStyles.container}>
            <h1 style={CreateBagStyles.title}>What do you want to tell the next user?</h1>
            <div style={CreateBagStyles.formContainer}>
                <textarea
                    style={CreateBagStyles.textArea}
                    placeholder="Type your message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <label style={{ width: '100%' }}>
                    <span style={{...ButtonStyles.button('secondary', false), marginBottom:"3rem"}}>Upload Image</span>
                    <input type="file" accept="image/*" onChange={(e) => e.target.files[0] && setImage(URL.createObjectURL(e.target.files[0]))} style={{ display: 'none' }} />
                </label>
                {image && <p style={CreateBagStyles.fileName}>Image Added!</p>}
                 <label style={{ width: '100%' }}>
                    <span style={{...ButtonStyles.button('secondary', false)}}>Upload Video</span>
                    <input type="file" accept="video/*" onChange={(e) => e.target.files[0] && setVideo(URL.createObjectURL(e.target.files[0]))} style={{ display: 'none' }} />
                </label>
                {video && <p style={CreateBagStyles.fileName}>Video Added!</p>}
                <div style={{width: '100%', marginTop: '1rem'}}><Button onClick={handleSubmit}>Submit</Button></div>
            </div>
        </div>
    );
};