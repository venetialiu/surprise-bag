export const AboutStyles = {
    overlay: {
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 50,
    },
    modal: {
        background: 'white',
        padding: '2rem',
        borderRadius: '1rem',
        maxWidth: '24rem',
        width: '100%',
        margin: '1rem',
        textAlign: 'center',
        boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)',
    },
    title: {
        fontWeight: 'bold',
        fontSize: '2rem',
        marginBottom: '1rem',
    },
    text: {
        marginBottom: '1.5rem',
        color: '#4b5563',
        lineHeight: '1.6',
    }
}