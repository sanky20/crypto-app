/* eslint-disable react/prop-types */
import {
  Badge,
  Box,
  Button,
  Container,
  HStack,
  Image,
  Progress,
  Radio,
  RadioGroup,
  Stack,
  Stat,
  StatArrow,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Loader from "./Loader";
import { useParams } from "react-router-dom";
import { server } from "../main.jsx";
import axios from "axios";
import ErrorCard from "./ErrorCard";
import Chart from "./Chart";



const CoinDetails = () => {
  const [coin, setCoin] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currency, setCurrency] = useState("inr");
  const [days, setDays] = useState("24h");
  const [chartArray ,setChartArray] = useState([]);


  const btns = ["24h", "7d", "14d", "30d", "60d", "200d", "1y", "max"];


  const switchChartStats= (val)=>{
      setDays(`${val}`);
      setLoading(true);
  }


  const currencySymbol =
    currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

  const params = useParams();

  useEffect(() => {
    const fetchCoin = async () => {
      try {
        const { data } = await axios.get(`${server}/coins/${params.id}`);
        const { data:chartData } = await axios.get(`${server}/coins/${params.id}/market_chart?vs_currency=${currency}&days=${days}`);

        // console.log(chartData.prices);
        // console.log(days);
        
        setCoin(data);
        setChartArray(chartData.prices);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };

    fetchCoin();
  }, [params.id,currency,days]);

  if (error) return <ErrorCard message="Error while fetching Coin !!!" />;

  return (
    <Container maxW="container.xl">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Box w="full" borderWidth={1}>
            <Chart arr={chartArray} currency={currencySymbol} days={days} />
          </Box>

          <HStack p="4" overflowX={"auto"}>
            {btns.map((i) => (
              <Button
                disabled={days === i}
                key={i}
                onClick={() => switchChartStats(i)}
              >
                {i}
              </Button>
            ))}
          </HStack>

            <RadioGroup value={currency} onChange={setCurrency}>
              <HStack spacing="4" p="3">
                <Radio value="inr">INR</Radio>
                <Radio value="usd">USD</Radio>
                <Radio value="eur">EURO</Radio>
              </HStack>
            </RadioGroup>

            <VStack spacing="4" p="16" alignItems="flex-start">
              <Text alignSelf={["flex-start", "center"]} opacity={0.7}>
                Last updated on{" "}
                {Date(coin.market_data.last_updated).split("G")[0]}
              </Text>

              <Image
                src={coin.image.large}
                w="16"
                h="16"
                objectFit={"contain"}
              />

              <Stat>
                <StatLabel fontSize={"1.2rem"}>{coin.name}</StatLabel>
                <StatNumber fontSize="md">
                  {currencySymbol}
                  {coin.market_data.current_price[currency]}
                </StatNumber>

                <StatHelpText>
                  <StatArrow
                    type={
                      coin.market_data.price_change_percentage_24h > 0
                        ? "increase"
                        : "decrease"
                    }
                  />
                  {coin.market_data.price_change_percentage_24h}%
                </StatHelpText>
              </Stat>

              <Badge fontSize="2xl" bgColor="blue.700"  borderRadius={"5px"} color="white">
                {coin.market_data.market_cap_rank}
              </Badge>

              <CustomBar
                high={`${currencySymbol}${coin.market_data.high_24h[currency]}`}
                low={`${currencySymbol}${coin.market_data.low_24h[currency]}`}
              />

              <Box w="full" p="4" >
                <Item title={"Max Supply"} value={coin.market_data.max_supply} />
                <Item title={"Circulating Supply"} value={coin.market_data.circulating_supply} />
                <Item title={"Market Capital"} value={`${currencySymbol}${coin.market_data.market_cap[currency]}`} />
                <Item title={"All Time Low"} value={`${currencySymbol}${coin.market_data.atl[currency]}`} />
                <Item title={"All Time High"} value={`${currencySymbol}${coin.market_data.ath[currency]}`} />
              </Box>
            </VStack>
          
        </>
      )}
    </Container>
  );
};

const CustomBar = ({ high, low }) => {
  return (
    <VStack w="full">
      <Progress value={50} w="full" />

      <HStack justifyContent={"space-between"}  w="full" >
        <Badge  colorScheme="red">{low}</Badge>
        <Text fontSize="sm">24h Range</Text>
        <Badge colorScheme="green">{high}</Badge>
      </HStack>
    </VStack>
  );
};

const Item =({title, value})=>(

  <Stack direction={["column","row"]} w="full" justifyContent={["center","space-between"]}  my="4"  >
    <Text alignSelf={"center"} fontWeight="bold" fontStyle={"oblique"} >{title} :</Text>
    <Text alignSelf={"center"} fontStyle={"oblique"} >{value}</Text>
  </Stack>





);

export default CoinDetails;
