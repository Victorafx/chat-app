import PropTypes from 'prop-types';
import React from 'react';
import './Contact.css'

const online = true;

function Contact(props) {
    return (
        <div className="Contact">
            <img src={props.avatar} className="avatar"/>
                <div>
                    <div className="name">    
                        {props.name}
                    </div>
                    <div className="status">
                        <div className={props.online ? "status-online" : "status-offline"}></div>
                        <p className="status-text">{props.online ? "online" : "offline"}</p>
                    </div>
                </div>
        </div>
 )}
Contact.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    online: PropTypes.string.isRequired,
};
 export default Contact;
