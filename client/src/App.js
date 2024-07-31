import React from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from '../pages/Main';
import AddMaterials from '../pages/AddMaterials/';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/add-material" element={<AddMaterials />} />
      </Routes>
    </BrowserRouter>
  );
};
