import {
  Box,
  Flex,
  Image,
  Button,
  Text,
  Stack,
  useColorMode,
  useColorModeValue,
  HStack,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import {
  RiBuilding4Fill,
  RiGithubFill,
  RiGroupFill,
  RiMapPin2Fill,
  RiMoonClearFill,
  RiSunFill,
} from 'react-icons/ri'
import { api } from '../../services/api'
// import { api } from '../../services/api'

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode()
  const [navColor, setnavColor] = useState('transparent')
  const color = useColorModeValue('#fff', 'gray.900')

  const listenScrollEvent = () => {
    window.scrollY > 400 ? setnavColor(color) : setnavColor('transparent')
  }
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', listenScrollEvent)
      return () => {
        window.removeEventListener('scroll', listenScrollEvent)
      }
    }
  }, [colorMode])
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
        <Flex alignItems={'center'}>
          <Image src={'/logo.svg'} alt={'logo'} mr="5" />
          {typeof window !== 'undefined' && window.scrollY > 400 && (
            <>
              <Text fontSize={'1.3rem'} fontWeight={'bold'}>
                Pedro
              </Text>
              <Text fontSize={'1.3rem'} color={'blue.0'} fontWeight={'bold'}>
                _{'>'}
              </Text>
            </>
          )}
        </Flex>
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
