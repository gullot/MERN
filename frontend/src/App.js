import './App.css';

import React, {useState} from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import products from './data/products.js';

import Navi from './components/Navi.js';
import HomePage from './pages/HomePage.js';
import TopicsPage from './pages/TopicsPage.js';
import GalleryPage from './pages/GalleryPage.js';
import StaffPage from './pages/StaffPage.js';
import OrderPage from './pages/OrderPage.js';
import LogPage from './pages/LogPage.js';
import CreatePage from './pages/CreatePage.js';
import EditPage from './pages/EditPage.js';

import './App.css'

function App() {
  const [hike, setHike] = useState([])
  return (
    <>
      <BrowserRouter>

      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>Thomas Gullo's Super MERN Site</h1>
      </header>

      <Navi />

      <main>
        <section>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/topics" element = {<TopicsPage/>}/>
            <Route path="/hikelog" element={<LogPage setHike={setHike} />} />
            <Route path="/add-hike" element={<CreatePage />} />
            <Route path="/edit-hike" element={<EditPage hike={hike} />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/order" element={<OrderPage products={products} />} />
            <Route path="/staff" element={<StaffPage />} />
          </Routes>

        </section>
      </main>

      <footer>
        <p>This site is &copy; 2023 by Thomas Gullo</p>
      </footer> 
    
      </BrowserRouter>
    </>
  );
}

export default App;
