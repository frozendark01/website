import React, { Component } from 'react';
//import Styles from '../stylesheets/components/SearchBar.scss'
import Ru from 'rutils'
import AboutFeature from './components/AboutFeature'

let aboutList = [
    {
        title: 'Tokenizing Service ',
        text: 'Any corporate officer authorized to do so can tokenize their corporate structure holding real estate with no third party necessary.   Never the less, an attorney is recommended to make the changes to corporate agreement to refelect the new unit of ownership as the unique token symbol the RSO will receive.  RealSafe will encourgage 3rd parties to provide this advice and will itself offer an advising framework and templated documents to facilitate the legal changes necessary based on the corporate type.  Extension of any corpoation or corporate holding structure  with one or more owners (LP, LLC C-corp, S-corp, SPV, Anonymous Society, etc.) into a tokenized asset managment solution on the RealSafe platform is the result. This extended form is a Real Estate-backed DAO, we call an RSO. This process removes the current barriers of central gatekeeping and a forced intial sale to asset-backed tokenization. ',
        icon:'fa fa-hdd-o'

    },
    {
        title: 'RealSafe Marketplace - Lists all RSOs',
        text: 'The trading of an RSO commences the moment an owner creates a market by offering any amount of his apportioned tokens on the RealSafe Exchange.',
        icon:'fa fa-line-chart'

    },
    {
        title: 'Blockchain Explorer API',
        text: 'Provides the structure to ensure vital RSO stats. are stored on blockchain. Anyone can create a RealSafe Explorer using the API.  Financial reportring on current owners of an RSO is availble by decrypting KYC data.  This is the right of signatories to the RSO wallet only.  The risk of eventual public decryption is unknown as is the risk of someone stealing the corporate books of a real-world company. However, the risk, (public knowledge of who owns what) is far less than the reward the platform provides, secure ownership and provable reporting. Each encryption algorithm is different for each RSO.',
        icon:'fa fa-code'

    },
    {
        title: 'RealSafe Blockchain Explorer',
        text: 'For any RSO selected, displays: a) Number of outstanding tokens and owners b) Addreseses and estimated values of each asset c)Outstanding issues up for vote.  All the basic reporting required by the financial officer is available to RSO signatories. One of the votable Isuue templates allows for adding or changing RSO signatories.',
        icon:'fa fa-compass'

    },
    {
        title: 'RealSafe Wallet',
        text: 'Add an RSO, file the new corporate agreement with the state.  Notarize any regulatory documents before uploading them. RSO voting strucutre. Raise funds as secondary Offerings. Privatize RSO or make it public.',
        icon:'fa fa-vcard-0'

    },
    {
        title: 'Compliance - Maximum number of Owners ',
        text: 'RSO signatories set corporate preferences to allow investor buy-in restrictions such as minimum and maximum number of total owners, buy/sell frequency limits etc.',
        icon:'fa fa-shield'

    },
    {
        title: 'RSO tokens',
        text: 'Unique symbols to represent each RSOs ownership. For example, the RSO named Lower Manhattan REIT has token symbol NYC1 on the RealSafe exchange',
        icon:'fa fa-thumbs-o-up'

    },
    {
        title: 'Power and flexibility',
        text: "general partner/propery manager can set disclosable comissions whenever a trade is made of their token, converting the general partner into a fund manager. That's unbelieveable power.",
        icon:'fa fa-rocket'

    },

]
class Aboutus extends Component {

    constructor() {
        super();
    }

    render(){
        return(
			<section id="aboutus" className="aboutus-section section">
				<div className="container" >
					<div className="row">
                        <div className="col-md-12">
                            <h2 className="section-heading wow fadeIn" data-wow-duration="1s">
                               We are RealSafe
                            </h2>
                            <p className="wow fadeIn description" data-wow-duration="1s">
                               RealSafe puts any corporation onto blockchain with its own token and greater proof of ownership than it currently has. Owners receive exchange-tradable tokens and officers receive a powerhouse of complex financial dealing and governance options at their disposal. These become routine blockchain transactions.  The result is a network of RealSafe Organizations (RSO)s, asset-backed decentralized autonomous oragnizations owned 100% by their token holders, traded and managed with security and transparency on the Ethereum blockchain.
                                <br/>Raise funds backed by a 4-family building with no risk of default or extend a portfolio of assets into a fully exchange-traded REIT. RealSafe RSOs feature automated distributions and separable voting and ownership tokens. RealSafe Platform offers these services:
                            </p>
                        </div>
                    </div>
					<div className="about-list row wow fadeIn" data-wow-duration="1s">
                        {
                            Ru.addIndex(Ru.map)(this.renderAboutFeature, aboutList)
                        }
					</div>
				</div>
			</section>
        )
    }


    renderAboutFeature(spec, i){
        return (
            <AboutFeature spec={ spec } key = { i } index = { i }  />
        )
    }
}

export default Aboutus;
