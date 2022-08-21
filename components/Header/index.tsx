import { Box, Flex,Image, Button, Stack, useColorMode } from '@chakra-ui/react'
import { RiMoonClearFill, RiSunFill } from 'react-icons/ri'

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <>
      <Box position={'fixed'} bg={'transparent'} px={4} w="100vw" zIndex={2}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Image src={'/logo.svg'} alt={'logo'} />

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <RiMoonClearFill /> : <RiSunFill />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}
