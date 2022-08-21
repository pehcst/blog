import {
  Box,
  Image,
  Text,
  Heading,
  Stack,
  Button,
  Flex,
  VStack,
} from '@chakra-ui/react'
import type { NextPage } from 'next'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Stack
        position={'relative'}
        direction={['column', 'row']}
        h="100vh"
        w="100%"
      >
        <Flex
          zIndex={2}
          justifyContent={'space-around'}
          alignSelf={'center'}
          w="100%"
          maxW={'1600px'}
          p="6rem"
        >
          <Box maxW={'600px'} mt="4rem">
            <Heading>Olá 👋🏻 eu sou Pedro, desenvolvedor front-end</Heading>
            <Text mt="2rem">
              Apaixonado por desenvolver aplicações web e mobile. Gosto de criar
              protótipos de interface e desde criança me encontrei no
              desenvolvimento Front-End. Autodidata por natureza, estou em
              constante evolução, sempre aprendendo coisas novas.
            </Text>
            <Flex mt="5rem" align={'center'}>
              <VStack alignItems={'center'} spacing={0} color={'#5B9EFF'}>
                <Text>Me contrate</Text>
              </VStack>
              <Button
                ml="2rem"
                bg={'#5B9EFF'}
                color={'white'}
                _hover={{
                  opacity: 0.9,
                }}
              >
                veja mais
              </Button>
            </Flex>
          </Box>
          <Box zIndex={2}>
            <Image
              borderRadius={'lg'}
              src="https://github.com/pehcst.png"
              alt="minha foto de perfil"
            />
          </Box>
        </Flex>
        <Box position={'absolute'} bottom={20}>
          <Image
            opacity={0.05}
            borderRadius={'lg'}
            src="/herobg.svg"
            alt="minha foto de perfil"
          />
        </Box>
        <Box position={'absolute'} right="0" h="100vh" bg="#1F324E" w="30%" />
      </Stack>
    </>
  )
}

export default Home
