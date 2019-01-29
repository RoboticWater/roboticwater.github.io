import React from 'react'
import styled, { keyframes } from "styled-components"

import sail0 from '../images/sail0.svg';
import sail1 from '../images/sail1.svg';
import sail2 from '../images/sail2.svg';
import sail3 from '../images/sail3.svg';

const slideUp = keyframes` 
  0% { left: -20%; } 
  100% { left: 0; }
`

const slideDown = keyframes `
  0% { left: 20%; } 
  100% { left: 0; }
`

const scaleIn = keyframes `
  0% { transform: scale(0.7); } 
  100% { transform: none; }
`

const Design = styled.div`
  perspective: ${props => props.size * 0.15}px;
  display: flex;
  flex-flow: column;
	width: ${props => props.size}px;
	height: ${props => props.size * 0.8533}px;
	transform: rotate(-90deg) translateY(${props => props.size * 0.0667}px);
	transform-style: preserve-3d;
`

const MainText = styled.h1`
	line-height: 0;
  position: relative;
	margin: ${props => props.margin ? props.margin : 0};
  text-align: center;
  font-size: ${props => props.place ? (props.size / 4) : (props.size / 3.75)}px;
  z-index: ${props => props.index};
	animation: 0.65s cubic-bezier(.25,.46,.26,.98) ${props => props.animation};
`

const Sail = styled.img`
	margin: 0 auto;
	width: ${props => props.size};
	z-index: ${props => props.index};
`

function MainDesign({size}) {
  return (<Design size={size}>
		<Sail src={sail0} index={0} alt="" size="120px" />
    <MainText size={size} index={1} place="top" animation={slideDown} margin="4px 0 22px">Code</MainText>
		<Sail src={sail1} index={2} alt="" size="154px"/>
    <MainText size={size} index={3} animation={scaleIn} margin="12px 0">AI</MainText>
		<Sail src={sail2} index={2} alt="" size="154px"/>
    <MainText size={size} index={1} place="bottom" animation={slideUp} margin="22px 0 4px">Design</MainText>
		<Sail src={sail3} index={0} alt="" size="120px"/>
  </Design>)
} 

export default MainDesign;