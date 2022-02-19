import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    
    return (
        <div className="container">
            <div className="row row-content align-items-left">
                <div className="col-4 text-center">

                    <h5>Notary Central A-Z</h5>
                    <address>
                        1000 Northeast 14th Avenue <br />
                        Hallandale Beach, Fl 33009
                    </address>
                </div>
                <div className="col-4 text-center">
                    <h5>Follow Us</h5>
                    <a className="btn btn-social-icon btn-facebook" href="http://facebook.com/"><i className="fa fa-facebook fa-lg"></i></a>
                    <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter fa-lg"></i></a>
                    <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram fa-lg"></i></a>
                    
                    
                </div>
                <div className="col-4 text-center">
                    <h5>Links</h5>
                    <ol className="list-unstyled">
                        <li><Link href="index.html">Home</Link></li>
                        <li><Link href="services.html">Services</Link></li>
                        <li><Link href="#">Contact</Link></li>
                        <li><Link href="#">FAQs</Link></li>
                    </ol>
                </div>
           </div>
       </div>
    )
}

export default Footer;