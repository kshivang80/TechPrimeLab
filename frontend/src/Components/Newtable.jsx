import {
    Box,
    Button,
    Card,
    Flex,
    Image,
    Input,
    InputGroup,
    InputLeftElement,
    Select,
    SimpleGrid,
    Table,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
    useBreakpointValue,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsBoxArrowRight } from "react-icons/bs";
import { AiOutlineLeft } from "react-icons/ai";
import { SearchIcon } from "@chakra-ui/icons";
import axios from "axios";

export const Newtable = () => {
    const [data, setData] = useState();
    const nav = useNavigate();
    const [inputdata, SetInputData] = useState("");
    const isSmallScreen = useBreakpointValue({ base: true, lg: false });
    const isSmalllist = useBreakpointValue({ base: false, md: false, lg: true });
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage, setPerPage] = useState(6);
    const [query, setQuery] = useState()

    useEffect(() => {
        Allfetch();
    }, [currentPage, perPage, query]);



    let Allfetch=()=>{
        axios.get(`https://jade-dove-kilt.cyclic.app/allproject?query=${query}&page=${currentPage}&limit=${perPage}`)
        .then((res)=>{
            setData(res.data);

        })
        .catch(err=>{
            console.log(err)
        })
    }

 


    const handleLogout = () => {
        localStorage.clear();
        nav("/");
    };




    const handleCancelChange = async (id) => {
        try {
            const response = await axios.patch(`https://jade-dove-kilt.cyclic.app/cancelstatus/${id}`, {
                status: 'Cancelled',
            });
            Allfetch();
            // console.log(response.data)
        } catch (error) {
            console.error('Error', error);
        }
    };


    const handleCloseChange = async (id) => {
        try {
            const response = await axios.patch(`https://jade-dove-kilt.cyclic.app/closestatus/${id}`, {
                status: 'Closed',
            });
            Allfetch();
            // console.log(response.data)
        } catch (error) {
            console.error('Error', error);
        }

    }

    const handleStartChange = async (id) => {
        try {
            const response = await axios.patch(`https://jade-dove-kilt.cyclic.app/runstatus/${id}`, {
                status: 'running',
            });
            Allfetch();
            // console.log(response.data)
        } catch (error) {
            console.error('Error', error);
        }

    }

    const handleQueryData = ((e) => {
        const { value } = e.target
        setQuery(value)
    })

    return (
        <Box>
            {/* image box */}
           

            <Card
                h="auto"
                
                mr="10px"
                mt={{ base: "0", lg: "-20px" }}
                borderRadius={"15px"}
                m="auto"
             //  style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px" }}
             
            >
                {/* serch and sort box */}
                <Box display="flex" justifyContent={"space-between"} p="2" >
                    <Box borderBottom={"2px solid black"} p="2">
                        <InputGroup position="relative">
                            <InputLeftElement
                                pointerEvents="none"
                                position="absolute"
                                top="1"
                                children={<SearchIcon color="gray.400" boxSize={5} />}
                            />
                            <Input
                                mt="3"
                                placeholder="Search"
                                type="Search"
                                variant={"unstyled"}
                                onChange={(e) => SetInputData(e.target.value)}
                            />
                        </InputGroup>
                    </Box>

                    <Box display={"flex"}  w={{ base: "200px", md: "230px", lg: "300px" }} justifyContent={"space-evenly"} p="2">
                        <Box w="50%" m="auto" ml={{ lg: "20px" }}>
                            <Text fontSize="1rem" color="gray">
                                Sort By :
                            </Text>
                        </Box>

                        <Select   value={query} onChange={handleQueryData} m="auto"   size="lg">
                            <option value="priority">priority</option>
                            <option value="type">type</option>
                            <option value="location">Location </option>
                            <option value="status">Status</option>
                            <option value="reason">Reason</option>
                            <option value="category">category </option>
                        </Select>
                    </Box>
                </Box>

                {/* lislbox */}
                {isSmalllist && (
                    <Box w="100%" h="40vh" mt="20px">
                        <Table size="md" variant="simple">
                            <Thead bgColor="blue.100">
                                <Tr>
                                    <Th>Project Name</Th>
                                    <Th>Reason</Th>
                                    <Th>type</Th>
                                    <Th>Division</Th>
                                    <Th>category</Th>
                                    <Th>priority</Th>
                                    <Th>Dept.</Th>
                                    <Th>Location</Th>
                                    <Th>Status</Th>
                                    <Th></Th>
                                    <Th></Th>
                                    <Th></Th>
                                </Tr>
                            </Thead>
                            <Tbody borderBottom="1.2px solid gray" bgColor="white">
                                {data &&
                                    data.filter((value) => {
                                        if (inputdata === "") {
                                            return value;
                                        } else if (
                                            value.division &&
                                            value.division.toLowerCase().includes(inputdata.toLowerCase())
                                        ) {
                                            return value;
                                        } else if (
                                            value.category &&
                                            value.category.toLowerCase().includes(inputdata.toLowerCase())
                                        ) {
                                            return value;
                                        } else if (
                                            value.type &&
                                            value.type.toLowerCase().includes(inputdata.toLowerCase())
                                        ) {
                                            return value;
                                        }
                                    }).map((ele) => (
                                        <Tr>
                                            <Box w="200px" p="5px" >
                                                <Text fontWeight={"600"}>{ele.projectname}</Text>
                                                <Text>{ele.startdate} to {ele.enddate}</Text>
                                            </Box>
                                            <Td>{ele.reason}</Td>
                                            <Td>{ele.type}</Td>
                                            <Td>{ele.division}</Td>
                                            <Td>{ele.category}</Td>
                                            <Td>{ele.priority}</Td>
                                            <Td>{ele.department}</Td>
                                            <Td>{ele.location}</Td>
                                            <Td fontWeight={"600"}>{ele.status}</Td>
                                            <Td>
                                                <Button
                                                    borderRadius={"15px"}
                                                    border="1px solid blue"
                                                    colorScheme="blue"
                                                    size="sm"
                                                    onClick={() => handleStartChange(ele._id)}
                                                >
                                                    Start
                                                </Button>
                                            </Td>
                                            <Td>
                                                <Button
                                                    ml="-40px"
                                                    borderRadius={"15px"}
                                                    border="2px solid blue"
                                                    size="sm"
                                                    onClick={() => handleCloseChange(ele._id)}
                                                >
                                                    Close
                                                </Button>
                                            </Td>
                                            <Td>
                                                <Button
                                                    ml="-40px"
                                                    borderRadius={"15px"}
                                                    border="2px solid blue"
                                                    size="sm"
                                                    onClick={() => handleCancelChange(ele._id)}
                                                >
                                                    Cancel
                                                </Button>
                                            </Td>
                                        </Tr>
                                    ))}
                            </Tbody>
                        </Table>

                        {/* psgination */}
                        <Box display={"flex"} justifyContent={"center"} mt="20px">
                            <Button bgColor={"blue.100"} onClick={() => setCurrentPage(currentPage - 1)} isDisabled={currentPage === 1}>
                                Previous
                            </Button>
                            <Button ml="10px" mr="10px">{currentPage}</Button>
                            <Button bgColor={"blue.100"} onClick={() => setCurrentPage(currentPage + 1)}>Next</Button>
                        </Box>
                    </Box>
                )}

                {/* card for smallscreen */}
                {!isSmalllist && (
                    <SimpleGrid columns={[1, 2]} spacing={5}>
                        {data &&
                            data.filter((value) => {
                                if (inputdata === "") {
                                    return value;
                                } else if (
                                    value.division &&
                                    value.division.toLowerCase().includes(inputdata.toLowerCase())
                                ) {
                                    return value;
                                } else if (
                                    value.category &&
                                    value.category.toLowerCase().includes(inputdata.toLowerCase())
                                ) {
                                    return value;
                                } else if (
                                    value.type &&
                                    value.type.toLowerCase().includes(inputdata.toLowerCase())
                                ) {
                                    return value;
                                }
                            }).map((ele) => (
                                <Box w="330px" br="17px" h="300px" borderRadius={"15px"} m="auto" style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px" }}>
                                    <Flex justifyContent={"space-between"} p="10px">
                                        <Box w="200px" p="5px" display={"block"}>
                                            <Text fontWeight={"600"}>{ele.projectname}</Text>
                                            <Text>{ele.startdate} to {ele.enddate}</Text>
                                        </Box>
                                        <Text fontWeight={"600"}>{ele.status}</Text>
                                    </Flex>
                                    <Text p="5px">Reason : {ele.reason}</Text>
                                    <Flex pl="5px" pr="5px" justifyContent={"space-between"}>
                                        <Text>type : {ele.type}</Text>
                                        <Text>category : {ele.category}</Text>
                                    </Flex>
                                    <Flex p="5px" pr="5px" justifyContent={"space-between"}>
                                        <Text> Div : {ele.division}</Text>
                                        <Text>Dept : {ele.department}</Text>
                                    </Flex>
                                    <Text p="5px" >Location : {ele.location}</Text>
                                    <Text pl="5px" pr="5px" >priority : {ele.priority}</Text>
                                    <Flex justifyContent={"space-around"} mt="10px">
                                        <Button
                                            borderRadius={"15px"}
                                            border="1px solid blue"
                                            colorScheme="blue"
                                            size="lg"
                                            h="40px"
                                            onClick={() => handleStartChange(ele._id)}
                                        >
                                            Start
                                        </Button>


                                        <Button

                                            borderRadius={"15px"}
                                            border="2px solid blue"
                                            onClick={() => handleCloseChange(ele._id)}
                                            size="lg"
                                            h="40px"
                                        >
                                            Close
                                        </Button>

                                        <Button

                                            borderRadius={"15px"}
                                            border="2px solid blue"
                                            size="lg"
                                            h="40px"
                                            onClick={() => handleCancelChange(ele._id)}
                                        >
                                            Cancel
                                        </Button>

                                    </Flex>

                                </Box>
                            ))}
                        <Box display={"flex"} justifyContent={"center"} mt="20px">
                            <Button bgColor={"blue.100"} onClick={() => setCurrentPage(currentPage - 1)} isDisabled={currentPage === 1}>
                                Previous
                            </Button>
                            <Button ml="10px" mr="10px">{currentPage}</Button>
                            <Button bgColor={"blue.100"} onClick={() => setCurrentPage(currentPage + 1)}>Next</Button>
                        </Box>
                    </SimpleGrid>

                )}




            </Card>


        </Box>
    );
};