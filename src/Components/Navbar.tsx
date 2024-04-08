import '../CustomCss/Navbar.css'
import { Container, Navbar, Nav } from "react-bootstrap"

interface NavbarProps {
    styledClassName: string // ClassName for the Navbar to set the style of darkTheme or lightTheme
    brandName: string // Name of the brand to display in the Navbar
    imageSrcPath: string // Path of the image to display in the Navbar
}

export const NavBar = ({styledClassName, brandName, imageSrcPath }: NavbarProps) => {

    return (
            <Navbar className={styledClassName} expand="lg">
                <Container className="container-fluid">
                    <Navbar.Brand>
                        <Nav.Link className="navbar-brand" href={'/'}>
                            <img
                                src={imageSrcPath}
                                width="80"
                                height="80"
                                className="d-inline-block align-center"
                                alt="logo-image-physioterapist"
                            />
                            <span className="fw-bolder fs-4 brand-label">{brandName}</span>
                        </Nav.Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav className="me-auto justify-content-end w-100">
                            <Nav.Link href="/" className="active text-uppercase fw-bold px-3" style={{color: '#749c74'}}>
                                Estadísticas
                            </Nav.Link>
                            <Nav.Link href="/rutinas" className="active text-uppercase fw-bold px-3" style={{color: '#749c74'}}>
                                Rutinas
                            </Nav.Link>
                            <Nav.Link href="/ejercicios" className="active text-uppercase fw-bold px-3" style={{color: '#749c74'}}>
                                Ejercicios
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    {/*
                    <form className="d-flex mb-2 mb-md-0">
                        <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Buscar"
                        aria-label="Buscar"
                        />
                        <button className="btn btn-outline-success" type="submit">
                        Buscar
                        </button>
                    </form>
                    */}
                </Container>
            </Navbar>
    )
}