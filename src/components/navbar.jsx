import {Navbar,Nav,} from 'react-bootstrap'
const navbar = () =>{
return(
    <div className="navbar-components">
     <Navbar bg="primary" variant="dark">
         <div className="container-fluid"> 
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
         </div>
    </Navbar>
    </div>
)
}
export default navbar;