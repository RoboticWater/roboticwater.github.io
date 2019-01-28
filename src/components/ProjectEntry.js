import React from 'react';
import styled from "styled-components"
import { Link } from 'gatsby'

const ProjectEntry = ({ post, color, image }) => (
	<Root>
		<Link to={post.frontmatter.path}>
			<ProjectContainer>
				<ProjectHeader>{post.frontmatter.title}</ProjectHeader>
				<Highlight color={color}>
					<h1>{post.frontmatter.title}</h1>
				</Highlight>
				<ProjectImage src={image}></ProjectImage>
			</ProjectContainer>
		</Link>
	</Root>
)



const Highlight = styled.div`
	position: absolute;
	top: 27px;
	left: -10px;
	width: 0;
	overflow: hidden;
	background: ${props => props.color ? props.color : '#1e1e1e'};
	transition: width 0.22s ease;
	white-space:nowrap;
	h1 {
		margin: 5px 10px 5px 10px;
	color: #fff;
	}
`

const ProjectContainer = styled.div`
	position: relative;
	display: inline-block;
`

const ProjectHeader = styled.h1`
	position: relative;
	margin: 32px 0;
`


const ProjectImage = styled.img`
	position: absolute;
	bottom: 0;
	height: 100%;
	opacity: 0;
	pointer-events: none;
	transition: opacity 0.2s cubic-bezier(.7,.04,.08,.91);
`

const Root = styled.div`
	border-bottom: 3px #1e1e1e solid;
	cursor: pointer;
	&:hover {
		${ProjectImage} {
			opacity: 1;
		}
		${Highlight} {
			width: calc(100% + 20px);
		}
	}
`

export default ProjectEntry;
