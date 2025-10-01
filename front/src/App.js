import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import VehicleList from "./components/VehicleList";
import VehicleForm from "./components/VehicleForm";
import Login from "./components/login"; // capital L
import PrivateRoute from "./components/PrivateRoute";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        {/* Login page */}
        <Route path="/login" element={<Login />} />

        {/* Protected routes */}
        <Route
          path="/vehicles"
          element={
            <PrivateRoute>
              <VehicleList />
            </PrivateRoute>
          }
        />
        <Route
          path="/vehicles/new"
          element={
            <PrivateRoute>
              <VehicleForm />
            </PrivateRoute>
          }
        />
        <Route
          path="/vehicles/edit/:id"
          element={
            <PrivateRoute>
              <VehicleForm />
            </PrivateRoute>
          }
        />

      {/* Root path */}
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
