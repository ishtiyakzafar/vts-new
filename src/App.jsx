import React from 'react';
import './App.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import { BrowserRouter, Route, Routes, Link, Outlet, Navigate } from "react-router-dom";
import Login from './Pages/Login/Login';

const isLoggedIn = 1;

const App = () => {


	return (
		<BrowserRouter>
			<Routes>
				{/* Public Routes */}
				<Route path="/login" element={isLoggedIn ? <Navigate to="/" /> : <Login />} />

				{/* Protected Route */}
				<Route path="/" element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App;