import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";


function Linkk({name , url}){
    return(<>

         <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href={url[0]}>{name[0]}</Nav.Link>
                        <Nav.Link href={url[1]}>{name[1]}</Nav.Link>
                        <Nav.Link href={url[2]}>{name[2]}</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
    </>)
}


export default Linkk ;
