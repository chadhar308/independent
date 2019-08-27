import React from 'react';

const happyClients = (props) => {
    let response = props.hc[0] ? props.hc[0] : []
    response = response.Happy_Clients.map((val, ind) => {
        return (
            <div className="happyClients" key={ind}>
                <div className="d-flex flex-column justify-content-around align-items-center" style={{ height: "130px" }}>
                    <h1 className="text-center mt-3 head_hc">{val.title}</h1>
                    <p className="text-center para_hc">{val.description}</p>
                </div>
                <div className="clients">
                    <div className="client">
                        <div className="client-img">
                            <img src={val.client_data[0].client_img} alt="" />
                        </div>
                        <p className="para_c">{val.client_data[0].client_description}</p>
                        <h6 className="client_name">{val.client_data[0].client_name}</h6>
                    </div>
                    <div className="client client-2">
                        <div className="client-img">
                            <img src={val.client_data[1].client_img} alt="" />
                        </div>
                        <p className="para_c">{val.client_data[1].client_description}</p>
                        <h6 className="client_name">{val.client_data[1].client_name}</h6>
                    </div>
                    <div className="client">
                        <div className="client-img">
                            <img src={val.client_data[2].client_img} alt="" />
                        </div>
                        <p className="para_c">{val.client_data[2].client_description}</p>
                        <h6 className="client_name">{val.client_data[2].client_name}</h6>
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

export default happyClients;