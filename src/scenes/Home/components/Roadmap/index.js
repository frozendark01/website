import React, { Component } from 'react';

import { Grid, Row , Col } from 'react-bootstrap';

class Roadmap extends Component {

    constructor(props) {
        super(props);
    }

    render(){
        return(
            <section id="roadmap" className="roadmap-section section">
                <Grid>
                    <Row>
                        <Col md={ 12 }>
                            <h2 className="section-heading wow fadeIn" data-wow-duration="1s">
                                Roadmap
                            </h2>
                        </Col>
                    </Row>

                    <Row>
                       <Col md={ 10 } mdOffset={ 1 }>
                           <div className="timeline">
                               <Row className="roadmap-list">
                                   <Col sm={ 6 } smOffset={ 6 } className="roadmap-list-item wow fadeInRight wowed animated" data-wow-duration="1s" data-wow-delay="0.5s">
                                        <span className="title">Development</span>
                                        <p>The rare blockchain company developing prior to ICO. Never the less we are 4 developers working day on night on this reality.  It is our number one priority.  RealSafe will be completed with or without ICO. Without means mauch more time and an initial launch with less features.  With means a stellar platform in under one year.</p>
                                        <div className="history-separator-l"> </div>
                                   </Col>
                                   <Col sm={ 6 } className="roadmap-list-item-l wow fadeInLeft wowed animated" data-wow-duration="1s" data-wow-delay="0.5s">
                                    <span className="title">PRE-ICO and ICO</span>
                                        <p>An ICO is scheduled with pre-ICO starting in December and main ICO event on January 1st. We plan to raise between 2 and 48 million.  Please see the whitepaper for details.</p>
                                        <div className="history-separator-r"> </div>
                                   </Col>
                                   <Col sm={ 6 } smOffset={ 6 } className="roadmap-list-item wow fadeInRight wowed animated" data-wow-duration="1s" data-wow-delay="0.5s">
                                        <span className="title">Development and Growth of the Ecosystem</span>
                                        <p>Enticing the world's best developers to foster the growth and ensure the security of RealSafe is the mission of the RealSafe Reserve. Please see the whitepaper for details on the Reserve.</p>
                                       <div className="history-separator-l"> </div>
                                   </Col>
                                   <Col sm={ 6 } className="roadmap-list-item-l wow fadeInLeft wowed animated" data-wow-duration="1s" data-wow-delay="0.5s">
                                        <span className="title">100% Decentralization</span>
                                        <p>RSOs are self-added at a cost. Ensuring the validity of each RSO is a collective effort, initiated by the RSO creator and a small network of pre-existing RSOs.  An extensive auditor network will complete the fully autonomous model of RealSafe.   Until then we beleive the data uploaded as part of the RSO should be sufficient for any investor to do sufficient due-diligence by, for exmaple, visiting county offices to check that recorded docs match docs found at uploaded doc. URLs or simply by the investor contacting an RSO signatory.</p>
                                        <div className="history-separator-r"> </div>
                                   </Col>
                               </Row>
                           </div>
                       </Col>
                    </Row>
                </Grid>
            </section>
        )
    }
}

export default Roadmap;
