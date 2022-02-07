import React, {Component} from "react";
import { Jumbotron, Nav, Navbar, NavbarToggler, NavItem, NavLink } from "reactstrap";

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isNavOpen = false
        }

        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen:  !this.state.isNavOpen
        });
    }

    render() {
        return (
            <React.Fragment>
                <Jumbotron fluid>
                    <div className="container">
                        <div className="row align-self-center">
                            <div className="col-4 col-sm-3 col-md-2">
                                <a href="index.html"><img src="..images/notary-central-logo.png" alt="Notary Logo" className="img-fluid"></img></a>
                            </div>
                            <div className="col"> 
                                <h1>Notary Central A-Z</h1>
                                <h2>Your one stop shop for all your notarial needs</h2>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Navbar light sticky="top" expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <i className='fa fa-home fa-lg'/> Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/services">
                                        <i className='fa fa-list fa-lg'/> Services
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contact">
                                        <i className='fa fa-info fa-lg'/> Contact
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/faqs">
                                        <i className='fa fa-address-card fa-lg'/> FAQs 
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </React.Fragment>
        )
    }
}

export default Header;