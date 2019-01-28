import React from 'react'
import { Link } from 'gatsby'
import styled, { keyframes, createGlobalStyle } from "styled-components"

import Resume from '../pdfs/jb_resume_spring19.pdf'
import SEO from '../components/seo'
import MainDesign from '../components/MainDesign'
import ProjectEntry from '../components/ProjectEntry'
import { media } from '../utils/breakpoints';

class IndexPage extends React.Component {
	componentDidMount() {
		if (typeof window !== 'undefined') {
			// Make scroll behavior of internal links smooth
			require('smooth-scroll')('a[href*="#"]');
		}
	}
	render() {
		const {
			data: {
				allMarkdownRemark: { edges },
			},
		} = this.props;
		return (
			<div id="index">
				<SEO title="Home" keywords={['developer', 'AI', 'design', 'web']} />
				<GlobalStyle/>
				<MainContent animation={fadeIn}>
					<TitleContent>
						<CenterContainer><MainDesign size={300}/></CenterContainer>
						<CenterContainer>
						<Bio>
							<Name>
								<NameText size="4em">John</NameText>
								<NameText size="3.4em">Britti</NameText>
								<BioLinks>
									<BioLink href={Resume} target="_blank">resume</BioLink>-
									<BioLink href="https://github.com/RoboticWater" target="_blank">github</BioLink>-
									<BioLink href="#works"
										onClick={() =>
											window.location.hash = '#works'
										}>works</BioLink>
								</BioLinks>
							</Name>
							<Blurb>
								<p>front-end developer in Atlanta, GA</p>
								<p>passionate about</p>
								<p>aesthetic interactions and</p>
								<p>adaptive technologies</p>
							</Blurb>
						</Bio>
						</CenterContainer>
					</TitleContent>
					<WorksHeader>Works</WorksHeader>
					<Works id="works">
						{edges.map(edge => <ProjectEntry key={edge.node.id} post={edge.node}></ProjectEntry>)}
					</Works>
				</MainContent>
			</div>
		)
	}
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___enddate] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            enddate(formatString: "MMMM DD, YYYY")
            startdate(formatString: "MMMM DD, YYYY")
						path
						title
						type
						tools
						color
          }
        }
      }
    }
  }
`


const Works = styled.div`
	max-width: 900px;
	margin: 0 auto;
`

const WorksHeader = styled.h1`
	font-size: 60px;
	margin: 0;
	line-height: 0.735;
	max-width: 900px;
	margin: 0 auto;
	/* text-align: right; */
	/* border-left: 20px solid #1e1e1e;
	padding-left: 15px; */
	${media.bigPhone`
		text-align: center;
	`}
  position: relative;
  &:after {
		content: '';
		position: absolute;
		top: 0;
		bottom: 0;
		width: 0;
		left: 10px;
		transition: width 0.25s cubic-bezier(.25,.46,.26,.98), left 0.25s cubic-bezier(.25,.46,.26,.98);
		background: #1E1E1E;
  }
`


const GlobalStyle = createGlobalStyle`
	h1 {
		text-transform: uppercase;
	}
	div:target {
		${WorksHeader}:after {
			width: 30px;
			left: -40px;
		}
	}
`

const fadeIn = keyframes`
  0% { opacity: 0; } 
  100% { opacity: 1; }
`

const MainContent = styled.div`
	animation: 0.5s ease ${props => props.animation};
	padding: 0 20vw;
	margin-top: 250px;
	${media.giant`
		padding: 70px;
	`}
	${media.bigPhone`
		margin-top: 0;
		padding: 20px;
		/* justify-content: center; */
	`}
`

const TitleContent = styled.div`
	justify-content: space-around;
	display: flex;
	margin-bottom: 350px;
	${media.giant`
		padding-bottom: 70px;
	`}
	${media.bigPhone`
		margin-top: 0;
		flex-flow: column;
		height: 100vh;
		padding-bottom: 20px;
		margin-bottom: 50px;
	`}
`

const Bio = styled.div`
  display: inline-block;
	flex-direction: column;
`

const Name = styled.div`
	/* flex:1; */
`

const NameText = styled.h1`
  margin: 0;
	line-height: 0.85;
	position: relative;
	left: -3px;
  ${props => props.size ? 'font-size: ' + props.size : ''}
`

const BioLinks = styled.div`
	width: 100%;
	display: block;
  padding-top: 2px;
	margin-bottom: 7px;
  a {
    color: #2e2e2e;
    text-decoration: none;
    border-bottom: 1px #3e3e3e dashed;
    margin: 0 4px;
    &:hover {
      color: #FC4C5D;
      border-bottom-color: #FC4C5D;
    }
    &:first-child {
      margin: 0 4px 0 0;
    }
    &:last-child {
      margin: 0 0 0 4px;
    }
	}
	${media.bigPhone`
		a {
			font-size: 18px;
		}
	`}
`

const BioLink = styled.a`

`

const Blurb = styled.div`
	flex:1;
	font-weight: 300;
	font-size: 22px;
	display: block;
	p {
		line-height: 1.2;
		margin: 0;
		letter-spacing: 1px;
	}
	${media.bigPhone`
		p {
			font-size: 18px;
		}
	`}
`

const CenterContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	margin: 20px 0;
`

export default IndexPage
