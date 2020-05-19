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
				<h1 style={{textAlign: `center`}}>My Blog Posts</h1>
				<p style={{textIndent: `2rem`, paddingTop: `2%`, paddingBottom: `3%`, textAlign: `justify`, textJustify: `inter-word`}}>The content of these posts may vary. Some of this might be informative to you, but others are for my personal entertainment. Although most of these would probably be my ramblings about my not-very-few-and-far-between random musings. I hope that you enjoy your time here!</p>
				{edges.map((edge, id) => {
					const { frontmatter } = edge.node;
					return (
                        <>
                            {id !== 0 ? <hr/> : <></>}
                            <div key={frontmatter.path}>
                                <div style={{display: `flex`, flexDirection: `row`}}>
                                    <Link to={frontmatter.path}><h2 style={{fontFamily: `georgia`}}>{frontmatter.title}</h2></Link>
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