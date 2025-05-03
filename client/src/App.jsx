import React from 'react'
import './App.css'
import {Route, Routes} from "react-router-dom";
import IndexPage from "./pages/IndexPage.jsx";
import LoginPage from "./pages/LoginPage";
import Layout from "./Layout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
         <Route path="/login" element={<LoginPage />} />
         <Route index element={<IndexPage />} />
      </Route>

  </Routes>
  )
}

export default App
