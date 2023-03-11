import React, { Component } from 'react';

import Skills from '../components/Skills';

class About extends Component {
    render () {
        return (
            <div className="container">
                <h1 className='pagehead'>About me</h1>
                <p>
                    Hey, I'm Darshana!
                </p>
                <p>
                    I'm a passionate UI/UX, Frontend Developer working at  
                    <strong><a target='_blank' href='https://www.nec.com/'> NEC Corporation</a></strong>.
                    I have extensive experience working with various front-end technologies and frameworks. 
                </p>
                <p>
                    I am fluent in classic technologies - HTML, CSS, JavaScript and CSS framework Bootstrap.
                </p>
                <p>
                    I am currently taking efforts to gain expertise on JavaScript framework React.js and Redux. 
                    What you are seeing now is my portfolio developed in React in an attempt to showcase my skills and work experience.
                </p>

                <div className='skills'>
                    <p>My professional skillset include : </p>
                    
                    <div className='d-flex flex-wrap'>
                        <Skills />
                    </div>
                </div>
            </div>
        );
    }
}

export default About;