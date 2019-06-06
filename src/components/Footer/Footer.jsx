import React from "react";
import {
    Container,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Row,
    Col
} from 'reactstrap';

export default class Footer extends React.Component {
    render() {
        return (
            <footer className="mt-auto">
                <Container className="footer">
                    <Row>
                        <Col md="3"><h5>Terasology,<br />Moving Blocks!</h5></Col>
                        <Col md="3">
                            <ul className="footer-nav">
                                <li><a href="/">Home</a></li>
                                <li><a href="/blog">Blog</a></li>
                                <li><a href="/media">Media</a></li>
                                <li><a href="/game">The Game</a></li>
                                <li><a href="https://forum.terasology.org/">Forum</a></li>
                            </ul>
                        </Col>                        
                        <Col md="3">
                            <ul className="footer-nav">
                                <li><a href="/modules">Modules</a></li>
                                <li><a href="/contact">Contact Us</a></li>
                                <li><a href="https://www.apache.org/licenses/LICENSE-2.0">License</a></li>
                            </ul>
                        </Col>
                        <Col md="3">
                            <h5>Follow us:</h5>
                        </Col>
                    </Row>
                </Container>
            </footer>
        );
    }
}
