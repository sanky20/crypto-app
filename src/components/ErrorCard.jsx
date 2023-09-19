/* eslint-disable react/prop-types */
import { Alert, AlertIcon } from "@chakra-ui/react"




const ErrorCard = ({message}) => {
  return (
      <Alert
            status="error"
            position= "fixed"
            bottom="50%"
            left="50%"
            w="container.sm"
            transform={"translateX(-50%)"}
      >

        <AlertIcon/>
        { message }


      </Alert>
  )
}

export default ErrorCard