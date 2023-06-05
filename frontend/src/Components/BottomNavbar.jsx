import React, { useState } from 'react';
import './BottomNavbar.css';
import Dashboardactive from "../Images/Dashboard-active.svg"
import Dashboard from "../Images/Dashboard.svg"
import Projectlistactive from "../Images/Project-list-active.svg"
import Projectlist from "../Images/Project-list.svg"
import createprojectactive from "../Images/create-project-active.svg"
import createproject from "../Images/create-project.svg"

import { Link, Navigate } from 'react-router-dom'
import { FiLogOut } from 'react-icons/fi'
import { AUTH_USER_LOGOUT } from '../Redux/Auth/Auth.actionType'
import { useDispatch } from 'react-redux'
import { Box } from '@chakra-ui/react';

const BottomNavbar = () => {
  const [activePage, setActivePage] = useState('dashboard');
  const dispatch = useDispatch();

  const handlePageChange = (page) => {
    setActivePage(page);
  };

  const handleLogout = () => {
    dispatch({ type: AUTH_USER_LOGOUT });
    
  };





  return (
    <div className="bottom-navbar">
      <Box textAlign={"center"}   >
              <Link to="/dashboard">
                <button

                  onClick={() => handlePageChange('dashboard')}

                >
                  {activePage === 'dashboard' ? (
                    <img style={{ width: "35px", height: "35px" }} src={Dashboardactive} alt="Dashboard Icon" />
                  ) : (
                    <img style={{ width: "35px", height: "35px" }} src={Dashboard} alt="Dashboard Icon" />
                  )}
                </button>

              </Link>

            </Box>

            <Box textAlign={"center"} >
              <Link to="/allproject">
                <button
                  onClick={() => handlePageChange('filter')}

                >
                  {activePage === 'filter' ? (
                    <img style={{ width: "35px", height: "30px" }} src={Projectlistactive} alt="Filter Icon" />
                  ) : (
                    <img style={{ width: "35px", height: "30px" }} src={Projectlist} alt="Filter Icon" />
                  )}
                </button>

              </Link>

            </Box>
            <Box textAlign={"center"}  >
              <Link to="/postproject">
                <button
                  onClick={() => handlePageChange('add')}

                >
                  {activePage === 'add' ? (
                    <img style={{ width: "35px", height: "35px" }} src={createprojectactive} alt="Add Icon" />
                  ) : (
                    <img style={{ width: "35px", height: "35px" }} src={createproject} alt="Add Icon" />
                  )}
                </button>
              </Link>

            </Box>
    </div>
  );
};

export default BottomNavbar;