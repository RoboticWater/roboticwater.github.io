import React from "react"
import { graphql } from "gatsby"
import styled, { createGlobalStyle } from "styled-components"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <div className="blog-post-container">
      <GlobalStyle/>
      <div className="blog-post">
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        startdate(formatString: "MMMM DD, YYYY")
        enddate(formatString: "MMMM DD, YYYY")
        path
        title
        type
        tools
        color
      }
    }
  }
`
const GlobalStyle = createGlobalStyle`
	h1 {
		text-transform: uppercase;
	}
`