import React from 'react';

const services = (props) => {
    let response = props.ser.map((val, ind) => {
        return (
            <div className="services" key={ind}>
                <div className="service-info">
                    <span className="heading">{val.investments_per[0].percentage}</span>
                    <p className="ser-des ser-des2">{val.investments_per[0].description}</p>
                </div>
                <div className="service-info">
                    <span className="heading">{val.investments_per[1].percentage}</span>
                    <p className="ser-des ser-des2">{val.investments_per[1].description}</p>
                </div>
                <div className="service-info">
                    <span className="heading">{val.investments_per[2].percentage}</span>
                    <p className="ser-des">{val.investments_per[2].description}</p>
                </div>
                <div className="service-info">
                    <span className="heading">{val.investments_per[3].percentage}</span>
                    <p className="ser-des">{val.investments_per[3].description}</p>
                </div>
            </div>
        )
    })
    return (
        <div>
            {response}
        </div>
    );
};

export default services;