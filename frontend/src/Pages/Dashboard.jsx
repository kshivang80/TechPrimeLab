import React, { useEffect, useState } from 'react'

import { Box, Image, Text, background } from '@chakra-ui/react'

import Navbar from '../Components/Navbar'
import loginbg1 from "../Images/login-bg-1.svg"
import logout from "../Images/Logout.svg"
import "./Dashboard.css"
import logo from "../Images/Logo.svg"
import { FiLogOut } from 'react-icons/fi'
import { IoChevronBackSharp } from 'react-icons/io5'
import { settings, settings4 } from './ResponsiveCard'
//import { Discover, OfferSlider4Link } from './dummyData'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom'
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  scales
} from "chart.js"
import { Bar } from "react-chartjs-2"
import Barchart from './Barchart'
import { AUTH_USER_LOGOUT } from '../Redux/Auth/Auth.actionType'
import { useDispatch } from 'react-redux'
import axios from 'axios'

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
)

const Dashboard = () => {
  const dispatch = useDispatch();
  const [close, setClose] = useState("");
  const [startData, setstartData] = useState("");
  const [totalData, settotalData] = useState("");
  const [cancelData, setcancelData] = useState("");


  const handleLogout = () => {
    dispatch({ type: AUTH_USER_LOGOUT });
    
  };

  useEffect(()=>{
    fetchclosed()
    fetchrunning()
    fetchcancel()
    fetchall()

  },[])



  const fetchclosed=async()=>{
    const res= await axios.get("https://jade-dove-kilt.cyclic.app/closedproject")
    setClose(res.data)
  }
  const fetchrunning=async()=>{
    const res= await axios.get("https://jade-dove-kilt.cyclic.app/projectrunning")
    setstartData(res.data)
    console.log(res.data,"kay chayei")
  }

  const fetchcancel=async()=>{
    const res= await axios.get("https://jade-dove-kilt.cyclic.app/projectcanceled")
    setcancelData(res.data)
  }
  const fetchall=async()=>{
    const res= await axios.get("https://jade-dove-kilt.cyclic.app/projecttotal")
    settotalData(res.data)
  }

  
 


   const OfferSlider4Link = [
    {
      id: 1,
  
      number: totalData,
  
      name: "Total Projects",
    },
    {
      id: 2,
  
      number:close,
      name: "Closed",
    },
    {
      id: 3,
  
      number: startData,
      name: "Running",
    },
    {
      id: 4,
  
      number: cancelData,
      name: "Closure Delay",
    },
    {
      id: 5,
  
      number: cancelData,
      name: "Cancelled",
    }
  ]  
  



  const data = {
    labels: ["91% STR", "97% FIN", "92% QLT", "100% MAN", "100% STO", "91% HR"],
    datasets: [
      {
        label: "Total",
        data: [19, 7, 9, 15, 5, 10],
        backgroundColor: "blue",

        // barThickness: 20,
        // borderRadius: 10, // Set the border radius for the bars
        // barThickness: 16,
        //categoryPercentage: 0.5,


      },
      {
        label: "Close",
        data: [14, 6, 8, 15, 5, 9],
        backgroundColor: "green",

        //barThickness: 20,
        // borderRadius: 10, // Set the border radius for the bars
        //barThickness: 16,


      }
    ]
  }

  const options = {
    scales: {
      x: {
        categoryPercentage: 0.8, // Adjust the width of the category bars
      },
      y: {
        barPercentage: 0.5, // Adjust the width of the bar within each category
      },
    },
  };



  return (
    <div>
      <Box  h="900px">

        <Box w="100%" className='mainDashboard'>

          <div className='bgBlue1dash'
            style={{ backgroundImage: `url(${loginbg1})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}
          >


            <div className='trangle1dash'>

              <Box className='text420dash'>

                <Box className='textDiv99dash'  ml="30px">
                  <Text className='createdash'>Dashboard</Text>
                </Box>



              </Box>
              <div className='image1dash'>
                <Image m="auto" src={logo} h="80%" w="80%" />

              </div>
              <Box className='blankdash' >


                <FiLogOut onClick={handleLogout} className='logoutBtndash' />

              </Box>


            </div>




          </div>
          <Box className='mainCrousal' >
            <div className="justOffer-card">
              <Slider {...settings4}>
                {OfferSlider4Link.map((item) => (
                  <div className="">
                    <div className="justOffer-cardtop" style={{ display: "flex" }}>
                      <div className="justOffer-cardtop1">

                      </div>
                      <div className="justOffer-cardbottom">
                        <Text className='nameDiv' >{item.name}</Text>
                        <Text className='numberDiv'>{item.number}</Text>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </Box>

          {/* // Graph section  .//// */}

          <Box className='graphTextDiv'>
               <Text className='garphText'>Department wise - Total Vs Closed</Text>
          </Box>

          <Box className='bigGarph'>
            <Box className='graphDiv'>

              <Bar
                
                className='barChart'
                data={data}
                options={options}
              >


              </Bar>
              

            </Box>
            <Box className='smallBar'>
              <Barchart/>
            </Box>

          </Box>



        </Box>
      </Box>
    </div>
  )
}

export default Dashboard