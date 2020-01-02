import { Link, Box, Text, Flex as Base } from 'rebass'
import styled from 'styled-components'
import { display, textAlign, verticalAlign } from 'styled-system'

const NavBar = styled(Base)`
    ${props => (props.boxShadow ? `box-shadow: ${props.boxShadow};` : null)}
    ${props => (props.height ? `height: ${props.height};` : null)}
    ${props => (props.center ? `justify-content: center; align-items: center;` : null)}
    ${props => (props.border ? `border: ${props.border};` : null)}
`

export default props => (
    <NavBar  {...props} px={2} color='white' bg='black' alignItems='center' verticalAlign="top"> 
      <Text p={2} fontWeight='bold'>Ares</Text>
      <Box mx='auto' />
      <Link variant='nav' href='#!'>
        About
      </Link>
      <Link variant='nav' href='/posts'>
        Blog
      </Link>
  </NavBar>
)
