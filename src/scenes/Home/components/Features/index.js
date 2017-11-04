import React, { Component } from 'react';

class Features extends Component {

    constructor() {
        super();
    }

    render(){
        return(
            <section id="features" className="features-section section" >
                <div className="container">
                    <div className="row text-center">
                        <div className="col-md-12">
                            <h2 className="section-heading wow fadeIn" data-wow-duration="1s">
                                About RealSafe
                            </h2>
                        </div>
                        <div className="col-md-10 col-md-offset-1 description">
                            <p> RealSafe is a blockchain platform for fractionating asset ownership into exchange-tradable tokens while transforming complex financial deals and governance business into routine blockchain transactions. The result is a network of RealSafe Organizations (RSO)s, asset-backed decentralized autonomous oragnizations owned 100% by their token holders, traded and managed with security and transparency on the Ethereum blockchain. Raise funds backed by a 4-family building with no risk of default or extend a portfolio of assets into a fully exchange-traded REIT. RealSafe RSOs feature automated distributions and separable voting and ownership tokens. RealSafe Platform offers these services: </p>
                        </div>
                    </div>
                    <div className="row platform">
                        <div className="col-md-4 col-sm-6">
                            <ul className="list-left wow fadeInLeft animated" data-wow-duration="1s">
                                <li className="item">
                                    <h5>Power and flexibility</h5>
                                    <p>general partner/propery manager can set disclosable comissions whenever a trade is made of their token, converting the general partner into a fund manager. That's unbelieveable power.</p>
                                </li>
                                <li className="item">
                                    <h5>RealSafe Marketplace </h5>
                                    <p>Lists all RSOs - The trading of an RSO commences the moment an owner creates a market by offering any amount of his apportioned tokens on the RealSafe Exchange.</p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4 col-md-push-4 col-sm-6">
                            <ul className="list-right wow fadeInRight animated" data-wow-duration="1s">
                                <li className="item">
                                    <h5>Blockchain Explorer API</h5>
                                    <p> Provides the structure to ensure vital RSO stats. are stored on blockchain. Anyone can create a RealSafe Explorer using the API.</p>
                                </li>
                                <li className="item">
                                    <h5>Compliance and safety</h5>
                                    <p>RSO creator sets features to allow investor buy-in restrictions such as kyc compliance, min/max ownership limits, buy/sell freq. limits etc.</p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4 col-md-pull-4 text-center">
                            <img src={'assets/img/features_app.png'} className="image wow fadeInUp animated" alt="" data-wow-duration="1s"/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Features;
