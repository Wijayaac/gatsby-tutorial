import React from "react"
import Layout from '../components/layout';
import { ExampleButton } from "../components/button";

export default () => (

  <Layout>
    <h1>Hello from main page</h1>
    <p style={{ color: "grey" }} >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo incidunt beatae dolore porro? Voluptatem quod pariatur reprehenderit numquam excepturi, saepe veritatis natus repellendus ullam eos!</p>
    <ExampleButton> Click Me !!</ExampleButton>
  </Layout>

)
