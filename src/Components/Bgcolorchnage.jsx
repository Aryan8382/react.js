import React, { useState } from 'react';
export default function Bgcolorchnage() {
    const [bgcolor, setBgcolor] = useState('#ffffff');
    const cchange = (event) => {
        setBgcolor(event.target.value);
    };
    return (
        <div>
            <h2>Background Color Changer</h2>
            <input type="color"  />
        </div>
    );
}

