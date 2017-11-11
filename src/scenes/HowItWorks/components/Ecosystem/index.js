import React, { Component } from 'react';

import { Grid, Row , Col } from 'react-bootstrap';

class Ecosystem extends Component {

    constructor() {
        super();
    }

    render(){
        return(
            <section id="ecosystem" className="ecosystem-section section" >
                <Grid>
                    <Row>
                        <Col md={ 12 }>
                            <h2 className="section-heading wow fadeIn" data-wow-duration="1s">
                                Ecosystem
                            </h2>
                        </Col>
                    </Row>
                    <Row className="text-center">
                        <Col  md={ 4 }>
                            <a href="" className="ecosystem-item">
                            <img src={'assets/img/ecosystem-img-1.png'}  alt=""/></a>
                            <h3>RealSafe Tokenization System</h3>
                            <p>Authorized corporate officers use RealSafe Wallet to create an RSO. RealSafe LLC provides free consults and attorney services.</p>
                        </Col>
                        <Col md={ 4 }>
                            <a href="" className="ecosystem-item">
                            <img src={'assets/img/ecosystem-img-2.png'}   alt=""/></a>
                            <h3>RealSafe Explorer</h3>
                            <p> a blockchain explorer using the RealSafe API to view information on all available RSOs</p>
                        </Col>
                        <Col md={ 4 }>
                            <a href="" className="ecosystem-item">
                            <img src={'assets/img/ecosystem-img-3.png'}  alt=""/></a>
                            <h3>RealSafe MarketPlace</h3>
                            <p>The singular place for trading RSO/ETH pairs and the RST/Eth pair.</p>
                        </Col>
                    </Row>
                </Grid>
            </section>
        )
    }
}

export default Ecosystem;
