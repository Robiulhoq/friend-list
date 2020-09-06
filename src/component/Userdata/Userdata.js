import React from 'react';
import './Userdata.css';

const Userdata = (props) => {
    
    const {first_name, email, gender, img, phone, sallary} = props.friend;
    return (
        <div className="user-box">
            <div className='user-img'>
                <img src={img} alt=""/>
            </div>
            <div className='user-info'>
                 <h5>Name: {first_name}</h5>
                 <p>Email-Id: {email}</p>
                 <p>Gender: {gender}</p>
                 <h6>Phone-NO: {phone}</h6>
                 <p>Sallry: {sallary}</p>
                 <button onClick={() =>props.hendleaddfriend(props.friend)} >Add Friend</button>
            </div>
        </div>
    );
};

export default Userdata;