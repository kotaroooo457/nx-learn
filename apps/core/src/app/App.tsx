import './App.css';
import NxWelcome from './nx-welcome';

import { Route, Routes} from 'react-router-dom';
import Table from '../pages/table';

export function App() {
  return (
      <Routes>
        <Route
          path="/table"
          element={<Table />}
        />
        <Route
          path="/welcome"
          element={<NxWelcome title="core" />}
        />
      </Routes>
  );
}

export default App;
