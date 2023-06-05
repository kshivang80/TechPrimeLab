import { Box, Button, FormControl, FormErrorMessage, FormHelperText, FormLabel, Image, Input, Select, SimpleGrid, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import "./PostProject.css"
import loginbg1 from "../Images/login-bg-1.svg"
import logout from "../Images/Logout.svg"

import logo from "../Images/Logo.svg"
import { IoChevronBackSharp } from 'react-icons/io5';
import { FiLogOut } from 'react-icons/fi';
import Navbar from '../Components/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { postProjects } from '../Redux/Project/project.action'
import { AUTH_USER_LOGOUT } from '../Redux/Auth/Auth.actionType'


const initState = {
  projectname: "",
  reason: "",
  category: "",
  type: "",
  priority: "",
  division: "",
  department: "",
  location: "",
  startdate: "",
  enddate: "",
  status: "Registered",
}


const PostProject = () => {
  const [formData, setFormData] = useState(initState);
  const isLoading=useSelector((store)=>store.isLoading)
  const dispatch=useDispatch()


  const isErrorProject = formData.projectname === ""

  const handleLogout = () => {
    dispatch({ type: AUTH_USER_LOGOUT });
    
  };
 

 


  const handleChange = (event) => {
    const { name, value } = event.target;
   

    if (name === "startdate") {
      setFormData({ ...formData, startdate: value });
    } else if (name === "enddate") {
      if (formData.startdate && formData.startdate > value) {
        setFormData({ ...formData, startdate: value, enddate: value });
      } else {
        setFormData({ ...formData, enddate: value });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    
    dispatch(postProjects(formData))

  };

  console.log(formData)



  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentDate = `${year}-${month.toString().padStart(2, "0")}-${day
    .toString()
    .padStart(2, "0")}`



  return (
    <div>
      <Box className='mainDiv'>

        {/* <Box className='NavbarDiv'>
          <Navbar />
        </Box> */}

        <Box className='projectMainDiv'>

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
                  <Text className='create'>Create Project</Text>
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

          <Box mt="-30px">
            <Box className='mainFormDiv' >
              <form onSubmit={handleSubmit}>
                <Box className='project'>
                  <Box className='project1'>
                    <Box className='projectInput'>
                    <FormControl id="projectname" isInvalid={isErrorProject}>
                      <input className='inputProject' placeholder='Enter Project Theme' 
                        id="projectname"
                        name="projectname"
                        value={formData.projectname}
                        onChange={handleChange}
                       
                      />
                       {isErrorProject ? (
                        <FormErrorMessage>Project Name is required.</FormErrorMessage>

                    ) : (
                      <FormHelperText>
                      Project Name 
                    </FormHelperText>
                    )}
                       </FormControl>
                    </Box>
                    <Box className='projectButton'>
                      <button className='buttonSubmit' type="submit">Save Project</button>
                    </Box>


                  </Box>
                </Box>
                <Box className='formData'>
                  <SimpleGrid columns={{ base: 1, sm: 1, md: 2, lg: 3 }} spacing={[5,5,8]}>

                    <FormControl id="Reason" >
                      <FormLabel color="gray"  >Reason </FormLabel>
                      <Select border="1.8px solid gray" size="lg" placeholder='Select Reason' name="reason" value={formData.reason} onChange={handleChange} >
                        <option value='Filters'>For Business</option>
                        <option value='For Movie'>Fitting</option>
                        <option value='For Laptop'>For Laptop</option>
                      </Select>

                    </FormControl>

                    {/* ///*************** */}

                    <FormControl id="type" >
                      <FormLabel color="gray" >Type </FormLabel>
                      <Select border="1.8px solid gray" size="lg" placeholder='Select Type' name="type" value={formData.type} onChange={handleChange} >
                        <option value='Internal'>Internal</option>
                        <option value='External'>External</option>

                      </Select>

                    </FormControl>

                    {/* ///*************** */}

                    <FormControl id="division" >
                      <FormLabel color="gray"  >Division </FormLabel>
                      <Select border="1.8px solid gray" size="lg" placeholder='Select Division' name="division" value={formData.division} onChange={handleChange}>
                        <option value='For Business'>Filters</option>
                        <option value='Fitting'>Fitting</option>
                        <option value='Non-Tech'>Non-Tech</option>
                      </Select>

                    </FormControl>

                    {/* ///*************** */}

                    <FormControl id="category" >
                      <FormLabel color="gray"  >Category </FormLabel>
                      <Select border="1.8px solid gray" size="lg" placeholder='Select Category' name="category" value={formData.category} onChange={handleChange} >
                        <option value='Quality A'>Quality A</option>
                        <option value='Quality B'>Quality B</option>
                        <option value='Quality C'>Quality C</option>
                      </Select>

                    </FormControl>

                    {/* ///*************** */}

                    <FormControl id="priority" >
                      <FormLabel color="gray"  >Priority </FormLabel>
                      <Select border="1.8px solid gray" size="lg" placeholder='Select Priority' name="priority" value={formData.priority} onChange={handleChange}>
                        <option value='High'>High</option>
                        <option value='Medium'>Medium</option>
                        <option value='Low'>Low</option>
                      </Select>

                    </FormControl>

                    {/* ///*************** */}

                    <FormControl id="department" >
                      <FormLabel color="gray" >Department </FormLabel>
                      <Select border="1.8px solid gray" size="lg" placeholder='Select Department' name="department" value={formData.department} onChange={handleChange}  >
                        <option value='Strategy'>Strategy</option>
                        <option value='Non-Strategy'>Non-Strategy</option>
                        <option value='Discuss'>Discuss</option>
                      </Select>

                    </FormControl>

                    {/* ///*************** */}

                    <FormControl id="startdate" >
                      <FormLabel color="gray" >Start Date as per Project </FormLabel>
                      <Input border="1.8px solid gray" size="lg" placeholder='Select option'
                        name="startdate"
                        value={formData.startdate}
                        onChange={handleChange}
                        type="date"
                        min={currentDate}
                      />



                    </FormControl>

                    {/* ///*************** */}
                    <FormControl id="enddate" >
                      <FormLabel color="gray" >End Date as per Project</FormLabel>
                      <Input border="1.8px solid gray" size="lg" placeholder='Select option'
                        name="enddate"
                        value={formData.enddate}
                        onChange={handleChange}
                        type="date"
                        min={currentDate}
                      />



                    </FormControl>

                    {/* ///*************** */}

                    <FormControl id="location" >
                      <FormLabel color="gray" >Location </FormLabel>
                      <Select border="1.8px solid gray" size="lg" placeholder='Select Location' name="location" value={formData.location} onChange={handleChange}  >
                        <option value='Delhi'>Delhi</option>
                        <option value='Bihar'>Bihar</option>
                        <option value='Mumbai'>Mumbai</option>
                      </Select>

                    </FormControl>

                    {/* ///*************** */}

                    <div className='hide1'>

                    </div>
                    <div className='hide1'>

                    </div>
                    <Box display={"flex"}>
                      <span className='small' >
                        Status
                      </span>
                      <span>
                        :
                      </span>
                      <span className='big'>
                        Registered
                      </span>

                    </Box>

                    <Box className='projectButtonSmall'>
                      <button className='buttonSubmitSmall' type="submit">Save Project</button>
                    </Box>


                  </SimpleGrid>

                </Box>

                {/* <Box className='statusDiv'>
                  <Box>
                    <Text>

                    </Text>
                  </Box>

                </Box> */}



              </form>

            </Box>


          </Box>

          <Box mt="40px" h="100px">

          </Box>

        </Box>





      </Box>

    </div>
  )
}

export default PostProject