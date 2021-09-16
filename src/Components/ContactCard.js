import React from 'react';
import user from '../images/user.jpg';
import './App.css';

const ContactCard = (props) => {
    const { id, name, gmail } = props.contact;
    return (
        <div>
            <div className="item">
                <hr />
                    <div className="content">
                        <img src={user} alt="userimage" style={{width:"30px", height:"30px"}}/>
                        <div className="name">Name : {name}</div>
                        <div className="gmail">Gmail : {gmail}</div>
                    </div>
                    <i class="fas fa-trash text-right iconStyle" style={{color:"red", float:"right", marginTop: "-50px", fontSize:"20px", marginRight:"20px"}}
                    onClick={() => props.clickHandler(id)}></i>
                <hr />
            </div>
        </div>
    )
}

export default ContactCard;


