import { Container } from "react-bootstrap";

function Footer() {
    return (
        <footer className="py-4 bg-dark position-absolute w-100 bottom-0">
            <Container fluid 
                className="d-flex justify-content-between">
                <p className="text-white m-0">&copy; Reactive Movie, Inc.</p>
            </Container>
        </footer>
    );
}; 

export default Footer;