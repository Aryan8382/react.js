import React, { useState } from 'react';

function ToggleText() {
    const [isVisible, setIsVisible] = useState(true);
    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };
    return (
        <div>
            <h2>Toggle Text Visibility</h2>
            <button onClick={toggleVisibility}>
                Text
            </button>
            {isVisible && <p>Lorem ipsum dolor sit.</p>}
        </div>
    );
}
export default ToggleText;
