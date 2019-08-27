import React from 'react';
import InterestContent from './interestContent';
import InterestForm from './interestForm';
const interest = (props) => {
    return (
        <section>
            <div className="container container2">
                <div className="row interest">
                    <InterestContent content={props.int} />
                    <InterestForm intform={props.int} />
                </div>
            </div>
        </section>
    );
};

export default interest;