import React, { Component } from 'react';
import Header from '../Common/Header';

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
                    image={process.env.PUBLIC_URL + '/assets/img/header-bg.jpg'}

                />
            </div>
        )
    }
}


export default Home;
