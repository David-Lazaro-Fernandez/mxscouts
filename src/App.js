import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import GroupsPage from './pages/GroupsPage'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/grupos" element={<GroupsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
