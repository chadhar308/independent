import React from 'react';

const footer = (props) => {
    return (
        <footer>
            <div className="footer-top">
                <div className="left">
                    <div>
                        <h5 className="font-weight-bold text-light">{props.footer[0].footer_detail[0].contact_title}</h5>
                        <pre className="text-light">
                            {props.footer[0].footer_detail[0].Address_part_1} <br />
                            {props.footer[0].footer_detail[0].Address_part_2} <br />
                            {props.footer[0].footer_detail[0].Address_part_3}
                        </pre>
                        <h6 className="font-weight-bold text-light">{props.footer[0].footer_detail[0].phone_no}</h6>
                    </div>
                </div>
                <div className="right">
                    <div>
                        <h5 className="text-light">{props.footer[0].footer_detail[1].contac_about_title}</h5>
                        <p className="text-light">{props.footer[0].footer_detail[1].description}
                            
                        </p>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p className="mt-3 text-light">{props.footer[0].footer_detail[2].copyright}</p>
            </div>
        </footer>
    );
};

export default footer;