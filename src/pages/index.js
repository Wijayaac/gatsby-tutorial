import React from "react"
import { Link } from 'gatsby'
import Navbar from '../components/Navbar';

export default function Home() {
  return <div>
    <Navbar />
    <h1>Hello people</h1>
    <Link to="/blog/">Go to blog page</Link><br />
    <a href="https://www.gatsbyjs.com" >Read the docs here</a>
  </div>
}
