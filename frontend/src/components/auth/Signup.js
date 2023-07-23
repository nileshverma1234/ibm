import React, { useState } from 'react';
import { VStack, Input, InputGroup, InputRightElement, Button } from '@chakra-ui/react';
import {
  FormControl,
  FormLabel,
} from '@chakra-ui/react'

const Signup = () => {
    const [name, setname] = useState();
    const [email, setemail] = useState();
    const [password, setpassword] = useState();
    const [confirmpassword, setconfirmpassword] = useState();
    const [show, setshow] = useState(false);

    const handleClick = ()=>{
        setshow(!show);
    }

    function submitHandler(){

    }

  return (
    <VStack spacing={"5px"}>
        <FormControl id='first-name' isRequired margin={"5px"}>
            <FormLabel>Name:</FormLabel>
            <Input placeholder='Enter your name' onChange={(e)=>{
                setname(e.target.value);
            }}></Input>
        </FormControl>

        <FormControl id='email' isRequired margin={"1px"}>
            <FormLabel>Email:</FormLabel>
            <Input placeholder='Enter your Email' onChange={(e)=>{
                setemail(e.target.value);
            }}></Input>
        </FormControl>

        <FormControl id='password' isRequired margin={"5px"}>
            <FormLabel>Password:</FormLabel>
            <InputGroup>
                <Input placeholder='Enter your password' type={show ? "text" : 'password'} onChange={(e)=>{
                setpassword(e.target.value);
                }}></Input>
                <InputRightElement>
                    <Button h={"2rem"} size={"sm"} onClick={handleClick} padding={"20px"}>
                        {show ? "Hide" : "Show"}
                    </Button>
                </InputRightElement>
            </InputGroup>
        </FormControl>

        <FormControl id='confirm-password' isRequired margin={"5px"}>
            <FormLabel>Confirm Password:</FormLabel>
            <InputGroup>
                <Input placeholder='Enter your confirm password' type={show ? "text" : 'password'} onChange={(e)=>{
                setconfirmpassword(e.target.value);
                }}></Input>
                <InputRightElement>
                    <Button h={"2rem"} size={"sm"} onClick={handleClick} padding={"20px"}>
                        {show ? "Hide" : "Show"}
                    </Button>
                </InputRightElement>
            </InputGroup>
        </FormControl>

        <Button
            padding={"20px"}
            width={"100%"}
            style={{marginTop: 15}}
            onClick={submitHandler}
        >Sign Up</Button>
    </VStack>
  )
}

export default Signup