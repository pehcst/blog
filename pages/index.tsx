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
  HStack,
} from '@chakra-ui/react'
import type { NextPage } from 'next'
import Header from '../components/Header'
import ScrollContainer from 'react-indiana-drag-scroll'
import {
  RiBuilding4Fill,
  RiExternalLinkFill,
  RiGithubFill,
  RiGroupFill,
} from 'react-icons/ri'
const Home: NextPage = () => {
  const numbers = new Array(30).fill(1).map((_, index) => index + 1)
  return (
    <>
      <Header />
      <Box position={'absolute'} left="-5" h="100%" bg="#3A536B" w="20%" />
      <Stack
        position={'relative'}
        direction={['column', 'row']}
        h="100vh"
        justifyContent={'center'}
        alignItems={'center'}
        w="100%"
      >
        <Flex
          h="250px"
          alignItems={'center'}
          w="100%"
          p="5"
          maxW={'1000px'}
          bg={useColorModeValue('none', 'whiteAlpha.400')}
          borderRadius={10}
        >
          <Box mr="1rem">
            <Image
              borderRadius={'10'}
              src="https://github.com/pehcst.png"
              alt="minha foto de perfil"
            />
          </Box>
          <Box>
            <Flex
              alignItems={'center'}
              justifyContent={'space-between'}
              mb="1rem"
            >
              <Heading fontSize={'2rem'}>Olá 👋🏻 eu sou Pedro</Heading>
              <Flex alignItems={'center'} color={'blue.0'}>
                <Text mr="5px">github</Text>
                <RiExternalLinkFill />
              </Flex>
            </Flex>

            <Text>
              Apaixonado por desenvolver aplicações web e mobile. Gosto de criar
              protótipos de interface e desde criança me encontrei no
              desenvolvimento Front-End. Autodidata por natureza, estou em
              constante evolução, sempre aprendendo coisas novas.
            </Text>
            <HStack alignItems={'center'} mt="2rem" spacing={10}>
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
          </Box>
        </Flex>
        <Box position={'absolute'} bottom={20} right={0} zIndex={-1}>
          <Image
            opacity={0.05}
            borderRadius={'lg'}
            src="/herobg.svg"
            alt="tag image"
          />
        </Box>
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
            bg={'blue.0'}
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
                    color: useColorModeValue('#00398D', 'blue.0'),
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
        <SimpleGrid columns={[1, 2]} p={[1, 5]} spacing={10}>
          {numbers.map((el) => (
            <Flex
              bg={useColorModeValue('white', '#181818')}
              transition={'all 0.3s'}
              cursor={'pointer'}
              zIndex={1}
              _hover={{
                color: useColorModeValue('#00398D', 'blue.0'),
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
