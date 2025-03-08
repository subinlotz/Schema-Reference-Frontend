import { useState } from 'react'

import './App.css'
import Signup from './pages/signup/Signup'
import Login from './pages/login/Login'
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './pages/home/Home'
import { AuthProvider } from './context/AuthContext'
import CreatePost from './pages/post/CreatePost'
import Posts from './pages/post/Posts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <AuthProvider>
       <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/createpost" element={<CreatePost />} />
    </Routes>
  </BrowserRouter>
  </AuthProvider>
    </div>
  )
}

export default App
