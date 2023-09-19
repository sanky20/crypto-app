import {
    Box,
    Button,
    HStack,
    Heading,
    Input,
    Stack,
    Text,
    VStack,
  } from "@chakra-ui/react";
  import { AiOutlineSend } from "react-icons/ai";
  import {
      AiFillYoutube,
      AiFillInstagram,
      AiFillFacebook,
      
    } from "react-icons/ai";
  const Footer = () => {
    return (
      <Box bgColor="blackAlpha.900" minH="40" p="12" color="white">
        <Stack direction={["column", "row"]} justifyContent={"space-between"}>

          <VStack 
                  my={["5","0"]}
          >
              <Heading>
                CryptoVerseGuide
              </Heading>
              <Text alignSelf={"flex-start"} >@all rights reserved.</Text>
          </VStack>
  
          <VStack  my={["5","0"]}>
  
              <Heading size="md">
                  Social Media
              </Heading>
  
              <HStack  w="50" justifyContent="space-around" >
                  <a href="https://www.instagram.com/_sanky_23/" > <AiFillInstagram size="30"/> </a>
                  <a href="https://www.youtube.com" > <AiFillYoutube size="30"/> </a>
                  <a href="https://www.facebook.com" > <AiFillFacebook size="28"/> </a>
  
              </HStack>
  
               
  
  
  
          </VStack>
  
  
  
        </Stack>
      </Box>
    );
  };
  
  export default Footer;
  