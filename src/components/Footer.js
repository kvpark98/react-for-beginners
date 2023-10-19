import { Container } from "react-bootstrap";

function Footer() {
    return (
        <footer className="py-3 bg-dark position-absolute w-100 bottom-0">
            <Container fluid 
                className="d-flex justify-content-between pt-3">
                <p className="text-white">&copy; Reactive Movie, Inc.</p>
            </Container>
        </footer>
    );
}; 

export default Footer;