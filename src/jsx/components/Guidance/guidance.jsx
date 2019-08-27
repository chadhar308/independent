import React from 'react';
const guidance = (props) => {
    let response = props.guide[0] ? props.guide[0] : []
    response = response.contact_detail.map((val, ind) => {
        return (
            <div className="guidance" key={ind}>
                <div className="form">
                    <form action="#">
                        <div className="form-group">
                            <input type="text" className="form-control guide-form" placeholder={val.form_name} />
                        </div>
                        <div className="form-group">
                            <input type="tel" className="form-control guide-form" placeholder={val.form_phone} />
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control guide-form" placeholder={val.form_emailAdree} />
                        </div>
                        <div className="form-group">
                            <select className="form-control guide-form" name="Investment Option">
                                <option>{val.form_question}</option>
                                <option>{val.form_question_options[0].option}</option>
                                <option>{val.form_question_options[1].option}</option>
                                <option>{val.form_question_options[2].option}</option>
                                <option>{val.form_question_options[3].option}</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <select name="Investment Sum" className="form-control guide-form">
                                <option>{val.form_sum}</option>
                                <option>{val.form_sum_options[0].option}</option>
                                <option>{val.form_sum_options[1].option}</option>
                                <option>{val.form_sum_options[2].option}</option>
                            </select>
                        </div>
                        <div className="d-flex justify-content-center align-items-center mt-0" style={{ height: "100px" }}>
                            <button className="btn btn-width btn-info ">{val.form_btn}</button>
                        </div>
                    </form>
                </div>
                <div className="guide">
                    <h5>{val.reach_out}</h5>
                    <div>
                        <h5>{val.phone_description}</h5>
                        <h5 className="phone">{val.phone_no}</h5>
                        <h5>{val.GET_QUICKLY}</h5>
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

export default guidance;