import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const ComponentName = () => {
    const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
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
  `)
    return (
        <div>
            <h2>Name : {data.site.siteMetadata.person.name} </h2>
            <h2>Age : {data.site.siteMetadata.person.age} </h2>
        </div>
    )
}

export default ComponentName
