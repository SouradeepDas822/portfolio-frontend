import React from "react"
import {
  FaFacebookSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaInstagramSquare,
  FaGoodreads,
} from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaFacebookSquare className="social-icon"></FaFacebookSquare>,
    url: "https://www.facebook.com/souradeep.das.5025/",
  },
  {
    id: 2,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com/in/souradeep-das-9467a326/",
  },
  {
    id: 3,
    icon: <FaInstagramSquare className="social-icon"></FaInstagramSquare>,
    url: "https://www.instagram.com/_souradeep.das_/",
  },
  {
    id: 4,
    icon: <FaTwitterSquare className="social-icon"></FaTwitterSquare>,
    url: "https://twitter.com/Souradeep822",
  },
  {
    id: 5,
    icon: <FaGoodreads className="social-icon"></FaGoodreads>,
    url: "https://www.goodreads.com/souradeepdas",
  },
]
const links = data.map(link => {
  return (
    <li key={link.id}>
      <a href={link.url} className="social-link">
        {link.icon}
      </a>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
}
