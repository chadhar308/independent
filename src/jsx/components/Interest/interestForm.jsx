import React from 'react';

const interestForm = (props) => {
    return (
        <div className="col-md-6 inter col-xs-12">
            <div className="form">
                <form action="#">
                    <div className="form-group d-inline ml-3">
                        <label className="mt-2" htmlFor="no1">{props.intform[0].Compound_Interest_Calculator[1].form_input_title}</label>
                        <input type="number" id="no1" className="form-control ml-3" style={{ width: "90%" }} />
                    </div>
                    <div className="form-group d-inline ml-3">
                        <label htmlFor="no2" className="mt-2">{props.intform[0].Compound_Interest_Calculator[2].form_input_title}</label>
                        <input type="number" id="no2" className="form-control ml-3" style={{ width: "90%" }} />
                    </div>
                    <div className="form-group d-inline ml-3">
                        <label htmlFor="mon" className="mt-2">{props.intform[0].Compound_Interest_Calculator[3].form_input_title}</label>
                        <select id="mon" className="form-control ml-3" style={{ width: "90%" }}>
                            <option>{props.intform[0].Compound_Interest_Calculator[4].form_input_options[0].option_detail}</option>
                            <option>{props.intform[0].Compound_Interest_Calculator[4].form_input_options[1].option_detail}</option>
                            <option>{props.intform[0].Compound_Interest_Calculator[4].form_input_options[2].option_detail}</option>
                            <option>{props.intform[0].Compound_Interest_Calculator[4].form_input_options[3].option_detail}</option>
                        </select>
                    </div>
                    <div className="form-group d-inline ml-3">
                        <label htmlFor="no3" className="mt-2">{props.intform[0].Compound_Interest_Calculator[5].form_input_title}</label>
                        <input type="number" id="no3" className="form-control ml-3" style={{ width: "90%" }} />
                    </div>
                    <button type="submit" className="btn btn-outline-dark ml-3 mt-2">{props.intform[0].Compound_Interest_Calculator[6].form_btn}</button>
                </form>
                <div className="bottom text-light d-flex flex-column">
                    <h6>{props.intform[0].Compound_Interest_Calculator[6].Interest_Amount}</h6>
                    <h1>{props.intform[0].Compound_Interest_Calculator[6].percentage}</h1>
                </div>
            </div>
        </div>
    );
};

export default interestForm;