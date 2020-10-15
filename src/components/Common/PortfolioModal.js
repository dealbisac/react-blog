import React, { Component } from 'react'

class PortfolioModal extends Component {
    render() {
        return (
            <div className="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="close-modal" data-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <div className="modal-body">
                                        {/* -- Project Details Go Here-- */}
                                        <h2 className="text-uppercase">{this.props.title}</h2>
                                        <p className="item-intro text-muted">{this.props.subtitle}</p>
                                        <img className="img-fluid d-block mx-auto" src={this.props.image} alt="" />
                                        <p>{this.props.description}</p>
                                        <ul className="list-inline">
                                            <li>Date: {this.props.date}</li>
                                            <li>Client: {this.props.clientName}</li>
                                            <li>Category: {this.props.category}</li>
                                        </ul>
                                        <button className="btn btn-primary" data-dismiss="modal" type="button">
                                            <i className="fas fa-times mr-1"></i>
                                        Close Project
                                    </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PortfolioModal;
