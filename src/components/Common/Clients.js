import React, { Component } from 'react'

class Clients extends Component {
    render() {
        return (
            <div className="py-5">
                <div className="container bg-light-gray">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Our Clients</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                    <div className="row">
                        <div className="col-md-3 col-sm-6 my-3">
                            <a href="#!"><img className="img-fluid d-block mx-auto" src="assets/img/logos/envato.jpg" alt="" /></a>
                        </div>
                        <div className="col-md-3 col-sm-6 my-3">
                            <a href="#!"><img className="img-fluid d-block mx-auto" src="assets/img/logos/designmodo.jpg" alt="" /></a>
                        </div>
                        <div className="col-md-3 col-sm-6 my-3">
                            <a href="#!"><img className="img-fluid d-block mx-auto" src="assets/img/logos/themeforest.jpg" alt="" /></a>
                        </div>
                        <div className="col-md-3 col-sm-6 my-3">
                            <a href="#!"><img className="img-fluid d-block mx-auto" src="assets/img/logos/creative-market.jpg" alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Clients;
