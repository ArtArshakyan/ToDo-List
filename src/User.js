import React from 'react';
import Name from './Name';
import Surname from './Surname';

function User(props) {
    console.log('props', props)

    return (
        <div className={props.className}>
            <h3>I am <Name name={props.name} /> <Surname surname={props.surname || 'no surname'} />, and I am {props.age}</h3>
            <a href={props.href}>Go to google</a>
        </div>
    );
}

export default User;