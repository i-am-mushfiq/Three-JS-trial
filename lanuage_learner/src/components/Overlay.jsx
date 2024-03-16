import React from 'react';

export const Overlay = () => {
    return (
        <div style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 999,
            textAlign: 'center',
            fontFamily: 'Roboto, Arial, sans-serif',
            width: '70%',
        }}>
            <h1 style={{ color: 'white', fontSize: '20em' }}>Mushfiq</h1>
        </div>
    );
};
