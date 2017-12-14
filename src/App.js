import React from 'react';
import Router from './Router';

const App = () => (
    <div>
        <header />
        <main>
            <div className="container">
                {Router}
            </div>
        </main>
    </div>
);

export default App;
