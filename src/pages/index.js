import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import * as Icon from 'react-feather';

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    var posts = [];
    if (data.allMarkdownRemark)
      posts = data.allMarkdownRemark.edges;

    return (
      <Layout>
        <div className="container container-main grid-md">
          {posts
            .map(({ node: post }) => (
              <div className="card" key={post.id}>
                <div className="card-header">
                  <Link to={post.fields.slug}>
                    <div className="d-inline-block card-title h5">{post.frontmatter.title}</div>
                  </Link>
                  <span> &nbsp;&bull;&nbsp; </span>
                  <div className="d-inline-block card-subtitle">{post.frontmatter.date}</div>
                </div>
                <div className="card-body">
                  {post.frontmatter.description}
                </div>
                <div className="card-footer">
                  <Link className="btn btn-sm" to={post.fields.slug}>
                    Keep Reading →
                  </Link>
                </div>
              </div>
            ))}
        </div>
        <div className="footer">
          <div className="d-inline-block float-right">
            <a className="btn btn-sm btn-link tooltip tooltip-left" data-tooltip="Settings" rel="noopener noreferrer" href="https://farmdalewaterdistrict.geosync.cloud/admin" target="_blank">
              <Icon.Settings size={16}/>
            </a>
          </div>
        </div>
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" }, draft: { ne: true } }}
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            description
            templateKey
            date(formatString: "MMMM DD, YYYY")
            draft
          }
        }
      }
    }
  }
`
