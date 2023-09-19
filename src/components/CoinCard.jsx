import { Heading, Image, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const CoinCard = ({ id,symbol, name, image, price, currencySymbol="₹" }) => {
  return (
    <Link to ={`/coin/${id}`}>
      <VStack m="5" p="6" w="52"   
              shadow="lg" 
              transition={"all 0.3s"}
              css={{
                "&:hover": { 
                    transform : "scale(1.2)",
                    
                }
              }}
      >
        <Image
          src={image}
          alt={"exchange"}
          w="10"
          h="10"
          objectFit={"contain"}
        />
        <Heading noOfLines={1} size="md">
          {symbol}
        </Heading>
        <Text noOfLines={1} my="1" fontStyle="oblique" fontWeight={"bold"}  >{name}</Text>
        <Text noOfLines={1}>{price>=1?`${currencySymbol}${price}`:'NA'}</Text>
      </VStack>
      </Link>
  );
};

export default CoinCard;
