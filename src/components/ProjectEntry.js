import React from 'react';
import styled from "styled-components"
import { Link } from 'gatsby'

const ProjectEntry = ({ post, image }) => (
	<Root>
		<Link style={{width:'100%', display: 'block'}} to={post.frontmatter.path}>
			<ProjectContainer>
				<ProjectHeader>
					{post.frontmatter.title}
					<Highlight color={post.frontmatter.color}>
						<h1>{post.frontmatter.title}</h1>
					</Highlight>
				</ProjectHeader>
				<Details>
					<Type>{post.frontmatter.type}</Type>
					<Tools>{post.frontmatter.tools}</Tools>
				</Details>
				<ProjectImage src={image}></ProjectImage>
			</ProjectContainer>
		</Link>
	</Root>
)

const Details = styled.div`
	float: right;
    color: #2e2e2e;
	text-align: right;
	display: flex;
	align-content: baseline;
	flex-flow: column;
	padding: 23px 0;
`
const Type = styled.div`
	font-weight: 600;
`
const Tools = styled.div``

const Highlight = styled.div`
	position: absolute;
	top: -5px;
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
	width: 100%;
`

const ProjectHeader = styled.h1`
	position: relative;
	margin: 32px 0;
	display: inline-block;
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
