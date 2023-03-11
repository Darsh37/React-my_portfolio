import React, { Component } from 'react';

import '../assets/scss/social.scss';

class Social extends Component {
    render() {
        return (
            <div className='social'>
                <a href="https://github.com/Darsh37" target="_blank">
                    <i className='bx bxl-github'></i>
                </a>
                <a href="https://www.linkedin.com/in/darshana-shingade-553aab113" target="_blank">
                    <i className='bx bxl-linkedin-square' ></i>
                </a>
            </div>
        )
    }
}

export default Social;