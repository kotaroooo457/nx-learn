import './App.css';
import { Route, Routes } from 'react-router-dom';

import Table from '../pages/table';

import NxWelcome from './nx-welcome';
export function App() {
  return (
    <>
      <div className="bg-red-200">hogehoge</div>
      <Routes>
        <Route path="/table" element={<Table />} />
        <Route path="/welcome" element={<NxWelcome title="core" />} />
      </Routes>
    </>
  );
}

export default App;
