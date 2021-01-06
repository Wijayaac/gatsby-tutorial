import React from 'react'
import { graphql, useStaticQuery } from "gatsby";
import img from '../images/image-4.jpg';
import Image from 'gatsby-image';

const getImages = graphql`
{
    fixed: file(relativePath: {eq: "image-3.jpg"}) {
      childImageSharp {
        fixed(width: 200, grayscale: true) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluid: file(relativePath: {eq: "image-4.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`
const Images = () => {
    const data = useStaticQuery(getImages)
    return (
        <section className="images">
            <article className="single-image" >
                <h3>Normal import image</h3>
                <img src={img} width="100%" alt="basic" />
                <h4>Your caption here</h4>
            </article>
            <article className="single-image" >
                <h3>Fixed / Blur</h3>
                <Image fixed={data.fixed.childImageSharp.fixed} />
                <h4>Your caption here</h4>
            </article>
            <article className="single-image" >
                <h3>Fluid SVG</h3>
                <Image fluid={data.fluid.childImageSharp.fluid} />
                <h4>Your caption here</h4>
            </article>
        </section>
    )
}

export default Images
