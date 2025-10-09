import { HomeStyles } from '../Home/styles.js'; 

export const CreateBagStyles = {
    container: HomeStyles.container,
    title: HomeStyles.title,
    subtitle: HomeStyles.subtitle,
    buttonContainer: HomeStyles.buttonContainer,
    formContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        maxWidth: '22rem',
        gap: '2.5rem',
    },
    textArea: {
        width: '100%',
        height: '8rem',
        padding: '1rem',
        marginBottom: '1rem',
        backgroundColor: '#f3f4f6',
        border: '1px solid #e5e7eb',
        borderRadius: '0.75rem',
        fontSize: '1rem',
        resize: 'none',
        outline: 'none',
    },
    fileName: {
        fontSize: '0.875rem',
        color: '#16a34a',
        marginBottom: '0.75rem',
        alignSelf: 'flex-start',
        paddingLeft: '0.5rem',
        
    },
};