import React from 'react';
import './Contact.css'


const name = 'Soham Richards'
const online = true;
const avatar = "https://randomuser.me/api/portraits/men/79.jpg"

function Contact() {
    return (
        <div className="Contact">
            <img src={avatar} className="avatar"/>
                <div>
                    <div className="name">    
                        {name}
                    </div>
                    <div className="status">
                        <div className={online ? "status-online" : "status-offline"}></div>
                        <p className="status-text">{online ? "online" : "offline"}</p>
                    </div>
                </div>
        </div>
 )}

 export default Contact;