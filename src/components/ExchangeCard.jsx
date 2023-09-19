import { Heading, Image, Text, VStack } from "@chakra-ui/react";


// eslint-disable-next-line react/prop-types
const ExchangeCard = ({ url, name, image, rank }) => {
  return (
    <a href={url} target={"blank"}>
      <VStack m="5" p="7" w="52"  
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
          {rank}
        </Heading>
        <Text noOfLines={1}>{name}</Text>
      </VStack>
    </a>
  );
};

export default ExchangeCard;
