import { Component } from 'react'
import Flex from '../components/Flex'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import NavBar from '../components/NavBar'
import { Box } from 'rebass'

export default class Posts extends Component {

    static async getInitialProps(context) {
        const options = { credentials: 'same-origin' }

        if (typeof context !== 'undefined') {
            options.headers = {
                Authorization: context.req.headers.authorization
            }
        }

        const contentfulRes = await fetch(`http://localhost:3000/api/contentful?content_type=blogPost`, options)
        const data = await contentfulRes.json()

        return {
            posts: data,
        }
    }

    render() {
        
        const {posts} = this.props;

        return (
            <Box>
                <NavBar></NavBar>
                <Flex title="Blog Posts - Ares" description="Blog Posts for Ares.">
                    <ul>
                        {posts.items.map((article) => (
                            <li key={article.sys.id}>
                                <Link as={`/blog/${article.fields.slug}`} href={`/article?id=${article.fields.slug}`}>
                                    <a>{article.fields.title}</a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </Flex>
            </Box>
        );
    }
}

