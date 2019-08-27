import React from 'react';

const interestContent = (props) => {
    return (
        <div className="col-md-6 col-xs-12 inter">
            <h2 id="head">{props.content[0].Compound_Interest_Calculator[0].title}</h2>
            <p>{props.content[0].Compound_Interest_Calculator[0].description1}</p>
            <p>{props.content[0].Compound_Interest_Calculator[0].description2}</p>
        </div>
    );
};

export default interestContent;