/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../main.jsx";
import { Button, Container, HStack, Radio, RadioGroup } from "@chakra-ui/react";
import Loader from "./Loader.jsx";
import CoinCard from "./CoinCard.jsx";
import ErrorCard from "./ErrorCard.jsx";

const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currency, setCurrency] = useState("inr");
  const [page, setPage] = useState(1);

  const btns = new Array(30).fill(1);

  const changePage = (page) => {
    setPage(page);
    setLoading(true);
  };

  const currencySymbol =
    currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(
          `${server}/coins/markets?vs_currency=${currency}&page=${page}`
        );
        console.log(data);
        setCoins(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };

    fetchCoins();
  }, [currency, page]);

  if (error) return <ErrorCard message="Error while fetching coins !!!" />;

  return (
    <Container maxW="container.xl">
      {loading ? (
        <Loader />
      ) : (
        <>
          <RadioGroup value={currency} onChange={setCurrency} >
            <HStack spacing="4" p="3" >
              <Radio value="inr" >INR</Radio>
              <Radio value="usd" >USD</Radio>
              <Radio value="eur" >EURO</Radio>
            </HStack>
          </RadioGroup>

          <HStack wrap="wrap" w="100%" justifyContent={"center"}>
            {coins.map((i) => (
              <CoinCard
                id={i.id}
                symbol={i.symbol}
                name={i.name}
                image={i.image}
                price={i.current_price}
                currencySymbol={currencySymbol}
              />
            ))}
          </HStack>
          <HStack p="4" w="100%" m="auto" overflowX={"auto"}>
            {btns.map((item, index) => (
              <Button
                bgColor="blackAlpha.900"
                color="white"
                onClick={() => changePage(index + 1)}
              >
                {index + 1}
              </Button>
            ))}
          </HStack>
        </>
      )}
    </Container>
  );
};

export default Coins;
