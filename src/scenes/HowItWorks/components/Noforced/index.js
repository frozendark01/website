import React, { Component } from 'react';

import { Grid, Row , Col } from 'react-bootstrap';

class Noforced extends Component {

    constructor() {
        super();
    }

    render(){
        return(
            <section id="noforced" className="noforced-section section" >
                <Grid>
                    <Row>
                        <Col md={ 12 }>
                            <h2 className="section-heading wow fadeIn" data-wow-duration="1s">
                                No Forced Sale Date - ever
                            </h2>
                            <p className="wow fadeIn description" data-wow-duration="1s">RealSafe invites any duly authorized officer to create their own RSO.  The process is designed to ensure the existing corporate structure and ownership entities are preserved, surviving the tokenization event. No encumberments, no forced settlement dates. RealSafe is led by an experienced team of real estate investors, scientists, engineers, legal experts, developers and advisors</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={ 12 }>
                            <ul className="options">
                                <li>Assets are controlled via the same voting process and governance procedures as before.  Only now the procedure is available and recordable through blockchain</li>
                                <li>Dividends paid out with the same frequency as before, only now they are paid to just one account and automatically distributed blockchain</li>
                                <li>The society of each RSO on the RealSafe blockchain consists of the original owners at inception. They create a market by listing any quantity of their tokens on the RealSafe Marketplace at anytime.</li>
                                <li>Blockchain records all exchanges, voting operations and other communications as RealSafe transactions for all time.</li>
                                <li>No more minutes in books are necessary.  Any votable issue is maintainable through the RealSafe platform</li>
                                <li>Each RSO has separate voting tokens for the case where the voting rights are not the same as the ownership rights</li>
                                <li>Tokens representing each RSO are transferred through uniquely generated contracts on the Ethereum Blockchain, each correposnding to a specific RSO managing only that RSO's tokens.</li>
                                <li>All RSO sub-tokens are erc-20 compliant.  Therefore, if an RSO restricts token trading to a small subgroup of persons, Realsafe controls this via tokens swapped on the RealSafe marketplace.
                                If RSO owner has all regulation in place as a public security with unlimited owners, he may also list his token on any crypto exchange.  </li>
                                <li>Most important, if a transfer is found fraudulent in a court of law, the court may require temporary suspension of trading, reversal or closure of the RSO - as it could in the real world. </li>
                                <li>These compliant features are engagable when voted in.  Assuming the tokens are not listed on any exchange outside the RealSafe MarketPlace, they are enforceable.</li>
                                <li>An RSO may require that no tokens may be transferred more than once per some-unit timeframe or at some minimum quantity or maximum number of owners.</li>
                                <li>RealSafe will provide an unprecendented level of control and security for organizations that demand it to make regulatory compliance easy to acheive with the maximum tradeability.</li>
                                <li>Many corporations need this type of protection that no existing platform can offer.</li>
                                <li>RealSafe unique features designed to handle real-world corporate affairs, such as KYC levels for reporting on end-of-year partners invites new markets onto blockchain for the first time.</li>
                            </ul>
                        </Col>
                    </Row>
                </Grid>
            </section>
        )
    }
}

export default Noforced;
