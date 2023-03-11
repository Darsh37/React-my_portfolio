import React, { Component } from 'react';

import { Container } from 'react-bootstrap';

import WideCard from '../components/WideCard';

import nec_logo from '../assets/resources/logos/NEC-logo.jpg';
import techsierra_logo from '../assets/resources/logos/tech-sierra.webp';

class Experience extends Component {
    render () {
        return (
            <Container>
                <div className='expedu_section'>
                    <h1 className='pagesubhead'>Work Experience</h1>

                    <WideCard 
                        image={nec_logo} 
                        text={[
                            `Contributing and maintaining  Taylor and Francis project as a junior developer.`, <br/>, 
                            `Worked with other senior developers to understand and perform assigned tickets on JIRA.`, <br/>,
                            `Sometimes connecting with clients to understand the new requirement and document it.`, <br/>,
                            `I am lately being made part of a planning and discussion  group for new feature additions for the current project after my performance review and learning appetite.`
                        ]}
                    />
                    <WideCard 
                        image={techsierra_logo} 
                        text={[
                            `I have worked on UI development for an internal website for one of the clients for techSiarra.`,<br/>,
                            `End to end understanding and  implementing features given by the client.`,<br/>,
                            `Deployed and Delivered this complete project in 1.5 months.`,<br/>,
                         `Was responsible for making new and old UI changes in multiple projects.`

                        ]}
                    />
                </div>
                <div className='expedu_section mb-0'>
                    <h1 className='pagesubhead'>Education</h1>

                    <h2>Bachelor of Engineering (Computer Sciece & Engineering)</h2>
                    <p>Mumbai University -- 2013 - 2017</p>
                </div>
            </Container>
        )
    }
}

export default Experience;