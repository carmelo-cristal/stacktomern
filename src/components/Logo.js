import React from 'react';

const Logo = () => {
    return (
        <div className='logo'>
            {/* les images importer depuis la balise IMG sont acessible dans public */}
            <img src='./logo192.png' alt='logo react' title='logo' />
            <h3>React word</h3>

        </div>
    );
};

export default Logo;