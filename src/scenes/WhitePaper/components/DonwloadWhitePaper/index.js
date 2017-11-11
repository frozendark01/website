import React, { Component } from 'react';
import { Grid, Row , Col } from 'react-bootstrap';

class DonwloadWhitePaper extends Component {

    constructor() {
        super();
    }

    render(){
        return(
            <section id="dwp" className="dwp-section section" >
                <Grid className="text-center">
                    <Row>
                        <Col md={ 12 }>
                            <h2 className="section-heading wow fadeIn" data-wow-duration="1s">
                            WHITEPAPER
                            </h2>
                        </Col>
                    </Row>
                    <Row className="ico">
                        <Col md={ 6 } mdOffset={ 3 }>
                            <div className="btn-cta">
                                <a href={ 'assets/doc/RealSafe_Whitepaper_v3.pdf' }  target="_blank"  className="btn btn-app-download crowdsale">
                                    <i className="fa fa-sign-in"></i>
                                    Donwload whitepaper
                                </a>
                                <img src={'assets/img/whitepaper.png'} />
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </section>
        )
    }
}

export default DonwloadWhitePaper;
