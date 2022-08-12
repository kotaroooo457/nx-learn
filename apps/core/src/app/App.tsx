import './App.css';
import { Route, Routes } from 'react-router-dom';

import Table from '../pages/table';

export function App() {
  return (
    <>
      <div className="bg-red-200">hogehoge</div>
      <Routes>
        <Route path="/table" element={<Table />} />
      </Routes>
    </>
  );
}

export default App;
