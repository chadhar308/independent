import React from 'react';
import Content from './content';
import Circle from './circle';
import Form from './form';
const image = (props) => {
    return (
        <div>
            <div className="background-img">
                <Content con={props.img} />
                <Circle />
                <Form form={props.img}/>
            </div>
        </div>
    );
};

export default image;