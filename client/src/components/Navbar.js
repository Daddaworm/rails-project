import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap'

const NavBar = ({ currentUser }) => {

    return (
        // <div>
        //     <nav>
        //         <ul>
        //             <li>
        //                 <Link to="/">Home</Link>
        //             </li>
        //             <li>
        //                 <Link to="/signup">Signup</Link>
        //             </li>
        //             <li>
        //                 <Link to="/login">Login</Link>
        //             </li>
        //             <li>
        //                 <Link to="/logout">Logout</Link>
        //             </li>
        //         </ul>
        //     </nav>
        // </div>
        <div>
            <Navbar variant='dark' bg='dark' expand='lg'>
            <Container fluid>
            <Navbar.Brand href="/home">Blog App</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-dark-example" />
            <Navbar.Collapse id="navbar-dark-example">
                <Nav>
                    <NavDropdown
                        id="nav-dropdown-dark-example"
                        title="Menu"
                        menuVariant="dark">
                        <NavDropdown.Item href="/signup">Sign Up</NavDropdown.Item>
                        <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                        <NavDropdown.Item href="/posts">Your Posts</NavDropdown.Item>
                        <NavDropdown.Item href="/newpost">Create Post</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/logout">Log Out</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
            <Navbar.Collapse className="justify-content-end">
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
