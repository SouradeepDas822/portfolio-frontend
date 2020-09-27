import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
import { FaFilePdf } from "react-icons/fa"
// ...GatsbyImageSharpFluid
const query = graphql`
  {
    file(relativePath: { eq: "hero-img.png" }) {
      id
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)
  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h1>I'm Souradeep</h1>
            <h4>Information Technology Analyst @ TCS</h4>
            <h3>Senior Frontend Developer</h3>
            <Link to="/contact" className="btn">
              Contact Me
            </Link>{" "}
            <a
              download={`SouradeepFrontend.pdf`}
              className="btn"
              href={`SouradeepFrontend.pdf`}
            >
              <FaFilePdf style={{ fontSize: "16px" }}></FaFilePdf> Download
              Resume{" "}
            </a>
            <SocialLinks />
          </div>
        </article>
        <Image fluid={fluid} className="hero-img" />
      </div>
    </header>
  )
}

export default Hero
