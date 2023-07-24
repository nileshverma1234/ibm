import React, { useState } from 'react';
import { VStack, Input, InputGroup, InputRightElement, Button } from '@chakra-ui/react';
import {
  FormControl,
  FormLabel,
} from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';
import axios from "axios";
import {useHistory} from "react-router-dom";

const Login = () => {

  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [show, setshow] = useState(false);
  const [loading, setloading] = useState(false);
  const toast = useToast();
  const history = useHistory();

  const handleClick = ()=>{
    setshow(!show);
  }

  async function submitHandler(){
    setloading(true);
    if(!email || !password){
      toast({
        title: "Please fill all the fields",
        status: "warning",
        duration: 5000,
        isClosable:true,
        position:'bottom',
      });
      setloading(false);
      return;
    }

    try {
      const config = {
        headers:{
          "Content-type": "application/json",
        },
      };

      const {data} = await axios.post(
        "/api/user/login",
        {email,password},
        config
      );

      toast({
        title: "Login Sucessful",
        status: "success",
        duration: 5000,
        isClosable:true,
        position:'bottom',
      });

      localStorage.setItem('userInfo', JSON.stringify(data));
      setloading(false);
      history.push("/work");

    } catch (error) {
      toast({
        title: "Eror Occured",
        description: error.response.data.message,
        status: "error",
        duration: 5000,
        isClosable:true,
        position:'bottom',
      });
      setloading(false);
    }
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
            onClick={submitHandler}
            isLoading={loading}
        >Login</Button>
    </VStack>
  )
}

export default Login