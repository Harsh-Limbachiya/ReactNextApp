import { Container } from 'react-bootstrap'
import MainNav from './MainNav'

export default function Layout({children}) {
  return (
    <>
    <MainNav />
    <br />
    <Container>
        {children}
    </Container>
    <br />
    </>
  )
}
// import React, { Component } from 'react'

// export default class Layout extends Component {
//   render() {
//     return (
//       <div> 
//         <MainNav />
//            <br />
//            <Container>
//                {props.children}
//            </Container>
//           <br />
//       </div>
//     )
//   }
// }
