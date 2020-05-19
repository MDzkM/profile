import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Button } from "react-bootstrap"

const Template = ({ data, pageContext }) => {
	const title = data.markdownRemark.frontmatter.title;
	const date = data.markdownRemark.frontmatter.date;
	const html = data.markdownRemark.html;
	const { next, prev } = pageContext;

	return (
		<Layout>
			<SEO title={title} />
				<div style={{paddingTop: `10%`}}>
					<h1>{title}</h1>
					<div>
						<em>{date}</em>
					</div>
					<br />
					<div className="blogpost" dangerouslySetInnerHTML={{ __html: html }} />
					<div style={{display: `flex`, flexDirection: `row`, paddingTop: `5%`}}>
						<p>
							{prev && (
								<Link to={prev.frontmatter.path} style={{textDecoration: `none`}}>
									<div style={{display: `flex`, flexDirection: `row`}}>
										<Button variant="info" size="sm"><h6>{"<"}</h6></Button>
										<h4 style={{paddingLeft: `0.5rem`, marginTop: `-1.25px`}}>{prev.frontmatter.title}</h4>
									</div>
								</Link>
							)}
						</p>
						<p className="ml-auto">
							{next && (
								<Link to={next.frontmatter.path} style={{textDecoration: `none`}}>
									<div style={{display: `flex`, flexDirection: `row`}}>
										<h4 style={{paddingRight: `0.5rem`, marginTop: `-1.25px`}}>{next.frontmatter.title}</h4>
										<Button variant="info" size="sm" style={{marginBottom: `10px`}}><h6>{">"}</h6></Button>
									</div>
								</Link>
							)}
						</p>
					</div>
				</div>
		</Layout>
	);
};

export const postQuery = graphql`
	query($pathSlug: String!) {
		markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
			html
			frontmatter {
				title
				date(formatString: "MMMM, DD, YYYY")
				path
				tags
				excerpt
			}
		}
	}
`

export default Template