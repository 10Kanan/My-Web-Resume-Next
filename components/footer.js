import { Box, useColorModeValue } from '@chakra-ui/react'

const Footer = () => {
  return (
    <>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        This website template is built based on the{' '}
        <a href="https://www.craftz.dog/" target="_blank" rel="noreferrer">
          Takuya Matsuyama's website
        </a>
      </Box>
    </>
  )
}

export default Footer
