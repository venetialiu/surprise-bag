import { HomeStyles } from '../Home/styles.js'; 
import { SharedStyles } from '../../SharedStyles.js';

const generateGradient = () => {
    const colors = [['#ff9a9e', '#fad0c4'], ['#a18cd1', '#fbc2eb'], ['#84fab0', '#8fd3f4']];
    const randomColors = colors[Math.floor(Math.random() * colors.length)];
    return `linear-gradient(45deg, ${randomColors[0]}, ${randomColors[1]})`;
};

export const OpenBagStyles = {
    container: HomeStyles.container,
    title: SharedStyles.title,
    gradientBag: (isHovered) => ({
        width: '14rem',
        height: '14rem',
        borderRadius: '1.25rem',
        cursor: 'pointer',
        background: generateGradient(),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
    }),
    contentContainer: {
        backgroundColor: '#f9fafb',
        padding: '1.5rem',
        borderRadius: '1rem',
        width: '100%',
        maxWidth: '24rem',
        textAlign: 'left',
    },
    messageBox: {
        backgroundColor: 'white',
        padding: '1rem',
        borderRadius: '0.5rem',
        boxShadow: 'inset 0 2px 4px 0 rgba(0,0,0,0.05)',
        marginBottom: '1rem',
        wordWrap: 'break-word',
    },
    mediaGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
        gap: '1rem',
    },
    mediaWrapper: {
        backgroundColor: 'white',
        padding: '0.5rem',
        borderRadius: '0.5rem',
        boxShadow: 'inset 0 2px 4px 0 rgba(0,0,0,0.05)',
    },
};
