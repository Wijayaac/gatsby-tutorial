import React from 'react'
import Header from '../examples/Header';
import HeaderStatic from '../examples/HeaderStatic';
import Layout from '../components/layout';
import { graphql } from "gatsby";

const examples = ({ data }) => {
    const { site: { info: { author } } } = data
    return (
        <Layout>
            <h6>Hello from example page</h6>
            <Header />
            <HeaderStatic />
            <h2>Author : {author} </h2>
        </Layout>
    )
}

export const data = graphql`
query MyQuery {
    site {
      info: siteMetadata {
        author
        data
        description
        title
        person {
          name
          age
        }
      }
    }
  }
  
`
export default examples
