import { Box, Spinner } from "@chakra-ui/react"

const Loader = () => {
  return (
    <Box sx={{ 
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Spinner color='primary' size='xl' />
    </Box>
  )
}

export default Loader;
