import React from 'react';

const subject = (props) => {

    return (
        <div className="card">
            <p>This is a subject! It is called {props.title} and it is in 
            {props.year} of the course. The Lecturer is<div className ="lecture"> {props.lecturer}</div></p>
            <p className ="read">{props.children}</p>
        </div>

    )
}

export default subject;