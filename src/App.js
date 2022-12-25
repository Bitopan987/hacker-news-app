import React from 'react';

import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Dashboard from './components/Dashboard';
import SpaceDetails from './components/SpaceDetails';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/:id" element={<SpaceDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
