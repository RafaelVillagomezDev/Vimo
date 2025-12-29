import React from 'react';
function LoadingScreen() {
    const containerStyle : React.CSSProperties = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'white',
        zIndex: 9999,
    };

    const spinnerStyle:React.CSSProperties = {
        width: '50px',
        height: '50px',
        border: '5px solid #f3f3f3',
        borderTop: '5px solid #000', 
        borderRadius: '50%',
        animation: 'spin 1s linear infinite',
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
            <div style={spinnerStyle}></div>
        </div>
    );
}

export default LoadingScreen;