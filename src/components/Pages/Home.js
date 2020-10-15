import React, { Component } from 'react';
import Header from '../Common/Header';
import image from '../assets/img/header-bg.jpg';

class Home extends Component {
    render() {
        return (
            <div>
                <Header
                    title="Welcome to My Blog"
                    subtitle="It's nice to meet you"
                    buttonText="Tell me more"
                    link="/services"
                    showButton={true}
                    image={image}
                />
            </div>
        )
    }
}


export default Home;
