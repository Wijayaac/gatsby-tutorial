import React from 'react'
import { useStaticQuery, graphql } from "gatsby";
const getData = graphql`
{
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

const Header = () => {
    // const data = useStaticQuery(getData);
    const { site: { info: { title, person: { name, age } } } } = useStaticQuery(getData)
    return (
        <div>
            {/* <h1>Title : {data.site.info.title} </h1> */}
            {/* <h1>Name : {data.site.info.person.name} </h1> */}
            <h1>Title : {title} </h1>
            <h1>Name : {name} </h1>
        </div>
    )
}

export default Header
