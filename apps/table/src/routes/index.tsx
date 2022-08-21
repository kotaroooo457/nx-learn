import { Basic } from '@Table/demo/basic';
import { Visibility } from '@Table/demo/Visibility';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

const TableRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/basic" element={<Basic />} />
      <Route path="/visibility" element={<Visibility />} />
    </Routes>
  );
};

export default TableRouter;
