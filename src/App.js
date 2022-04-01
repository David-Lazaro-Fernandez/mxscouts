import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import GroupsPage from './pages/GroupsPage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import AdminPage from './pages/Admin/AdminPage';
import ScoutTablePage from './pages/Admin/ScoutTablePage';
import TablesPage from './pages/Admin/TablesPage'
import ActivitiesTablePage from './pages/Admin/ActivitiesTablePage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/grupos" element={<GroupsPage />} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/SignUp" element={<SignUp/>}/>
        <Route path="/Admin" element={<AdminPage/>}/>
        <Route path="/Admin/tables/scouts22" element={<ScoutTablePage/>}/>
        <Route path="/Admin/tables/activities22" element={<ActivitiesTablePage/>}/>
        <Route path="/Admin/tables" element={<TablesPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
