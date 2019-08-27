import React, { Component } from 'react';
import Nav from './Navigation/nav';
import SecondSection from './Second_Section/second-section';
import About from './About/about';
import Offers from './Offers/offer';
import Acievements from './Achievements/achievements';
import Interest from './Interest/interest';
import HappyClients from './HappyClients/happyClients';
import Guidance from './Guidance/guidance';
import Map from './Map/map';
import Footer from './Footer/footer';
import { data } from './Data/data';
class app extends Component {
    state = {
        data: data
    }
    render() {
        return (
            <div>
                <Nav nav={this.state.data} />
                <SecondSection sec={this.state.data}/>
                <About  about={this.state.data} />
                <Offers offer={this.state.data} />
                <Acievements ach={this.state.data} />
                <Interest int={this.state.data} />
                <HappyClients hc={this.state.data} />
                <Guidance guide={this.state.data} />
                <Map />
                <Footer footer={this.state.data} />
            </div>
        );
    }
}

export default app;