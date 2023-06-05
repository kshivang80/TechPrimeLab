import { Box, Button, FormControl, FormLabel, Image, Input, InputGroup, InputLeftElement, Select, SimpleGrid, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import "./Allproject.css"
import axios from "axios"
import loginbg1 from "../Images/login-bg-1.svg"
import logout from "../Images/Logout.svg"

import logo from "../Images/Logo.svg"
import { IoChevronBackSharp } from 'react-icons/io5';
import { FiLogOut } from 'react-icons/fi';
import Navbar from '../Components/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { clearfilter_FN, filterdata_FN, getProjects, postProjects } from '../Redux/Project/project.action'
import { AUTH_USER_LOGOUT } from '../Redux/Auth/Auth.actionType'
import DataTable from "react-data-table-component"
import { PhoneIcon, AddIcon, WarningIcon, SearchIcon, Search2Icon } from '@chakra-ui/icons'
import { Newtable } from '../Components/Newtable'


const Allproject = () => {
 
  const dispatch = useDispatch()
  

  const handleLogout = () => {
    dispatch({ type: AUTH_USER_LOGOUT });

  };

 
 




  return (
    <div>
      <Box >

        <Box className='allProjectMindiv' >
          <div className='bgBlue1'
            style={{ backgroundImage: `url(${loginbg1})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}
          >
            <Box  >

              <div className='trangle1'>

                <Box className='text420'>
                  <Box className='iconeDiv'>
                    <IoChevronBackSharp className='icone' />
                  </Box>
                  <Box className='textDiv99'>
                    <Text className='create'>Project Listning</Text>
                  </Box>



                </Box>
                <div className='image1'>
                  <Image m="auto" src={logo} h="80%" w="80%" />

                </div>
                <Box className='blank'  >

                  {/* <Image className='logoutBtn' src={logout} /> */}
                  <FiLogOut onClick={handleLogout} className='logoutBtn' />

                </Box>


              </div>

            </Box>
          </div>


          <Box className='mainTableDiv'  >
 
            <Box w="100%"  mt="25px">

                <Newtable/>


            </Box>


          </Box>


        </Box>
      </Box>
    </div>
  )
}

export default Allproject