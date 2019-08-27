import React from 'react';

const responsiveForm = (props) => {
    let response = props.res[0] ? props.res[0] : []
    response = response.header[1].map((val, ind) => {
        return (
            <div key={ind}>
                <div className="form d-md-none form-res">
                    <h5 className="text-center">{val.title}</h5>
                    <p className="text-center">{val.description}</p>
                    <div style={{ marginLeft: "7%" }}>
                        <form action="#" className="formGroup">
                            <div className="fullName" style={{ display: "flex", justifyContent: "space-around" }}>
                                <input type="text" name="FName" className="input-color name d-inline" placeholder={val.form_name} />
                                <input type="tel" name="FName" className="input-color phone d-inline" placeholder={val.form_phone} />
                            </div>
                            <div>
                                <input type="email" name="EMail" className="form-control input-color mt-3 input-width2" placeholder={val.form_emailAdree} />
                            </div>
                            <div>
                                <select className="form-control input-color mt-3 input-width2" name="Investment Option" style={{ width: "94%" }}>
                                    <option>{val.form_question}</option>
                                    <option>{val.form_question_options[0].option}</option>
                                    <option>{val.form_question_options[1].option}</option>
                                    <option>{val.form_question_options[2].option}</option>
                                    <option>{val.form_question_options[3].option}</option>
                                </select>
                            </div>
                            <div>
                                <select name="Investment Sum" className="form-control input-color mt-3 input-width2" style={{ width: "94%" }}>
                                    <option>{val.form_sum}</option>
                                    <option>{val.form_sum_options[0].option}</option>
                                    <option>{val.form_sum_options[1].option}</option>
                                    <option>{val.form_sum_options[2].option}</option>
                                </select>
                            </div>
                            <div className="d-flex align-items-center" style={{ height: "100px" }}>
                                <button className="btn input-width2 btn-info ">{val.form_btn}</button>
                            </div>
                        </form>
                    </div>
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

export default responsiveForm;