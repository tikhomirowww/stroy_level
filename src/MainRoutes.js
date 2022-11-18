import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LoftPage from './pages/LoftPage';
import PotolkiPage from './pages/PotolkiPage';
import Kamin from './pages/Kamin';
import ContactsPage from './pages/ContactsPage';
import DushPage from './pages/DushPage';
import About from './pages/About';
import HomePage from './pages/HomePage';

const MainRoutes = () => {
  return (
    <>
        <Navbar />
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/loft' element={<LoftPage />} />
            <Route path='/shower' element={<DushPage />} />
            <Route path='/potolki' element={<PotolkiPage />} />
            <Route path='/kaminy' element={<Kamin />} />
            <Route path='/contacts' element={<ContactsPage />} />
            <Route path='/about' element={<About />} />
        </Routes>
    </>
  )
}

export default MainRoutes