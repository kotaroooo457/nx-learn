import { Route, Routes } from 'react-router-dom';

import { Shops } from '../pages/Shops';

export function App() {
  return (
    <div className="mt-20 px-20">
      <Routes>
        <Route path="/" element={<Shops />} />
      </Routes>
    </div>
  );
}

export default App;
