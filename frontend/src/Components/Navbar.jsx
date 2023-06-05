import React, { useState } from 'react'
import "./Navbar.css"
import { Box } from '@chakra-ui/react'
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



const Navbar = () => {
  const [activePage, setActivePage] = useState('dashboard');
  const dispatch = useDispatch();

  const handlePageChange = (page) => {
    setActivePage(page);
  };

  const handleLogout = () => {
    dispatch({ type: AUTH_USER_LOGOUT });
    
  };


  return (
    <div className="sidebar">
      <Box>
        <Box className='navDiv1'>
          <Box className='navDivCont'  >

            <Box textAlign={"center"}    mt="40px">
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

            <Box textAlign={"center"}  mt="37px">
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

            <Box>
              <Box h="1px" border="1px solid gray" mt="40px" bg="gray" w="55%" ml="20px">

              </Box>
            </Box>


            <Box textAlign={"center"}  mt="40px">
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












          </Box>

        </Box>
        <Box className='navDiv2'>

          <Box className="Navlogout"  h="100px">


          </Box>
          <Box className="Navlogout" >
            <button  onClick={handleLogout}>
              <FiLogOut className='NavlogoutBtn' />
            </button>


          </Box>

        </Box>

      </Box>




    </div>
  )
}

export default Navbar