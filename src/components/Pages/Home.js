import React, { Component } from 'react';
import Header from '../Common/Header';
import image from '../assets/img/header-bg.jpg';

//Reusable Components
import Services from '../Common/Services';
import Portfolio from './Portfolio';
import Clients from '../Common/Clients';

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
                <Portfolio />
                <Clients />
            </div>
        )
    }
}

export default Home;
