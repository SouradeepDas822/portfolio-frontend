import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const contact = () => {
  return (
    <Layout>
      <SEO title="Contact" description="Souradeep Contact Page" />
      <section className="contact-page">
        <article className="contact-form">
          <h3>get in touch</h3>
          <form action="https://formspree.io/mlepqwgp" method="POST">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="name"
                className="form-control"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="email"
                className="form-control"
                required
              />
              <textarea
                name="message"
                placeholder="message"
                className="form-control"
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn btn">
              connect
            </button>
          </form>
        </article>
      </section>
    </Layout>
  )
}

export default contact
