import { BrowserRouter, Routes, Route, Navigate, } from 'react-router-dom'
import './App.css'
import { useState } from 'react'
import Home from './pages/Home/Home'
import Login from './pages/Login'
import Posts from './pages/Home/Posts/Posts.jsx'
import Comments from './pages/Home/Posts/Comments.jsx'
import Todos from './pages/Home/Todos/Todos.jsx'
import HomeLayout from './components/HomeLayout'
function App() {

  const [token, setToken] = useState('');


  return (
  <BrowserRouter>
    <Routes>
      <Route path='/'>
        <Route index element={<Navigate to='/login' replace />}/>
        <Route path='users/:id/home' element={<HomeLayout token={token}/>}>
          <Route index element={<Home/>}/>
          <Route path='posts'>
            <Route index element={<Posts token={token}/>}/>
            <Route path=':postId/comments' element={<Comments token={token}/>}/>
            </Route>
          <Route path='todos' element={<Todos token={token}/>} />
        </Route>
        <Route path='login' element={<Login setToken={setToken}/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
  )
  
}

export default App
