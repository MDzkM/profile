import React, { Component } from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Pagination } from "react-bootstrap"
import styled from "styled-components"
import Image from "../components/image"
import { getLightMode } from "../services/useLightMode"

export const Styles = styled.div`
	.search-box {
		display: flex;
		flex-direction: row;
		padding-bottom: 3%;
	}

	.session-search {
		height: 60px;
		width: 80%;
		padding-left: 1rem;
		border-right: 0;
		box-sizing: border-box;
		border-radius: 16px 0 0 16px;
		font-size: 1.25rem;
		transition: all 0.25s linear;
	}

	.looking-glass {
		height: 60px;
		width: 20%;
		border-left: 0;
		box-sizing: border-box;
		border-radius: 0 16px 16px 0;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		position: relative;
		padding-right: 3%;
		transition: all 0.25s linear;
	}

	.looking-img-wrapper {
		width: 30px;
		height: 30px;
		transition: all 0.25s linear;
	}

	input[type="text"]::placeholder, input[type="text"]::-webkit-input-placeholder {
		color: #CACCCF;
	}

	.post-card {
		margin-top: 3%;
		margin-bottom: 3%;
		padding: 3%;
		box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
		box-sizing: border-box;
		border-radius: 8px;
		transition: all 0.25s linear;
	}

	.post-card:active, .post-card:focus, .post-card:hover {
		transform: scale(1.01);
	}

    .pagination {
		justify-content: center;
		align-self: center;
		padding-top: 3%;
	}
	
	.light {
		opacity: 0.5;
	}

	.dark {
		opacity: 0.075;
	}
`

class BlogPage extends Component {
	constructor(props) {
		super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handlePageChange = this.handlePageChange.bind(this)
		this.state = {
			data: props.data.allMarkdownRemark.edges,
			showedPosts: props.data.allMarkdownRemark.edges,
			activePage: 1,
		}
	}

	componentDidMount() {
		const { data } = this.state
		this.setState({
			showedPosts: data
		})
	}

    handleChange(e) {
		let filteredPosts = []
		
		if (e.target.name === "searchbox") {
			if (e.target.value !== "") {
                filteredPosts = this.state.data.filter(post => {
                    const matchableTitle = post.node.frontmatter.title.toLowerCase();
                    const matchableDate = post.node.frontmatter.date.toLowerCase();
                    const matchablePath = post.node.frontmatter.path.toLowerCase();
                    const matchableTags = post.node.frontmatter.tags;
                    const matchableExcerpt = post.node.frontmatter.excerpt.toLowerCase();
                    const toMatch = e.target.value.toLowerCase();
                    if (matchableTitle.includes(toMatch) || matchableDate.includes(toMatch) || matchablePath.includes(toMatch) || matchableTags.includes(toMatch) || matchableExcerpt.includes(toMatch)) {
                        return true
                    }
                    return false;
                })
            }
            else {
				filteredPosts = this.state.data
            }
        } else {
			filteredPosts = this.state.data
        }

        let { activePage } = this.state
        let maxPage = Math.floor((filteredPosts.length - 1)/5) + 1
        if (activePage > maxPage) activePage = maxPage
        
        this.setState({
          showedPosts: filteredPosts,
          activePage: activePage,
        });
      }

    handlePageChange(e) {
        if (!e.target.text) return
        if (e.target.text === '>') {
          if (this.state.activePage !== Math.floor((this.state.showedPosts.length - 1)/5) + 1) {
            this.setState({activePage: this.state.activePage + 1})
          }
        }
        else if (e.target.text === '<') {
          if (this.state.activePage !== 1) {
            this.setState({activePage: this.state.activePage - 1})
          }
        }
        else {
          this.setState({activePage: Number(e.target.text)});
        }
	}
	
	render() {
		const { showedPosts, activePage } = this.state
        let pageNumbers = [];
        let temp = [];
        let maxPage = Math.floor((showedPosts.length - 1)/5) + 1
        
        pageNumbers.push(<Pagination.Item key='<'>{'<'}</Pagination.Item>)
        
        for (let pageNumber = 1; pageNumber <= maxPage; pageNumber++) {
            temp.push(
                <Pagination.Item key={pageNumber} active={pageNumber === activePage}>
                {pageNumber}
                </Pagination.Item>
            );
        }

        const minLimit = () => {
            if (activePage === 1) {
                return activePage - 1
            }
            else if (activePage === maxPage && maxPage > 2) {
                return activePage - 3
            }
            else {
                return activePage - 2
            }
        }
        
        const maxLimit = () => {
            if (activePage <= maxPage - 2 && activePage === 1) {
                return activePage + 2
            }
            else if (activePage <= maxPage - 2) {
                return activePage + 1
            }
            else {
                return maxPage
            }
        }
        
        temp.slice(minLimit(), maxLimit()).map((pageNumber) => pageNumbers.push(pageNumber))
        
		pageNumbers.push(<Pagination.Item key='>'>{'>'}</Pagination.Item>)
		
		let slicedShowedPosts

        if (this.state.activePage === 0) {
            this.setState({activePage: 1})
            slicedShowedPosts = showedPosts.slice((activePage - 1) * 5, activePage * 5)
        }
        else {
            slicedShowedPosts = showedPosts.slice((activePage - 1) * 5, activePage * 5)
		}
		
		console.log(slicedShowedPosts)

		return (
			<Layout>
				<SEO title="Blog" />
				<Styles>
					<div style={{paddingTop: `10%`, paddingLeft:  `1.0875rem`, paddingRight:  `1.0875rem`}}>
						<h1 style={{textAlign: `center`}}>My Blog Posts</h1>
						<p style={{paddingTop: `2%`, paddingBottom: `3%`, textAlign: `justify`, textJustify: `inter-word`}}>The content of these posts may vary. Some of this might be informative to you, but others are for my personal entertainment. Although most of these would probably be my ramblings about my not-very-few-and-far-between random musings. I hope that you enjoy your time here!</p>
						<div className="search-box">
							<input type="text" name="searchbox" className="session-search" onChange={this.handleChange} placeholder="Looking for a specific post?"></input>
							<div className="looking-glass">
								<div className={`looking-img-wrapper ${getLightMode() !== "" ? `dark` : `light`}`}>
									{getLightMode() !== "" ? 
									<Image imgName="magnifying-glass.png" alt="magnifying-glass" />
									:	
									<Image imgName="magnifying-glass-light.png" alt="magnifying-glass-light" />
									}
								</div>
							</div>
						</div>
						{slicedShowedPosts.map((post, id) => {
							const { frontmatter } = post.node
							return (
								<Link to={frontmatter.path} style={{textDecoration: `none`}}>
									<div className="post-card" key={frontmatter.path}>
										<div style={{display: `flex`, flexDirection: `row`}}>
											<h2 style={{fontWeight: 900}}>{frontmatter.title}</h2>
											&nbsp;
										</div>
										<p>{frontmatter.excerpt}</p>
										<small className="ml-auto mt-3">
											<em>published on</em> {frontmatter.date}
										</small>
									</div>
								</Link>
							)
						})}
						{pageNumbers.length > 2 ? <Pagination onClick={this.handlePageChange}>{pageNumbers}</Pagination> : <></>}
					</div>
				</Styles>
			</Layout>
		)
	}
}

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