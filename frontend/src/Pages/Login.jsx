
import "./Login.css"
import loginbg1 from "../Images/login-bg-1.svg"
import logo from "../Images/Logo.svg"
import { useToast, Flex, Box, FormControl, FormLabel, Input, Checkbox, Stack, Link, Button, Heading, Text, useColorModeValue, Image, InputGroup, InputRightElement, FormHelperText, FormErrorMessage } from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authlogin } from "../Redux/Auth/Auth.action";


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [invalidUser, setInvalidUser] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toast = useToast()


  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  //let message;

  // Showing error messaage when input filed is empty
  const isErrorEmail = formData.email === ""
  const isErrorPassword = formData.password === ""



  const auth = useSelector((state) => state.auth);
  console.log(auth, "message")

  useEffect(() => {
    if (auth.message === "Valid User") {
      toast({
        title: 'Login Successful',
        position: 'top',
        status: 'success',
        isClosable: true,
      })
     
        navigate("/dashboard");
      
     

    } else if (auth.message === "Invalid User") {
      toast({
        title: 'Invalid User',
        position: 'top',
        isClosable: true,
        status: "error"

      })
      setInvalidUser(true)

    } else {
      setInvalidUser(false);
    }

  }, [auth.message])


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(authlogin(formData));
  };





  return (
    <div  >
      <div className='bgBlue'
        style={{ backgroundImage: `url(${loginbg1})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}
      >
        <Box className='triaDiv' border="0.1px solid blue" h="250px" borderBottom="none" borderLeft={"none"} borderRight={"none"} >
          <div className='trangle'>
            <div className='image'>
              <Image m="auto" src={logo} h="80%" w="80%" />

            </div>
            <Box className='text' >
              <Text className='text1' >Online Project Management</Text>
            </Box>

          </div>

        </Box>

        <Box h="550px" >
          <Box className='form'>

            <form onSubmit={handleSubmit}>
              {/* <Box className='loginTExt' >
                <Text className='loginTExt1' >Login to get start</Text>
              </Box> */}
              <Box
                //border="1px solid red"

                boxShadow=" rgba(0, 0, 0, 0.24) 0px 3px 8px"
                rounded={'lg'}
                bg={useColorModeValue('white', 'gray.700')}
                borderRadius={"10px"}

                p={8}>
                <Box className='loginTExt' >
                  <Text className='loginTExt1' >Login to get start</Text>
                </Box>
                <Stack spacing={5}>
                  <FormControl id="email" isInvalid={isErrorEmail}>
                    <FormLabel color="gray">Email </FormLabel>
                    <Input type="email" size='lg' variant='outline'
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {!isErrorEmail ? (
                      <FormHelperText>
                        {/* Enter the email  */}
                      </FormHelperText>
                    ) : (
                      <FormErrorMessage>Email is required.</FormErrorMessage>
                    )}
                  </FormControl>
                  <FormControl id="password" isInvalid={isErrorPassword}>
                    <FormLabel color="gray">Password</FormLabel>
                    <InputGroup>
                      <Input type={showPassword ? 'text' : 'password'} size='lg' variant='outline'
                        id="password"
                        name="password"

                        value={formData.password}
                        onChange={handleChange}
                      />
                      <InputRightElement h={'full'}>
                        <Button

                          variant={'ghost'}
                          onClick={() =>
                            setShowPassword((showPassword) => !showPassword)
                          }>
                          {showPassword ? <ViewIcon style={{ width: "30px", height: "30px", color: "gray" }} /> : <ViewOffIcon style={{ width: "30px", height: "30px", color: "gray" }} />}
                        </Button>
                      </InputRightElement>
                    </InputGroup>

                    {!isErrorPassword ? (
                      <FormHelperText>
                        {/* Enter the email  */}
                      </FormHelperText>
                    ) : (
                      <FormErrorMessage>Password is required.</FormErrorMessage>
                    )}
                  </FormControl>

                  <Stack spacing={7}>
                    {/* <Stack
                      direction={{ base: 'column', sm: 'row' }}
                      align={'start'}
                      justify={'space-between'}>
                      <Box></Box>
                      <Link color={'blue.400'}>Forgot password?</Link>
                    </Stack> */}
                    <Button
                      type="submit"
                      className='btnform'

                      bg={'blue.400'}
                      color={'white'}
                      _hover={{
                        bg: 'blue.500',
                      }}>
                      Login
                    </Button>


                  </Stack>
                  {invalidUser && (
                    <Box >
                      <Text textAlign={"center"} color="red" fontSize="sm">
                        Invalid email or password.
                      </Text>

                    </Box>

                  )}
                </Stack>
              </Box>

            </form>



          </Box>

          <Box h="100px">

          </Box>

        </Box>


      </div>

    </div>
  )
}

export default Login