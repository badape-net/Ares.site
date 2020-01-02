import { Component } from 'react'
import Flex from '../components/Flex'
import fetch from 'isomorphic-unfetch'
import resolveResponse from 'contentful-resolve-response'
import Marked from '../components/Marked'
import NavBar from '../components/NavBar'
import { Box } from 'rebass'

// class component (allows for state)
export default class Post extends Component {
  static async getInitialProps(context) {
    const { id } = context.query;
    const options = {credentials: 'same-origin'}

    if (typeof context !== 'undefined') {
      options.headers = {
        Authorization: context.req.headers.authorization
      }
    }

    const contentfulRes = await fetch(`http://localhost:3000/api/contentful?fields.slug=${id}&content_type=blogPost&include=1`, options);
    const data = await contentfulRes.json();
    const resData = await resolveResponse(data);

    return { 
      post: resData[0]
    };
  }

  render() {
    const {post} = this.props;
    
    return (
      <Box>
        <NavBar></NavBar>
        <Flex title={post.fields.pageTitle} description={post.fields.pageDescription}>
          <h1>{post.fields.title}</h1>
          <img src={`${post.fields.heroImage.fields.file.url}?w=600`} />
          <Marked content={post.fields.body} />
        </Flex>
      </Box>
    );
  }
}