import {
  Box,
  Flex,
  Image,
  Button,
  Stack,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { RiMoonClearFill, RiSunFill } from 'react-icons/ri'

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode()
  const [navSize, setnavSize] = useState('10rem')
  const [navColor, setnavColor] = useState('transparent')
  const color = useColorModeValue('#fff', '#252734')

  const listenScrollEvent = () => {
    window.scrollY > 300 ? setnavColor(color) : setnavColor('transparent')
    console.log(window.scrollY)
  }
  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent)
    return () => {
      window.removeEventListener('scroll', listenScrollEvent)
    }
  }, [])

  return (
    <Box
      position={'fixed'}
      bg={navColor}
      transition={'all 0.3s'}
      pl="3"
      pr="3"
      w="full"
      zIndex={99}
    >
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
  )
}
