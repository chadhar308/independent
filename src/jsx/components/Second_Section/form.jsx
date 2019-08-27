import React from 'react';

const form = (props) => {
    let response = props.form[0] ? props.form[0] : []
    response = response.header[1].map((val, ind) => {
        return (
            <div className="form form-media" key={ind}>
                <h5 className="text-center w-75 ml-5">{val.title}</h5>
                <p className="text-center">{val.description}</p>
                <form action="#">
                    <div className="d-flex">
                        <input type="text" name="FName" className="form-control input-color mr-3 ml-4" placeholder={val.form_name} />
                        <input type="tel" name="FName" className="form-control input-color mr-4" placeholder={val.form_phone} />
                    </div>
                    <div>
                        <input type="email" name="EMail" className="form-control input-color input-width ml-4 mt-3 " placeholder={val.form_emailAdree} />
                    </div>
                    <div>
                        <select className="form-control input-color mt-3 ml-4 input-width" name="Investment Option">
                            <option>{val.form_question}</option>
                            <option>{val.form_question_options[0].option}</option>
                            <option>{val.form_question_options[1].option}</option>
                            <option>{val.form_question_options[2].option}</option>
                            <option>{val.form_question_options[3].option}</option>
                        </select>
                    </div>
                    <div>
                        <select name="Investment Sum" className="form-control input-width input-color ml-4 mt-3" style={{ width: "88%" }}>
                            <option>{val.form_sum}</option>
                            <option>{val.form_sum_options[0].option}</option>
                            <option>{val.form_sum_options[1].option}</option>
                            <option>{val.form_sum_options[2].option}</option>
                        </select>
                    </div>
                    <div className="w-100 d-flex justify-content-center align-items-center" style={{ height: "100px" }}>
                        <button className="btn input-width btn-info ">{val.form_btn}</button>
                    </div>
                </form>
            </div>
        )
    })
    return (
        <div>
            {response}
        </div>
    );
};

export default form;