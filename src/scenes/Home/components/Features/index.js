import React, { Component } from 'react';
import CollapseText from '../../../../components/CollapseText'

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
                            <p> RealSafe puts any corporation, llc, lp, or membered organization onto blockchain with its own token and greater proof of ownership. Owners receive ownership-validating tokens and officers get a powerhouse of complex financial dealing and governance options at their disposal. Deals intertwine with governance as routine blockchain transactions. Tokens are owned only by KYC compliant persons and entities.  Tokens are tradable on the RealSafe marketplace. The result is a network of RealSafe Organizations (RSO)s, asset-backed decentralized autonomous oragnizations owned 100% by their token holders, managed with security and transparency on the Ethereum blockchain. Pay dividends to just one account and watch them disburse automatically to all your current owners.  Transform your LLC or LP into the likes of an ETF - without the paperwork, yet with greater proof of ownership. RealSafe records KYC on each token holder so your CFO can easily track all token holders who receive any dividend payout throughout the year. No more worrying at tax time. RSOs feature automated distributions and separable voting and ownership tokens. RealSafe Platform offers many transaction types and these services: </p>
                        </div>
                    </div>
                    <div className="row platform">
                        <div className="col-md-4 col-sm-6">
                            <ul className="list-left wow fadeInLeft animated" data-wow-duration="1s">
                                <li className="item">
                                    <h5>Power and flexibility</h5>
                                    <p>Any transaction imaginable is votable as an Issue.  Create an Issue to set a wallet to receive disclosable comissions whenever a trade is made of the company token, easily creating the position of a marketing manager. That's unbelieveable power.</p>
                                </li>
                                <li className="item">
                                    <h5>RealSafe Marketplace </h5>
                                    <p>Lists all RSOs - The trading of an RSO commences the moment any owner creates a market by offering any amount of his apportioned tokens on the RealSafe MarketPlace.</p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4 col-md-push-4 col-sm-6">
                            <ul className="list-right wow fadeInRight animated" data-wow-duration="1s">
                                <li className="item">
                                    <h5>Proof of Ownership</h5>
                                    <CollapseText text="Ownership changes hands. RealSafe proves ownership at a degree far higher than corporate books.  Anyone can view company data on blockchain. But only RSO master wallet signatories can see unencrypted KYC data, linking owners by name and ID to the company on any specified date privately. This creates an unprecedented level of protection for each owner.  RealSafe simulates requirements of the real world with greater proof of ownership using a decentralized and secure network that the platform converts into a corporate ownership tracking authority." size="188"/>
                                </li>
                                <li className="item">
                                    <h5>Compliance - Max. Owners Lock</h5>
                                    <p>RSO signatories set corporate preferences to allow investor buy-in restrictions such as minimum and maximum number of total owners, buy/sell frequency limits etc.</p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4 col-md-pull-4 text-center">
                            <img src={'assets/img/blockchain_explorer.jpg'} className="image wow fadeInUp animated" alt="" data-wow-duration="1s"/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Features;
