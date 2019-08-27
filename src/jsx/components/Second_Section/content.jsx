import React from 'react';

const content = (props) => {
    let response = props.con[0] ? props.con[0] : []
    response = response.header[0].map((headObj, i) => {
        return (
            <div key={i}>
                <h6>{headObj.header_title}</h6>
                <h1>{headObj.yearly_per} <span>{headObj.span}</span> {headObj.return}</h1>
                <div>
                    <p><img src="./img/tick-b.png" alt="tick img" /><span>{headObj.per_value[0].type}</span> {headObj.per_value[0].investment}</p>
                    <p><img src="./img/tick-b.png" alt="tick img" /><span>{headObj.per_value[1].type}</span> {headObj.per_value[1].investment}</p>
                    <p><img src="./img/tick-b.png" alt="tick img" /><span>{headObj.per_value[2].type}</span> {headObj.per_value[2].investment}</p>
                    <p><img src="./img/tick-b.png" alt="tick img" /><span>{headObj.per_value[3].type}</span> {headObj.per_value[3].investment}</p>
                </div>
            </div>
        )
    })
    return (
        <div className="content">
            {response}
        </div>
    );
};

export default content;