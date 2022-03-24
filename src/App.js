import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import GroupsPage from './pages/GroupsPage'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import AdminPage from './pages/AdminPage'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/grupos" element={<GroupsPage />} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/SignUp" element={<SignUp/>}/>
        <Route path="/Admin" element={<AdminPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
