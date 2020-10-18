import React, { Component } from 'react';
import Header from '../Common/Header';
import image from '../assets/img/header-bg.jpg';
import Field from '../Common/Field';
import { withFormik } from 'formik';
import * as Yup from 'yup';

const fields = {
    sections: [
        [
            { name: 'name', elementName: 'input', type: 'text', placeholder: 'Your Name*' },
            { name: 'email', elementName: 'input', type: 'email', placeholder: 'Your Email*' },
            { name: 'phone', elementName: 'input', type: 'text', placeholder: 'Your Phone*' }

        ],
        [
            { name: 'message', elementName: 'textarea', type: 'text', placeholder: 'Your Message*' }
        ]
    ]
}


class Contact extends Component {
    render() {
        return (
            <div>
                <Header
                    title="Wanna Connect with us"
                    subtitle="Just Leave a message, we will get back to you."
                    showButton={false}
                    image={image}
                />

                <section className="page-section" id="contact">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="section-heading text-uppercase">Contact Us</h2>
                                <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                            </div>
                        </div>
                        <form onSubmit={this.props.handleSubmit} name="sentMessage" novalidate="novalidate">
                            <div className="row align-items-stretch mb-5">
                                {fields.sections.map((section, sectionIndex) => {
                                    // console.log("Rendering Section", sectionIndex, "with", section);
                                    return (
                                        <div className="col-md-6" key={sectionIndex}>
                                            {section.map((field, i) => {
                                                return <Field
                                                    {...field}
                                                    key={i}
                                                    value={this.props.values[field.name]}
                                                    name={field.name}
                                                    onChange={this.props.handleChange}
                                                    onBlur={this.props.handleBlur}
                                                    touched={(this.props.touched[field.name])}
                                                    errors={this.props.errors[field.name]}
                                                />
                                            })}
                                        </div>
                                    )
                                })}
                                <div className="clearfix"></div>
                                <div className="col-lg-12 text-center">
                                    <div id="success"></div>
                                    <button className="btn btn-primary btn-xl text-uppercase" type="submit">Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        )
    }
}

export default withFormik({
    mapPropsToValues: () => ({
        name: '',
        email: '',
        phone: '',
        message: '',
    }),
    validationSchema: Yup.object().shape({
        name: Yup.string().required('You must provide name.').min(3, 'Please provide your real name.'),
        email: Yup.string().email('You need to provide valid email.').required('You must provide email.'),
        phone: Yup.string()
            .min(10, 'Please provide your 10 digit number.')
            .max(15, 'Your phone number is too long')
            .required('You must provide your phone.'),
        message: Yup.string()
            .min(20, 'You need provide us more detailed information')
            .required('Your message is required.')

    }),
    handleSubmit: (values, { setSubmitting }) => {
        // console.log("VALUES", values);
        alert("You have successfully submitted the form", JSON.stringify(values));
    }
})(Contact);
