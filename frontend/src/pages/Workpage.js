import React from 'react'
import { useToast } from '@chakra-ui/react';

const Workpage = () => {
  const toast = useToast();
  function showToast(){
    toast({
      title: "This is the place you can work",
      status: "info",
      duration: 5000,
      isClosable:true,
      position:'bottom',
    });
  }
  
  showToast();

  return (
    <div><h1>Workpage</h1></div>
  )
}

export default Workpage