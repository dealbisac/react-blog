import React, { Component } from 'react'

class Header extends Component {
    render() {
        return (
            <header className="masthead">
                <div className="container">
                    <div className="masthead-subheading">{this.props.title}!</div>
                    <div className="masthead-heading text-uppercase">{this.props.subtitle}</div>
                    <Link
                        className="btn btn-primary btn-xl text-uppercase js-scroll-trigger"
                        href={this.props.link}
                    >{this.props.buttonText}
                    </Link>
                </div>
            </header>
        )
    }
}

export default Header;
