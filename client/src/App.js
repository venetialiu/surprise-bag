import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AppStyles } from './styles';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { CreateBag } from './components/CreateBag/CreateBag';
import { OpenBag } from './components/OpenBag/OpenBag';
import { About } from './components/About/About';

function App() {
    const [showAbout, setShowAbout] = useState(false);
    const [bagContent, setBagContent] = useState(null);

    return (
      <BrowserRouter>
        <div style={AppStyles.app}>
            {/* Header is outside of <Routes> so it appears on every page */}
            <Header onAboutClick={() => setShowAbout(true)} />

            <main style={AppStyles.main}>
                {/* <Routes> is where you define which component shows for which URL */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/create" element={<CreateBag onBagCreated={setBagContent} />} />
                    <Route path="/open" element={<OpenBag bagContent={bagContent} />} />
                </Routes>
            </main>
            
            {showAbout && <About onClose={() => setShowAbout(false)} />}
        </div>
      </BrowserRouter>
    );
}

export default App;
