import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import AllRoutes from './Routes/AllRoutes';
import { useSelector } from 'react-redux';
import { Box } from '@chakra-ui/react';
import BottomNavbar from './Components/BottomNavbar';

function App() {

  const auth = useSelector((state) => state.auth);
  console.log(auth.token, "message in app")




  return (
    <div className="App" >
      {/* <Box className='appNav'> */}
        {
          auth.token !== false && window.location.pathname !== '/' ?
            <Box className='appNav' >
              <Navbar />
            </Box>

            : ""

        }

       <Box className='appRoutes'>
         <AllRoutes />
      </Box>

      {
          auth.token !== false && window.location.pathname !== '/' ?
            
              <BottomNavbar/>
          

            : ""

        }
          
        
        
        
             
            

         

     

   




      
    </div>
  );
}

export default App;
