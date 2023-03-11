import React, { Component } from 'react';

import Social from '../components/Social';

class Contact extends Component {
    render () {
        return (
            <div className="container">
                <h1 className='pagehead'>Reach Out to Me!</h1>
                <p>
                    Whether you want to get in touch, discuss projects, or just say hi, I'd love you hear from you {String.fromCodePoint('0x1f60A')}
                </p>

                <div className="sendMail">
                    <a href="mailto: darshanashingade@gmail.com">
                        <i className='bx bx-envelope' ></i> darshanashingade@gmail.com
                    </a>
                    <div>
                        <i className='bx bx-map'></i> Bangalore, KA, India
                    </div>
                </div>
                <Social/>
            </div>
        );
    }
}

export default Contact;