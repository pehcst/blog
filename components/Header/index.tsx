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
import { RiBuilding4Fill, RiGithubFill, RiGroupFill, RiMoonClearFill, RiSunFill } from 'react-icons/ri'

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode()
  const [navColor, setnavColor] = useState('transparent')
  const color = useColorModeValue('#fff', 'gray.900')

  const listenScrollEvent = () => {
    window.scrollY > 400 ? setnavColor(color) : setnavColor('transparent')
  }
  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent)
    return () => {
      window.removeEventListener('scroll', listenScrollEvent)
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
          {window.scrollY > 400 && (
            <Text fontSize={'1rem'} fontWeight={'bold'}>
              Olá 👋🏻 eu sou Pedro
            </Text>
          )}
        </Flex>
        {window.scrollY > 400 && (
          <HStack ml="-10" spacing={10}>
            <Flex alignItems={'center'}>
              <RiGithubFill />
              <Text ml="5px">pehcst</Text>
            </Flex>
            <Flex alignItems={'center'}>
              <RiBuilding4Fill />
              <Text ml="5px">Unimed Volta Redonda</Text>
            </Flex>
            <Flex alignItems={'center'}>
              <RiGroupFill />
              <Text ml="5px">32 seguidores</Text>
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
