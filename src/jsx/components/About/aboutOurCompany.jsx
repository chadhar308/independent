import React from 'react';

const aboutOurCompany = (props) => {
    let response = props.com[0] ? props.com[0] : []
    response = response.about_company.map((val, ind) => {
        return (
            <div className="aboutOurCompany" key={ind}>
                <div className="aboutInfo aboutInfoMedia">
                    <div style={{ marginLeft: "100px" }} className="about-content">
                        <h1>{val.title}</h1>
                        <p style={{ marginTop: "20px", lineHeight: "30px" }}>{val.description}</p>
                        <p style={{ marginTop: "20px", lineHeight: "30px" }}>{val.description_part}</p>
                    </div>
                </div>
                <div className="aboutInfo aboutImgMedia">
                    <img src={val.about_img} height="86%" width="100%" alt="image" />
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

export default aboutOurCompany;