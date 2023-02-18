import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'

export default function App() {
	return (

		<BrowserRouter>
		<div className="App">
			
			<div className="content">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="login" element={<Login />} />
					<Route path="register" element={<Register />} />
				</Routes>
		</div>

		</div>
		</BrowserRouter>
	)
}

