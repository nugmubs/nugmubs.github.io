import * as React from "react"
import { Link, graphql } from "gatsby"
import rehypeReact from "rehype-react"
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";

const renderAst = new rehypeReact({
  createElement: React.createElement,
  // components: { "interactive-counter": Counter },
}).Compiler


deckDeckGoHighlightElement();

const BlogPostRoute = ({
  data: {markdownRemark}
}) => {
  const post = markdownRemark;

  let tags;
  let tagsSection;
  if (post.fields.tagSlugs) {
    const tagsArray = post.fields.tagSlugs
    tags = tagsArray.map((tag, i) => {
      const divider = i < tagsArray.length - 1 && <span>{`, `}</span>
      return (
        <span key={tag}>
          <Link to={tag}>{post.frontmatter.tags[i]}</Link>
          {divider}
        </span>
      )
    })
    tagsSection = (
      <span
        css={{
          fontStyle: `normal`,
          textAlign: `left`,
        }}
      >
        tagged {tags}
      </span>
    )
  }
  return <div class={"blog-container"}>
    <div >
      <header>
        <h1>{post.frontmatter.title}</h1>
        <p>{post.timeToRead} min read &middot; {tagsSection}</p>
      </header>
      <h2>Contents</h2>
      <div
        dangerouslySetInnerHTML={{ __html: post.tableOfContents }}
        className="toc"
      />
      {renderAst(post.htmlAst)}

      <hr></hr>
    </div>
  </div>
};


export default BlogPostRoute;

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      timeToRead
      tableOfContents
      fields {
        tagSlugs
      }
      frontmatter {
        title
        tags
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
