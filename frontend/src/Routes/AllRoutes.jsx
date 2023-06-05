import React from 'react'
import { Routes, Route } from "react-router-dom";
import Login from '../Pages/Login';
import Dashboard from '../Pages/Dashboard';
import PostProject from '../Pages/PostProject';
import PrivateRoute from '../Pages/PrivateRoute';
import Allproject from '../Pages/Allproject';
import { Newtable } from '../Components/Newtable';

const AllRoutes = () => {

    return (

        <div>
            <Routes>

                <Route path="/" element={<Login />}></Route>

                <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>}></Route>
                <Route path="/postproject" element={<PrivateRoute> <PostProject /></PrivateRoute>}></Route>
                <Route path="/allproject" element={<PrivateRoute> <Allproject /></PrivateRoute>}></Route>
               
            </Routes>
        </div>
    )
}

export default AllRoutes