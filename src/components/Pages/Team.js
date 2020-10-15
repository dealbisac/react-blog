import React, { Component } from 'react';
import TeamMember from '../Common/TeamMember';

// Team Member Image
import member1 from '../assets/img/team/1.jpg';
import member2 from '../assets/img/team/2.jpg';
import member3 from '../assets/img/team/3.jpg';

const members = [
    { image: member1, name: 'Millie Brown', job: 'Lead Designer', twitter: '#', facebook: '#', linkedin: '#' },
    { image: member2, name: 'Dipendra Bdr. Chand', job: 'Lead Developer', twitter: 'https://twitter.com/DipendraBdChand', facebook: 'https://www.facebook.com/dipendrabdrchand/', linkedin: 'https://www.linkedin.com/in/dealbisac/' },
    { image: member3, name: 'Diana Petersen', job: 'Lead Marketer', twitter: '#', facebook: 'https://www.facebook.com/dipendrabdrchand/', linkedin: 'https://www.linkedin.com/in/dealbisac/' }
]

class Team extends Component {
    render() {
        return (
            <div>
                <section className="page-section bg-light" id="team">
                    <div className="container">
                        <div className="text-center">
                            <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
                            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                        <div className="row">
                            {members.map((member, index) => {
                                return <TeamMember {...member} key={index} />
                            })}
                        </div>

                        <div className="row">
                            <div className="col-lg-8 mx-auto text-center"><p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p></div>
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}

export default Team;
