import { Box, Image, Text } from "@chakra-ui/react";
import img from "../assets/crypto.png";

const Home = () => {
  return (
    <Box w="full" h="90vh">
      <Image src={img} h="full" w="full" objectFit="cover" />
      <Text
        fontSize="xl"
        mt="-16"
        fontStyle="italic"
        fontWeight="bold"
        textAlign="center"
       
        color="white"
      >
        Unlocking Crypto: Your Ultimate Guide to Coins and Exchanges{" "}
      </Text>
    </Box>
  );
};

export default Home;
