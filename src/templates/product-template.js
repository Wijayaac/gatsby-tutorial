import React from "react"
import { graphql, Link } from "gatsby"
import Image from 'gatsby-image';
import Layout from '../components/layout';
import { ExampleButton } from "../components/button";

const ComponentName = ({ data: { product: { price, title, image: { fixed }, info: { info }, }, }, }) => {
    return (
        <Layout>
            <div style={{ textAlign: "center" }} >
                <Link to="/products">Shop more</Link>
                <h1>Special Product:{title} </h1>
            </div>
            <section className="single-product">
                <article>
                    <Image fixed={fixed} alt={title} />
                </article>
                <article>
                    <h2>{title}</h2>
                    <h4>$ {price} </h4>
                    <p>{info} </p>
                    <ExampleButton>Add to Cart</ExampleButton>
                </article>
            </section>
        </Layout>
    )
}

export const query = graphql`
    query GetSingleProduct($slug:String){
    product: contentfulProduct(slug: {eq: $slug}) {
      image {
        fixed(width:300) {
          ...GatsbyContentfulFixed
        }
      }
      price
      title
      info {
        info
      }
    }
  }
`


export default ComponentName
