import React, { Component } from 'react';
class Nav extends Component {
    render() {
        let response = this.props.nav.map((val, ind) => {
            return (
                <header className="container" key={ind} >
                    <nav className="navbar navbar-expand-lg bg-white" style={{ overflowY: "hidden" }} id="header">
                        <a className="navbar-brand" href="#"><img src={val.nav[0].logo_img} alt="Logo Image" /></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="fas fa-bars text-dark"></span>
                        </button>
                        <div className="call text-white d-lg-none">
                            <i className="fas fa-phone-volume"></i>
                            <p>{val.nav[0].phone_no}</p>
                        </div>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto mr-5">
                                <li className="nav-item">
                                    <a className="nav-link text-dark" href="#">{val.nav[0].nav_link[0].link}</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-dark" href="#">{val.nav[0].nav_link[1].link}</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-dark" href="#">{val.nav[0].nav_link[2].link}</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-dark" href="#">{val.nav[0].nav_link[3].link}</a>
                                </li>
                            </ul>
                        </div>
                        <div className="call text-white d-lg-block nav-media">
                            <i className="fas fa-phone-volume ml-3"></i>
                            <p className="text-white ml-2 d-inline">{val.nav[0].phone_no}</p>
                        </div>
                    </nav>
                </header>
            )
        })
        return (
            <div>
                {response}
            </div>
        )
    }
}
export default Nav;