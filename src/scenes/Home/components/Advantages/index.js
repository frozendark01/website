import React, { Component } from 'react';

import { Grid, Row , Col } from 'react-bootstrap';

class Advantages extends Component {

    constructor() {
        super();
    }

    render(){
        return(
            <section id="advantages" className="advantages-section section" >
                <Grid>
                    <Row>
                        <Col md={ 12 }>
                            <h2 className="section-heading wow fadeIn" data-wow-duration="1s">
                                Advantages
                            </h2>
                        </Col>
                    </Row>
                    <Row className="image">
                        <Col md={ 8 } mdOffset={ 2 }>
                            <img src={'assets/img/fb1.jpg'} alt="" />
                        </Col>
                    </Row>
                    <Row className="advantages">
                        <Col md={ 10 } mdOffset={ 1 }>
                            <Row>
                                <Col md={ 4 } className="item wow bounceInRight wowed animated" data-wow-duration="0.5s" data-wow-delay="0.25s">
                                    <div className="contain">
                                        <div className="img">
                                            <div className="circle">
                                                <i className="fa fa-lock" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                        <h3>Lock-Out Protection</h3>
                                        <p>If a non-trivial owner loses his key, a corporate signatory can post proof-of-loss-hash and through lock-retokenizing-and-exchange, restore ownership.  This is unprecendented on chain. Courts of law require changes too.  RealSafe emulates the real world, better and faster.</p>
                                    </div>

                                </Col>
                                <Col md={ 4 } className="item wow bounceInRight wowed animated" data-wow-duration="0.5s" data-wow-delay="0.75s">
                                    <div className="contain">
                                        <div className="img">
                                            <div className="circle">
                                                <i className="fa fa-money" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                        <h3>Dividends to One Account</h3>
                                        <p>Pay dividends to one account and they are automatically transferred to all current token holders in the correcto proportions.  You dont have to worry about how much went to who.  At end of year you can simply print the report of all owners who received any payouts, what payouts were dividends and what payouts were non-taxable.</p>
                                    </div>
                                </Col>
                                <Col md={ 4 } className="item wow bounceInRight wowed animated" data-wow-duration="0.5s" data-wow-delay="1.25s">
                                    <div className="contain">
                                        <div className="img">
                                            <div className="circle">
                                                <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                        <h3>Votable Transactions</h3>
                                        <p>Some Transactions are tied to votable actions called Issues.  RealSafe has over 20 such transactional issues requiring voting and ending in a series of transactions like raising money for a buy or selling off an asset.</p>
                                    </div>
                                </Col>
                                <Col md={ 4 }  className="item wow bounceInRight wowed animated" data-wow-duration="0.5s" data-wow-delay="1.75s">
                                    <div className="contain">
                                        <div className="img">
                                            <div className="circle">
                                                <i className="fa fa-money" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                        <h3>Tenants can Pay Rent</h3>
                                        <p>On chain.  No more proving if a tenant paid or did not pay.  Accept all payments to a rent wallet assigned to each asset in your RSO.  All rent payments can link to a tenant through a tenantID stored in the transaction.</p>
                                    </div>
                                </Col>
                                <Col md={ 4 } className="item wow bounceInRight wowed animated" data-wow-duration="0.5s" data-wow-delay="2.25s">
                                    <div className="contain">
                                        <div className="img">
                                            <div className="circle">
                                                <i className="fa fa-exchange" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                        <h3>Escrow-All-orNone</h3>
                                        <p>The classic all or none raise is just one of 20+ Issue templates.  Example Issue: "Buy a building current owners only invited"  If voted in, during the active raise time, monies paid in ether are stored in escrow on chain. If goal is met, funds are moved to a signatory wallet else returned to all contributing parties. </p>
                                    </div>
                                </Col>
                                <Col md={ 4 } className="item wow bounceInRight wowed animated" data-wow-duration="0.5s" data-wow-delay="2.75s">
                                    <div className="contain">
                                        <div className="img">
                                            <div className="circle">
                                                <i className="fa fa-rocket" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                        <h3>On Chain Forever?</h3>
                                        <p>Sometimes a company can only free itself of liens by selling it. While this may be acheivalbe without moving the company off-chain, a real world sale to free it from debt is possible. This is simply a votable burn event, one of over 20 templated Issues on the RealSafe platform.</p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Grid>
            </section>
        )
    }
}

export default Advantages;
