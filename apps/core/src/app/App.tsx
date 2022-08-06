import './App.css';
import Table from '@Study/core/pages/table';
import NxWelcome from './nx-welcome';

import { Route, Routes } from 'react-router-dom';

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
