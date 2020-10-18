import React, { Component } from 'react'

class Field extends Component {
    render() {
        return (
            <div className="form-group">
                {this.props.elementName === 'input' ?
                    <input
                        className="form-control mb-md-0"
                        id={this.props.name}
                        type={this.props.type}
                        placeholder={this.props.placeholder}
                        required="required"
                        data-validation-required-message="Please enter the value"
                        name={this.props.name}
                        onChange={this.props.onChange}
                        onBlur={this.props.onBlur}
                    />
                    :
                    <div className="form-group form-group-textarea mb-md-0">
                        <textarea
                            className="form-control"
                            id={this.props.name}
                            type={this.props.type}
                            placeholder={this.props.placeholder}
                            required="required"
                            data-validation-required-message="Please enter a message"
                            name={this.props.name}
                            onChange={this.props.onChange}
                            onBlur={this.props.onBlur}
                        />
                    </div>
                }
                < p className="help-block text-danger" >
                    {(this.props.touched && this.props.errors) &&
                        <span>This field is required!</span>}
                </p >
            </div >

        )
    }
}

export default Field;
