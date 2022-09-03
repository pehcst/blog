import { Box, Button, Flex, Heading, Icon } from '@chakra-ui/react'
import ReactMarkdown from 'react-markdown'
import router from 'next/router'
import React from 'react'
import { RiArrowLeftSLine } from 'react-icons/ri'
import { Tag } from '../../components/Tag'
import { api } from '../../services/api'
import styles from './post.module.css'

function Post({ post }: any) {
  return (
    <Box w="100%">
      <Box maxW="1400px" margin={'0 auto'} p="5">
        <Button
          onClick={() => router.push('/')}
          colorScheme="gray"
          leftIcon={<Icon as={RiArrowLeftSLine} />}
        >
          Voltar
        </Button>
        <Box mt="50px" p="5" borderRadius={'10'}>
          <Box
            as={'article'}
            maxW="800px"
            m={'5rem auto 0'}
            className={styles.post}
          >
            <Heading fontSize={['2rem', '3rem']}>{post.title}</Heading>
            <Flex justifyContent={'space-between'} alignItems="center">
              <time>
                {new Date(post.created_at).toLocaleDateString('pt-BR', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </time>
            </Flex>

            <Tag
              tags={post.labels?.map((pos: any) => {
                return pos.name
              })}
            />

            <div className={styles.postContent}>
              <ReactMarkdown>{post.body}</ReactMarkdown>
            </div>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export async function getStaticProps({ params }: any) {
  const res = await api.get(`/repos/pehcst/blog/issues/${params.number}`)

  const post = {
    ...res.data,
  }

  return {
    props: { post },
    revalidate: 60, // time to update 60 seconds
  }
}

export async function getStaticPaths() {
  const res = await api.get(`/repos/pehcst/blog/issues`, {
    params: {
      q: 'repo:pehcst/blog is:issue is:closed',
    },
  })
  const paths = res.data.map((post: { number: number }) => ({
    params: { number: post?.number },
  }))

  return { paths, fallback: true }
}

export default Post
