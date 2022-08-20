import { Basic } from '@Table/demo/basic';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

const TableRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/basic" element={<Basic />} />
    </Routes>
  );
};

export default TableRouter;
