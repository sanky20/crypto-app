import { Button, HStack } from "@chakra-ui/react"
import { Link } from "react-router-dom"
;


const Header = () => {
  return (
    <HStack p="5" bgColor="blackAlpha.900" gap="8">

        
    

        <Button variant="unstyled" color="white">
            <Link to="/"> Home </Link>
        </Button>
        <Button variant="unstyled" color="white">
            <Link to="/exchanges"> Exchanges </Link>
        </Button>
        <Button variant="unstyled" color="white">
            <Link to="/coins"> Coins </Link>
        </Button>

        
    </HStack>
  )
}

export default Header