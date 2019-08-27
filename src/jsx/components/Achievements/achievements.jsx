import React from 'react';

const Achievements = (props) => {
    let response = props.ach[0] ? props.ach[0] : []
    response = response.capital_protection.map((val, ind) => {
        return (
            <div className="achievements" key={ind}>
                <div className="container-fluid">
                    <h5 className="text-center pt-5 pb-5 ach_Head"><span className="font-weight-normal ach_Head">{val.title_1}</span> {val.title_2}</h5>
                </div>
                <div className="achievementInfos">
                    <div className="achievementInfo">
                        <p>{val.description1}</p>
                        <p>{val.description2}</p>
                        <p>{val.description3}</p>
                    </div>
                    <div className="achievementInfo">
                        <img src={val.capital_protection_img} height="85%" alt="image" />
                    </div>
                </div>
            </div>
        )
    })
    return (
        <section>
            {response}
        </section>
    );
};

export default Achievements;