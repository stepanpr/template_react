import React, { useState, useEffect } from 'react';

const Spinner = () => {
    return (
        <div
            style={{
                width: '100%',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <h3>Loading ...</h3>
        </div>
    );
};
export default Spinner;
