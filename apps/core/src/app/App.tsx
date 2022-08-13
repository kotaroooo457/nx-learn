import { Route, Routes } from 'react-router-dom';

import Table from '../pages/table';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Table />} />
    </Routes>
  );
}

export default App;
