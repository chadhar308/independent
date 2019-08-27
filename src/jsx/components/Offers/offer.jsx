import React from 'react';

const offer = (props) => {
    let response = props.offer[0] ? props.offer[0] : []
    response = response.offer.map((val, ind) => {
        return (
            <div className="offers" key={ind}>
                <div className="heading">
                    <h3>{val.title}</h3>
                </div>
                <div className="offer">
                    <div className="offer-info">
                        <div className="desc">
                            <h5>{val.offer_detail1[0].title}</h5>
                            <p>{val.offer_detail1[0].description}</p>
                        </div>
                        <div className="desc">
                            <h5>{val.offer_detail1[1].title}</h5>
                            <p>{val.offer_detail1[1].description}</p>
                        </div>
                        <div className="desc">
                            <h5>{val.offer_detail1[2].title}</h5>
                            <p>{val.offer_detail1[2].description}</p>
                        </div>
                    </div>
                    <div className="offer-info offer-info-2">
                        <img src={val.offer_img} height="60%" alt="" />
                    </div>
                    <div className="offer-info offer-info-3">
                        <div className="desc desc_3">
                            <h5>{val.offer_detail2[0].title}</h5>
                            <p>{val.offer_detail2[0].description}</p>
                        </div>
                        <div className="desc desc_3">
                            <h5>{val.offer_detail2[1].title}</h5>
                            <p>{val.offer_detail2[1].description}</p>
                        </div>
                        <div className="desc desc_3">
                            <h5>{val.offer_detail2[2].title}</h5>
                            <p>{val.offer_detail2[2].description}</p>
                        </div>
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

export default offer;