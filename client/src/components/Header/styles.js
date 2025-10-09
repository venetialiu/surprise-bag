export const HeaderStyles = {
    header: {
        position: 'absolute',
        top: 0,
        right: 0,
        padding: '1.5rem',
        zIndex: 10,
    },
    button: (isHovered) => ({
        fontSize: '1rem',
        fontWeight: '500',
        color: isHovered ? '#111827' : '#6b7280',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        transition: 'color 0.2s ease-in-out',
    }),
};