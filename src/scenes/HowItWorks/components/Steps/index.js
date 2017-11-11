import React, { Component } from 'react';

import { Grid, Row , Col } from 'react-bootstrap';

class Steps extends Component {

    constructor() {
        super();
    }

    render(){
        return(
            <section id="steps" className="steps-section section" >
                <Grid>
                    <Row className="text-center">
                        <Col md={ 12 }>
                            <h2 className="section-heading wow fadeIn">
                                How RealSafe Works
                            </h2>
                        </Col>
                    </Row>
                    <div className="steps">
                        <Row id="step1" className="text-center step-1">
                            <Col md={ 2 } mdOffset={ 1 } sm={ 2 } smOffset={ 2 }>
                                <div className="number">
                                    <p>1</p>
                                </div>
                            </Col>
                            <Col md={ 6 } xs={ 12 } sm={ 4 } className="text">
                                <h2>Open a RealSafe Wallet</h2>
                                <p>Say you own a portfolio of stores as an LP or an LLC with 10 other owners.  Step 1 is to open a RealSafe wallet downloadable through the website and put either Ether or RealSafe tokens into the wallet.    </p>
                            </Col>
                            <Col md={ 2 } sm={ 2}>
                                <img className="icon-hiw" src={ 'assets/img/check.png' }></img>
                            </Col>
                            <Col md={ 1 } className="line"></Col>
                        </Row>

                        <Row id="step2" className="text-center step-2">
                            <Col md={ 2 } mdOffset={ 1 } sm={ 2 } smOffset={ 2 }>
                                <div className="number">
                                    <p>2</p>
                                </div>
                            </Col>
                            <Col md={ 6 } xs={ 12 } sm={ 4 } className="text">
                                <h2>Create the RSO for your Corporation</h2>
                                <p>Specify the name of your company, the token symbol, the maximum amount of tokens, the maximum number of owners.  Apportion the percentages to each owner by email address. Pay the fee in ether or RST and press "create RSO" </p>
                            </Col>
                            <Col md={ 2 } sm={ 2 }>
                                <img className="icon-hiw" src={ 'assets/img/check.png' }></img>
                            </Col>
                            <Col md={ 1 } className="line"></Col>
                        </Row>

                        <Row id="step3" className="text-center step-3">
                            <Col md={ 2 } mdOffset={ 1 } sm={ 2 } smOffset={ 2 }>
                                <div  className="number">
                                    <p>3</p>
                                </div>
                            </Col>
                            <Col md={ 6 } xs={ 12 } sm={ 4 } className="text">
                                <h2>Wait for all owners to register to the RSO</h2>
                                <p>Each owner registers to RealSafe and the RSO via clicking the special link they recieve in their email. The RSO becomes active and its tokens unlocked for trading after every owner is subscribed and the RSO creator then 'unlocks' the RSO.  The RSO can never be locked again except in special temporary cases by vote or when a non-trivial owner loses his keys and a reissue is required.</p>
                            </Col>
                            <Col md={ 2 } sm={ 2 }>
                                <img className="icon-hiw" src={ 'assets/img/check.png' } ></img>
                            </Col>
                            <Col md={ 1 } className="line"></Col>
                        </Row>

                        <Row id="step4" className="text-center step-4">
                            <Col md={ 2 } mdOffset={ 1 } sm={ 2 } smOffset={ 2 }>
                                <div  className="number">
                                    <p>4</p>
                                </div>
                            </Col>
                            <Col md={ 6 } xs={ 12 } sm={ 4 } className="text">
                                <h2>File New Corporate Agreement</h2>
                                <p>To make it official, just print out a template agreement as a guide, bring it to your attorney for review and make the needed real changes to your corporate agreement.  Then register the new corporate agreement with the state.</p>
                            </Col>
                            <Col md={ 2 } sm={ 2 }>
                                <img className="icon-hiw" src={ 'assets/img/check.png' } ></img>
                            </Col>
                            <Col md={ 1 } className="line"></Col>
                        </Row>

                        <Row id="step5" className="text-center step-last">
                            <Col md={ 2 } mdOffset={ 1 } sm={ 2 } smOffset={ 2 }>
                                <div  className="number">
                                    <p>5</p>
                                </div>
                            </Col>
                            <Col md={ 6 } xs={ 12 } sm={ 4 } className="text">
                                <h2>Enjoy the power of your Corporation on chain</h2>
                                <p>The trading of an RSO commences the moment an owner creates a market by offering any
                                 amount of his apportioned tokens on the RealSafe MarketPlace.
                                 All business is conducted as normal, but now the officers have the power of, raising money, on chain reporting, one-source dividend payouts, company meetings requiring votes, and much more without ever leaving home! </p>
                            </Col>
                            <Col md={ 2 } sm={ 2 }>
                                <img className="icon-hiw" src={ 'assets/img/check.png' } ></img>
                            </Col>
                        </Row>
                    </div>
                </Grid>
            </section>
        )
    }
}

export default Steps;
