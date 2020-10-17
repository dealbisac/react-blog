import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <footer className="footer py-4">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4 text-lg-left">Copyright © Business Startup 2020</div>
                        <div className="col-lg-4 my-3 my-lg-0">
                            <a className="btn btn-dark btn-social mx-2" href="https://twitter.com/DipendraBdChand" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="https://www.facebook.com/dipendrabdrchand/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="https://www.linkedin.com/in/dealbisac/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                        <div className="col-lg-4 text-lg-right">
                            <a className="mr-3" href="#!">Privacy Policy</a>
                            <a href="#!">Terms of Use</a>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;
