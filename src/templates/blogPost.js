import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Button } from "react-bootstrap"
import styled from "styled-components"

export const Styles = styled.div`
	.blog {
		padding-top: 10%;
		padding-left:  1.0875rem;
		padding-right:  1.0875rem;
	}

	.title {
		font-weight: 900;
	}

	.blogpost {
		text-align: justify;
		text-justify: inter-word;
	}

	.blogpost a {
		color: #007bff!important;
	}

	.blogpost img {
		display: block;
		margin-left: auto;
		margin-right: auto;
	}

	.other-title {
		font-weight: 900;
		margin: auto;
	}

	.other-title:focus, .other-title:hover {
		opacity: 0.7;
	}

	.prev {
		padding-left: 0.5rem;
		text-align: left;
	}

	.next {
		padding-right: 0.5rem;
		text-align: right;
	}
`

const Template = ({ data, pageContext }) => {
	const title = data.markdownRemark.frontmatter.title;
	const date = data.markdownRemark.frontmatter.date;
	const html = data.markdownRemark.html;
	const { next, prev } = pageContext;

	return (
		<Layout>
			<SEO title={title} />
				<Styles>
					<div className="blog">
						<h1 className="title">{title}</h1>
						<div>
							<em>{date}</em>
						</div>
						<br />
						<div className="blogpost" dangerouslySetInnerHTML={{ __html: html }} />
						<div style={{display: `flex`, flexDirection: `row`, paddingTop: `5%`}}>
							<p className="mr-auto">
								{prev && (
									<Link to={prev.frontmatter.path} style={{textDecoration: `none`}}>
										<div style={{display: `flex`, flexDirection: `row`, height: `100%`}}>
											<Button variant="info" size="sm" style={{height: `auto`}}><h6>{"<"}</h6></Button>
											<h4 className="other-title prev">{prev.frontmatter.title}</h4>
										</div>
									</Link>
								)}
							</p>
							<p className="ml-auto">
								{next && (
									<Link to={next.frontmatter.path} style={{textDecoration: `none`}}>
										<div style={{display: `flex`, flexDirection: `row`, height: `100%`}}>
											<h4 className="other-title next">{next.frontmatter.title}</h4>
											<Button variant="info" size="sm" style={{height: `auto`}}><h6>{">"}</h6></Button>
										</div>
									</Link>
								)}
							</p>
						</div>
					</div>
				</Styles>
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