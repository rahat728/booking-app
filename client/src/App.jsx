import React from 'react'
import './App.css'
import {Route, Routes} from "react-router-dom";
import IndexPage from "./pages/IndexPage.jsx";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Layout from "./Layout";
import ProfilePage from "./pages/ProfilePage";
import PlacesPage from "./pages/PlacesPage";
import PlacePage from "./pages/PlacePage";
import {UserContextProvider} from "./UserContext";

const App = () => {
  return (
    <UserContextProvider>
    <Routes>
      <Route path="/" element={<Layout />}>
         <Route path="/login" element={<LoginPage />} />
         <Route index element={<IndexPage />} />
         <Route path="/register" element={<RegisterPage />} />
         <Route path="/account" element={<ProfilePage />} />
         <Route path="/account/places" element={<PlacesPage />} />
         <Route path="/account/places" element={<PlacePage />} />
      </Route>

    </Routes>
  </UserContextProvider>
  )
}

export default App
