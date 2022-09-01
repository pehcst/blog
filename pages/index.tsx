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
  Link,
  Tag,
} from '@chakra-ui/react'
import type { NextPage } from 'next'
import Header from '../components/Header'
import ScrollContainer from 'react-indiana-drag-scroll'
import {
  RiBuilding4Fill,
  RiExternalLinkFill,
  RiGithubFill,
  RiGroupFill,
  RiMapPin2Fill,
} from 'react-icons/ri'
import { useState, useEffect } from 'react'
import { api } from '../services/api'
import { blog } from '../services/post'
const Home: NextPage = () => {
  const numbers = new Array(30).fill(1).map((_, index) => index + 1)
  const [user, setUser] = useState({} as any)
  const [post, setPost] = useState([] as any)

  useEffect(() => {
    api.get('').then((res) => {
      setUser(res.data)
    })
  }, [])

  useEffect(() => {
    blog
      .get('/search/issues', {
        params: {
          q: 'repo:pehcst/blog is:issue is:closed',
        },
      })
      .then((res: any) => {
        setPost(res.data.items)
        console.log(post)
      })
  }, [])

  return (
    <>
      <Header />
      <Box position={'absolute'} left="-5" h="100%" bg="#3A536B" w="25%" />
      <Stack
        position={'relative'}
        direction={['column', 'row']}
        h="100vh"
        justifyContent={'center'}
        alignItems={'center'}
        w="100%"
      >
        <Flex h="250px" alignItems={'center'} w="100%" p="5" maxW={'1000px'}>
          <Box mr="1rem">
            <Image
              borderRadius={'10'}
              src={user?.avatar_url}
              alt="minha foto de perfil"
            />
          </Box>
          <Box>
            <Flex
              alignItems={'center'}
              justifyContent={'space-between'}
              mb="1rem"
            >
              <Box>
                <Heading fontSize={'2rem'}>
                  Olá 👋🏻 eu sou {user?.name?.split(' ')[0]}
                </Heading>
                <Text fontSize={'12px'} fontStyle={'italic'}>
                  {user?.bio}
                </Text>
              </Box>

              <Flex alignItems={'center'} color={'blue.0'}>
                <Link href={user?.html_url} isExternal>
                  github
                </Link>
                <RiExternalLinkFill />
              </Flex>
            </Flex>

            <Text>
              Apaixonado por desenvolver aplicações web e mobile. Gosto de criar
              protótipos de interface e desde criança me encontrei no
              desenvolvimento Front-End. Autodidata por natureza, estou em
              constante evolução, sempre aprendendo coisas novas.
            </Text>
            <HStack alignItems={'center'} mt="1rem" spacing={10}>
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
        {/* <Heading
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
        </Flex> */}
        <Box h="100vh">
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
            {post?.map((p: any) => (
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
                key={p.id}
                h={'auto'}
              >
                <Box w="100%" h="100%" p={[1, 5]}>
                  <Heading fontSize={['1.5rem', '2rem']}>{p.title}</Heading>
                  <Text noOfLines={[3, 3]} mt={[0, 5]}>
                    {p.body}
                  </Text>
                  <Flex justifyContent={'space-between'} mt={[3, 5]}>
                    <Flex>
                      {p.labels?.map((l: any) => (
                        <Tag size={'sm'} h="25px" mr="1">
                          {l.name}
                        </Tag>
                      ))}
                    </Flex>
                    <Text>
                      {new Date(p.updated_at).toLocaleDateString('pt-BR', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </Text>
                  </Flex>
                </Box>
              </Flex>
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    </>
  )
}

export default Home
