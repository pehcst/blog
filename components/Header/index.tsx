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
  const [user, setUser] = useState({} as any)
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

  useEffect(() => {
    api.get('').then((res) => {
      setUser(res.data)
    })
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
        <Flex alignItems={'center'}>
          <Image src={'/logo.svg'} alt={'logo'} mr="5" />
          {typeof window !== 'undefined' && window.scrollY > 400 && (
            <Text fontSize={'1rem'} fontWeight={'bold'}>
              Olá 👋🏻 eu sou {user?.name?.split(' ')[0]}
            </Text>
          )}
        </Flex>
        {typeof window !== 'undefined' && window.scrollY > 400 && (
          <HStack ml="-10" spacing={10}>
            <Flex alignItems={'center'}>
              <RiGithubFill />
              <Text ml="5px">{user?.login}</Text>
            </Flex>
            <Flex alignItems={'center'}>
              <RiBuilding4Fill />
              <Text ml="5px">{user?.company}</Text>
            </Flex>
            <Flex alignItems={'center'}>
              <RiGroupFill />
              <Text ml="5px">{user?.followers} seguidores</Text>
            </Flex>
            <Flex alignItems={'center'}>
              <RiMapPin2Fill />
              <Text ml="5px">{user?.location}</Text>
            </Flex>
          </HStack>
        )}
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
