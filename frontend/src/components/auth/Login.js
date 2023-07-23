import React, { useState } from 'react';
import { VStack, Input, InputGroup, InputRightElement, Button } from '@chakra-ui/react';
import {
  FormControl,
  FormLabel,
} from '@chakra-ui/react';

const Login = () => {

  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [show, setshow] = useState(false);

  const handleClick = ()=>{
        setshow(!show);
    }

  return (
    <VStack spacing={"5px"}>
        
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


        <Button
            padding={"20px"}
            width={"100%"}
            style={{marginTop: 15}}
            // onClick={submitHandler}
        >Login</Button>
    </VStack>
  )
}

export default Login