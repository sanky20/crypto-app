import { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../main.jsx";
import { Container, HStack} from "@chakra-ui/react";
import Loader from "./Loader.jsx";
import ExchangeCard from "./ExchangeCard.jsx";
import ErrorCard from "./ErrorCard.jsx";

const Exchanges = () => {
  
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchExchanges = async () => {
      
      
      try {
          const { data } = await axios.get(`${server}/exchanges`);
          console.log(data);
          setExchanges(data);
          setLoading(false);
      } catch (error) {

        setError(true);
        setLoading(false);   
      }

    };

    fetchExchanges();
  }, []);

  if(error) return <ErrorCard message="Error while fetching exchanges !!!"/>

  return (
    <Container maxW="container.xl">
      {loading ? (
        <Loader />
      ) : (
        <>
          <HStack wrap="wrap" w="100%" justifyContent={"center"}>
            {exchanges.map((i) => (
              <ExchangeCard
                key={i.id}
                url={i.url}
                name={i.name}
                image={i.image}
                rank={i.trust_score_rank}
              />
            ))}
          </HStack>
        </>
      )}
    </Container>
  );
};

export default Exchanges;
