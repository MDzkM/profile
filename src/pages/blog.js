import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPage = ({ data }) => {
	const { edges } = data.allMarkdownRemark;

	return (
		<Layout>
            <SEO title="Blog" />
			<div style={{paddingTop: `10%`}}>
				{edges.map((edge, id) => {
					const { frontmatter } = edge.node;
					return (
                        <>
                            {id !== 0 ? <hr/> : <></>}
                            <div key={frontmatter.path}>
                                <div style={{display: `flex`, flexDirection: `row`}}>
                                    <Link to={frontmatter.path}><h2>{frontmatter.title}</h2></Link>
                                    &nbsp;
                                </div>
                                <p>{frontmatter.excerpt}</p>
                                <small className="ml-auto mt-3">
                                    <em>published on</em> {frontmatter.date}
                                </small>
                            </div>
                        </>
					);
				})}
			</div>
		</Layout>
	);
};

export const query = graphql`
	query {
		allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
			totalCount
			edges {
				node {
					id
					frontmatter {
						title
						date(formatString: "MMMM DD, YYYY")
						path
						tags
						excerpt
					}
				}
			}
		}
	}
`;

export default BlogPage;