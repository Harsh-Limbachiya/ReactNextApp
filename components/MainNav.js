import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link'

export default function MainNav() {
  return (
    <>
     <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Harsh Limbachiya</Navbar.Brand>
          <Nav className="me-auto">
            <Link href="/" passHref><Nav.Link >Movies</Nav.Link></Link>
            <Link href="/about" passHref><Nav.Link >About</Nav.Link></Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
      <br />
   </>
  )
}
