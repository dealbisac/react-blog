import React, { Component } from 'react';
import PortfolioItem from '../Common/PortfolioItem';
import PortfolioModal from '../Common/PortfolioModal';

// Images for the Portfolio
import img1 from '../assets/img/portfolio/01-thumbnail.jpg';
import img2 from '../assets/img/portfolio/02-thumbnail.jpg';
import img3 from '../assets/img/portfolio/03-thumbnail.jpg';
import img4 from '../assets/img/portfolio/04-thumbnail.jpg';
import img5 from '../assets/img/portfolio/05-thumbnail.jpg';
import img6 from '../assets/img/portfolio/06-thumbnail.jpg';
import img01 from '../assets/img/portfolio/01-full.jpg';
import img02 from '../assets/img/portfolio/02-full.jpg';
import img03 from '../assets/img/portfolio/03-full.jpg';
import img04 from '../assets/img/portfolio/04-full.jpg';
import img05 from '../assets/img/portfolio/05-full.jpg';
import img06 from '../assets/img/portfolio/06-full.jpg';

const portfolio = [
    { title: 'Threads', subtitle: 'Illustration', image: img1 },
    { title: 'Explore', subtitle: 'Graphic Design', image: img2 },
    { title: 'Finish', subtitle: 'Identity', image: img3 },
    { title: 'Lines', subtitle: 'Branding', image: img4 },
    { title: 'Southwest', subtitle: 'Website Design', image: img5 },
    { title: 'Window', subtitle: 'Photography', image: img6 },

];

const modals = [
    { title: 'Threads', subtitle: 'Illustration', image: img01, description: 'Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!', date: 'January 2020', clientName: 'KTM City', category: 'Website Design' },
    { title: 'Explore', subtitle: 'Graphic Design', image: img02, description: 'Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!', date: 'March 2019', clientName: 'IME Pay', category: 'Digital Marketing' },
    { title: 'Finish', subtitle: 'Identity', image: img03, description: 'Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!', date: 'October 2019', clientName: 'Khalti Digital', category: 'Logo Designing' },
    { title: 'Lines', subtitle: 'Branding', image: img04, description: 'Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!', date: 'April 2020', clientName: 'eSewa Inc.', category: 'Graphics Designing' },
    { title: 'Southwest', subtitle: 'Website Design', image: img05, description: 'Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!', date: 'January 2019', clientName: 'Apple', category: 'Photography' },
    { title: 'Window', subtitle: 'Photography', image: img06, description: 'Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!', date: 'December 2017', clientName: 'Swift Tech', category: 'Identity' },

];

class Portfolio extends Component {
    render() {
        return (
            <div>
                <section className="page-section bg-light" id="portfolio">
                    <div className="container">
                        <div className="text-center">
                            <h2 className="section-heading text-uppercase">Portfolio</h2>
                            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                        <div className="row">
                            {portfolio.map((item, index) => {
                                return <PortfolioItem {...item} key={index} />
                            })}
                        </div>
                    </div>
                </section>

                {modals.map((modal, index) => {
                    return <PortfolioModal {...modal} key={index} />
                })}
            </div>
        )
    }
}

export default Portfolio;
