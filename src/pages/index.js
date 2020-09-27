import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"
import SEO from "../components/SEO"
import { FaArrowUp } from "react-icons/fa"

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}
export default ({ data }) => {
  const [showArrow, setShowArray] = React.useState(false)
  React.useEffect(() => {
    document.addEventListener("scroll", _ => {
      if (window.pageYOffset > 1500) {
        setShowArray(true)
      }
      if (window.pageYOffset < 1000) {
        setShowArray(false)
      }
    })
  })
  const {
    allStrapiProjects: { nodes: projects },
    allStrapiBlogs: { nodes: blogs },
  } = data
  return (
    <Layout>
      <SEO title="Home" description="Portfolio Home Page" />
      {showArrow && (
        <Link to={"/#main-hero-section"} id="scrolltoTop">
          <FaArrowUp></FaArrowUp>
        </Link>
      )}
      <Hero />
      <Services />
      <Jobs />
      <Projects projects={projects} title="featured project" showLink />
      <Blogs blogs={blogs} title="Latest Articles" showLink />
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiProjects(filter: { featured: { eq: true } }) {
      nodes {
        github
        id
        description
        title
        url
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          title
        }
      }
    }

    allStrapiBlogs(sort: { fields: date, order: DESC }, limit: 3) {
      nodes {
        slug
        content
        desc
        date(formatString: "MMMM Do, YYYY")
        id
        title
        category
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
