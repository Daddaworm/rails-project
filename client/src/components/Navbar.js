import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap'

const NavBar = ({ currentUser }) => {

    return (
        <div>
            <Navbar variant='dark' bg='primary' expand='lg' fixed='top'>
                <Container fluid>
                    <Navbar.Brand href="/home">Spectacular Blog App</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbar-dark-example" />
                    <Nav className="me-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/newpost">Create a new post</Nav.Link>
                        {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                    </Nav>
                    <Navbar.Collapse id="navbar-dark-example">
                    </Navbar.Collapse>
                    <Navbar.Collapse className="justify-content-end">
                        <Nav>
                            <NavDropdown
                                className='drop-down-menu'
                                id="nav-dropdown-dark-example"
                                title=""
                                menuvariant="dark">
                                <NavDropdown.Item href="/signup">Sign Up</NavDropdown.Item>
                                <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                                {/* <NavDropdown.Item href="/posts">Your Posts</NavDropdown.Item> */}
                                {/* <NavDropdown.Item href="/newpost">Create Post</NavDropdown.Item> */}
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/logout">Log Out</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Navbar.Text>
                            Signed in as: <a href="/home">{currentUser ? `${currentUser.username}` : "Not Signed In"}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
export default NavBar
