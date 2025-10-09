export const ButtonStyles = {
    button: (variant, isHovered) => {
        const base = {
            width: '100%',
            fontWeight: '600',
            padding: '0.85rem 1.5rem',
            marginBottom: '0.1rem',
            borderRadius: '9999px',
            border: 'none',
            cursor: 'pointer',
            transition: 'background-color 0.2s ease-in-out, transform 0.1s ease',
            transform: isHovered ? 'scale(1.02)' : 'scale(1)',
        };
        const variants = {
            primary: {
                backgroundColor: isHovered ? '#374151' : '#111827',
                color: 'white',
            },
            secondary: {
                backgroundColor: isHovered ? '#d1d5db' : '#e5e7eb',
                color: '#1f2937',
            },
        };
        return { ...base, ...variants[variant] };
    }
};