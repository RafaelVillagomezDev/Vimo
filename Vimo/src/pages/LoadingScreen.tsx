import React from 'react';

interface LoadingScreenProps {
    isOverlay?: boolean; 
}

function LoadingScreen({ isOverlay = false }: LoadingScreenProps) {
    const containerStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: isOverlay ? 'absolute' : 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: isOverlay ? 'rgba(255, 255, 255, 0.7)' : 'white',
        zIndex: 9999,
        transition: 'all 0.3s ease',
        backdropFilter: isOverlay ? 'blur(4px)' : 'none',
    };

    const spinnerStyle: React.CSSProperties = {
        width: '40px',
        height: '40px',
        border: '4px solid rgba(0,0,0,0.1)',
        borderTop: '4px solid #000',
        borderRadius: '50%',
    };

    const textStyle: React.CSSProperties = {
        marginTop: '15px',
        fontFamily: 'sans-serif',
        fontSize: '14px',
        color: '#333',
        fontWeight: '500'
    };

    return (
        <div style={containerStyle}>
            <style>
                {`
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
                `}
            </style>
            <div style={{ ...spinnerStyle, animation: 'spin 0.8s linear infinite' }}></div>
            {isOverlay && <span style={textStyle}>Buscando restaurantes...</span>}
        </div>
    );
}

export default LoadingScreen;