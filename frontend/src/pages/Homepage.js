import React from 'react';
import { Container, Box } from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Login from '../components/auth/Login';
import Signup from '../components/auth/Signup';

const Homepage = () => {
  return (
    <Container maxW={'xl'} centerContent>
      <Box bg={'white'} w={"100%"} p={4} borderRadius={"lg"} borderWidth={"1px"} marginTop={"80px"} color={"black"}>
        <Tabs isFitted variant='enclosed'>
          <TabList mb={"1em"}>
            <Tab>Login</Tab>
            <Tab>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>

      </Box>
    </Container>
  )
}

export default Homepage