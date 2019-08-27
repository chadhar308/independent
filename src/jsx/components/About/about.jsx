import React from 'react';
import Services from './services';
import AboutOurCompany from './aboutOurCompany';
const about = (props) => {
    return (
        <section>
            <div className="about">
                <Services ser={props.about} />
                <AboutOurCompany com={props.about} />
            </div>
        </section>
    );
};

export default about;