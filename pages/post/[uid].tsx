import { Box, Button, Flex, Heading, Icon } from '@chakra-ui/react'
import router from 'next/router'
import React from 'react'
import { RiArrowLeftSLine } from 'react-icons/ri'
import { RichText } from 'prismic-dom'
import * as prismicH from '@prismicio/helpers'
import { Tag } from '../../components/Tag'
import styles from './post.module.css'
import { createClient, linkResolver } from '../../services/prismic'
import Head from 'next/head'

function Post({ post }: any) {
  return (
    <>
      <Head>
        <title>Pedro Costa - {post.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Box w="100%">
        <Box maxW="1400px" margin={'0 auto'} p={[3, 5]}>
          <Button
            onClick={() => router.push('/')}
            colorScheme="gray"
            leftIcon={<Icon as={RiArrowLeftSLine} />}
          >
            Voltar
          </Button>
          <Box
            as={'article'}
            maxW={'800px'}
            m={'5rem auto 0'}
            className={styles.post}
          >
            <Heading fontSize={['2rem', '3rem']}>{post.title}</Heading>
            <Flex justifyContent={'space-between'} alignItems="center">
              <time>{post.createdAt}</time>
            </Flex>

            <Tag
              tags={post.tags?.map((pos: any) => {
                return pos
              })}
            />

            <div
              className={styles.postContent}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </Box>
        </Box>
      </Box>
    </>
  )
}

export const getStaticProps = async ({ params }: any) => {
  const client = createClient()
  const { uid } = params
  const response = await client.getByUID('blog_post', uid)
  const post = {
    uid,
    title: response.data.title,
    content: RichText.asHtml(response.data.body),
    tags: response.tags,
    createdAt: new Date(response.first_publication_date).toLocaleDateString(
      'pt-BR',
      {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      }
    ),
  }
  return {
    props: { post },
    revalidate: 60, // time to update
  }
}

export const getStaticPaths = async () => {
  const client = createClient()
  const documents = await client.getAllByType('blog_post')

  return {
    paths: documents.map((doc) => prismicH.asLink(doc, linkResolver)),
    fallback: false,
  }
}

export default Post
