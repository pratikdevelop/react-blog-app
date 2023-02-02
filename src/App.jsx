import React from "react";
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Signup from "./component/signup/signup";
import Signin from "./component/signin/signin";
import Home from './component/Home'
import Post from "./component/Post";
import ViewBlog from "./component/ViewBlog";
const App = () => {
    const token = localStorage.getItem('token')
    return (
        <>
        <div className="main-div">
                <Routes>
                    <Route path="/signup" element={(!token) ? < Signup /> : < Navigate to='/' > </Navigate>} ></Route>
                    <Route path="/signin"element={(!token) ? < Signin /> : < Navigate to='/' > </Navigate>} ></Route>
                    <Route path="/"element={(!token) ? < Navigate to='/signin' /> : < Home />}></Route> 
                    <Route path="/my-posts"element={(!token) ? < Navigate to='/signin' /> : <Post/>}></Route> 
                    <Route path="/blog/:blogId" element={(!token) ? < Navigate to='/signin' /> : < ViewBlog />}></Route> 
                    <Route path="/edit-post/:blogId" element={(!token) ? < Navigate to='/signin' /> : < Post />}></Route> 
                    {/* <Route path="/profile/:id" element={(!token) ? < Navigate to='/signin' /> : < Profile />}></Route> 
                    <Route path="/reset-password"element={< ResetPassword />} > </Route>
                    <Route path="/verify-otp"element={< ResetPassword />} > </Route>
                    <Route path="/change-password/:id"element={< ChangePassword />}></Route> */}
                </Routes>
            </div>
        </>
    )
}
export default App;