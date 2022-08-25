import {
  Box,
  Image,
  Text,
  Heading,
  Stack,
  Button,
  Flex,
  VStack,
  useColorModeValue,
  SimpleGrid,
} from '@chakra-ui/react'
import type { NextPage } from 'next'
import Header from '../components/Header'
import ScrollContainer from 'react-indiana-drag-scroll'

const Home: NextPage = () => {
  const numbers = new Array(30).fill(1).map((_, index) => index + 1)
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
      <Box h="auto" w="100%">
        <Heading
          textAlign={'right'}
          pr="10"
          mt="10"
          mb="10"
          fontSize={'3rem'}
          opacity={'0.2'}
          color={useColorModeValue('#181818', '#fff')}
        >
          {'<Projetos />'}
        </Heading>
        <Flex position={'relative'} w="100%" alignItems={'center'}>
          <Box
            zIndex={-10}
            position={'absolute'}
            w="100%"
            h="5px"
            bg={'#5B9EFF'}
          ></Box>
          <ScrollContainer horizontal className="container">
            <Flex p="3">
              {numbers.map((el) => (
                <Box
                  bg={useColorModeValue('white', '#181818')}
                  shadow="md"
                  borderRadius={10}
                  transition={'all 0.3s'}
                  cursor={'pointer'}
                  _hover={{
                    opacity: 1,
                    color: useColorModeValue('#00398D', '#5B9EFF'),
                  }}
                  p="5"
                  mr="10"
                  key={el}
                  minW={'300px'}
                  h="400px"
                >
                  {el}
                </Box>
              ))}
            </Flex>
          </ScrollContainer>
        </Flex>
        <Heading
          textAlign={'right'}
          pr="10"
          mt="10"
          mb="10"
          fontSize={'3rem'}
          opacity={'0.2'}
          color={useColorModeValue('#181818', '#fff')}
        >
          {'<Blog />'}
        </Heading>
        <Text p={[1, 10]}>Últimos posts</Text>
        <SimpleGrid columns={[1, 2]} p={[1, 10]} spacing={10}>
          {numbers.map((el) => (
            <Flex
              bg={useColorModeValue('white', '#181818')}
              transition={'all 0.3s'}
              cursor={'pointer'}
              opacity={'0.7'}
              _hover={{
                opacity: 1,
                color: useColorModeValue('#00398D', '#5B9EFF'),
              }}
              shadow={'md'}
              borderRadius={10}
              key={el}
              h={['150px', '250px']}
            >
              <Box w="30%">
                <Image
                  borderTopLeftRadius={10}
                  borderBottomLeftRadius={10}
                  w="100%"
                  h="100%"
                  src={
                    'https://images.unsplash.com/photo-1619117084637-a83c09c6ab5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=741&q=80'
                  }
                  alt={'logo'}
                />
              </Box>
              <Box w="70%" h="100%" p={[1, 5]}>
                <Heading fontSize={['1.5rem', '2rem']}>{el}</Heading>
                <Text noOfLines={[3, 5]} mt={[0, 5]}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Vitae exercitationem doloremque eum ab nulla quod numquam
                  facere asperiores optio necessitatibus, non minus amet quidem
                  reprehenderit sunt eius pariatur. Amet, blanditiis!
                </Text>
                <Text mt={[3, 5]} textAlign={'right'}>
                  {new Date().toLocaleDateString('pt-BR', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </Text>
              </Box>
            </Flex>
          ))}
        </SimpleGrid>
      </Box>
    </>
  )
}

export default Home
