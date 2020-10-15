import React, { Component } from 'react';
import Header from '../Common/Header';
import image from '../assets/img/header-bg.jpg';

//Reusable Components
import Services from '../Common/Services';

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

                <Services />
            </div>
        )
    }
}


export default Home;
