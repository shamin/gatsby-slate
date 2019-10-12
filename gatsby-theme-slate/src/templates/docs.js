import React, { Component } from 'react'
import { graphql } from "gatsby"
import Docs from '../components/docs'
import '../stylesheets/style.scss'
import '../stylesheets/prism-dracula.css'

export default class DocTemplate extends Component {
  render() {
    const docsData = this.props.data.markdownRemark
    return (
      <Docs docs={docsData} />
    )
  }
}

export const pageQuery = graphql`
  query {
    markdownRemark(fileAbsolutePath: {ne: "docs/index.md"}) {
      html
      htmlAst
      frontmatter {
        language_tabs
      }
    }
  }  
`
