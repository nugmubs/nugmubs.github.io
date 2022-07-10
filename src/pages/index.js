import * as React from "react"
import { Link, graphql } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import "../styles/global.css";
import Layout from "../components/layout"
// import Seo from "../components/seo"
// import * as styles from "../components/index.module.css"

// const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges }
  }
}) => {
  console.log(edges);
  const posts = edges;
  return <Layout>
    <div>
      <h1>누그멉스의 비밀 블로그</h1>
    </div>
    <div>
    {posts.map(post => (
      <li key={post.node.fields.slug}>
        <span
          css={{
            display: `block`,
          }}
        >
          {post.node.frontmatter.date}
        </span>
        &nbsp;&nbsp;
        <Link to={post.node.fields.slug} className="link-underline">
          {post.node.frontmatter.title}
        </Link>
      </li>
    ))}
  </div>
  </Layout>
}

export default IndexPage


export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: ASC }
      filter: { frontmatter: { draft: { ne: true } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
