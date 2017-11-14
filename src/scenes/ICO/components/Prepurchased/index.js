import React, { Component } from 'react';
import Ru from 'rutils'
import { Grid, Row , Col } from 'react-bootstrap';
import Guarantee from  './components/Guarantee'

let guarantees = [
    {
        image: 'assets/img/guarantees-img-1.png',
        text: 'Pre-ICO and ICO pre-purchasing of RealSafe RSOs and asset-registrations are paid for with ether. The RealSafe token (RST) is unaffiliated with any particular RSO. 1100 RST pre-buys 1 RSO with 1 asset-registration credit, its own token-type and tradability to resolution of any setpoint desired when setting up the RSO from the RealSafe wallet'
    },
    {
        image: 'assets/img/circle2.png',
        text: 'RealSafe LLC is creating the distributed network through which RSOs operate independently, responsible for their own regulation and compliance. Each RSO is independently controlled and operated by the management team elected by it.'
    },

    {
        image: 'assets/img/guarantees-img-1.png',
        text: 'RealSafe Wallet allows transfers of RST, ETH and unique token-types to each RSO. Wallet KYC feature helps ensure RSO tokens are transferred only to KYC-compliant individuals or entities.'
    },
]

class Prepurchased extends Component {

    constructor() {
        super();
    }

    render(){
        return(
            <section id="prepurchased" className="prepurchased-section section" >
                <Grid>
                    <Row>
                        <Col md={ 12 }>
                            <h2 className="section-heading wow fadeIn" data-wow-duration="1s">
                                Pre-Purchase Rules
                            </h2>
                        </Col>
                    </Row>
                    <Row className="guarantees-list ">
                        <Col md={ 10 } mdOffset={ 1 }>
                            <Row className="main">
                                {
                                    Ru.addIndex(Ru.map)(this.renderGuarantee, guarantees)
                                }
                            </Row>
                        </Col>
                    </Row>
                </Grid>
            </section>
        )
    }

    renderGuarantee (spec, i) {
        return (
            <Guarantee spec={ spec } key = { i } index = { i }  />
        )
    }
}

export default Prepurchased;
