//React Imports
import React, { useState } from "react";
//Third Party Libraries
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Local Components
import HomePage from "./pages/HomePage";
import GroupsPage from "./pages/GroupsPage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import AdminPage from "./pages/Admin/AdminPage";
import ScoutTablePage from "./pages/Admin/ScoutTablePage";
import TablesPage from "./pages/Admin/TablesPage";
import ActivitiesTablePage from "./pages/Admin/ActivitiesTablePage";
import ScoutsWithoutMedicalInsurancePage from "./pages/Admin/ScoutsWithoutMedicalInsurancePage";
import Scouts21TablePage from "./pages/Admin/Scouts21TablePage";
import Scouts20TablePage from "./pages/Admin/Scouts20TablePage";
import Scouts19TablePage from "./pages/Admin/Scouts19TablePage";
import Scouts18TablePage from "./pages/Admin/Scouts19TablePage";
import EditarDatos from "./pages/Admin/EditarDatos";
import ScoutCredential from "./pages/Admin/ScoutCredential";
import ScoutsWithoutMITable from "./pages/Admin/ScoutsWithoutMITable";
//Context
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/grupos" element={<GroupsPage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route
            path="/Admin"
            element={<AdminPage pageName="Dashboard Principal" />}
          />
          <Route
            path="/Admin/tables/scouts22"
            element={<ScoutTablePage pageName="Scouts 2022" />}
          />
          <Route
            path="/Admin/tables/scouts21"
            element={<Scouts21TablePage pageName="Scouts 2021" />}
          />
          <Route
            path="/Admin/tables/scouts20"
            element={<Scouts20TablePage pageName="Scouts 2020" />}
          />
          <Route
            path="/Admin/tables/scouts19"
            element={<Scouts19TablePage pageName="Scouts 2019" />}
          />
          <Route
            path="/Admin/tables/scouts18"
            element={<Scouts18TablePage pageName="Scouts 2018" />}
          />
          <Route
            path="/Admin/tables/activities22"
            element={<ActivitiesTablePage pageName="Actividades de 2022" />}
          />
          <Route
            path="/admin/tables/scouts-no-insurance"
            element={
              <ScoutsWithoutMITable pageName="Scouts sin seguro medico" />
            }
          />
          <Route path="/Admin/tables" element={<TablesPage />} />
          <Route
            path="/Admin/editar-datos"
            element={<EditarDatos pageName="Editar Mis Datos" />}
          />
          <Route
            path="/admin/no-insurance"
            element={
              <ScoutsWithoutMedicalInsurancePage pageName="Scouts sin seguro medico" />
            }
          />

          <Route
            path="/admin/my-credential"
            element={<ScoutCredential pageName="Mi credencial" />}
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
