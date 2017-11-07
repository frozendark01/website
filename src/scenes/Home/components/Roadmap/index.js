import React, { Component } from 'react';

class Roadmap extends Component {

    constructor(props) {
        super(props);
    }

    render(){
        return(
            <section id="roadmap" className="roadmap-section section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="section-heading wow fadeIn" data-wow-duration="1s">
                                Roadmap
                            </h2>
                        </div>
                    </div>

                    <div className="row">
                           <div  className="col-md-10 col-md-offset-1">
                               <div className="timeline">
                                   <div className="roadmap-list row">
                                       <div className="roadmap-list-item wow fadeInRight wowed animated col-sm-6 col-sm-offset-6" data-wow-duration="1s" data-wow-delay="0.5s">
                                            <span className="title">Development</span>
                                            <p>
                                            The rare blockchain company developing prior to ICO. Never the less we are 4 developers working day on night on this reality.  It is our number one priority.  RealSafe will be completed with or without ICO. Without means mauch more time and an initial launch with less features.  With means a stellar platform in under one year.</p>
                                            <div className="history-separator-l"> </div>
                                       </div>
                                       <div className="roadmap-list-item-l wow fadeInLeft wowed animated col-sm-6" data-wow-duration="1s" data-wow-delay="0.5s">
                                        <span className="title">PRE-ICO and ICO</span>
                                            <p>An ICO is scheduled with pre-ICO starting in December and main ICO event on January 1st. We plan to raise between 2 and 48 million.  Please see the whitepaper for details.</p>
                                            <div className="history-separator-r"> </div>
                                       </div>
                                       <div className="roadmap-list-item wow fadeInRight wowed animated  col-sm-6 col-sm-offset-6" data-wow-duration="1s" data-wow-delay="0.5s">
                                            <span className="title">Development and Growth of the Ecosystem</span>
                                            <p>Enticing the world's best developers to foster the growth and ensure the security of RealSafe is the mission of the RealSafe Reserve. Please see the whitepaper for details on the Reserve.</p>
                                           <div className="history-separator-l"> </div>
                                       </div>
                                       <div className="roadmap-list-item-l wow fadeInLeft wowed animated col-sm-6" data-wow-duration="1s" data-wow-delay="0.5s">
                                            <span className="title">100% Decentralization</span>
                                            <p>RSOs are self-added. Ensuring the validity and accuracy of each RSO is a collective effort, initiated by the RSO creator and a small network of pre-existing RSOs.  An extensive auditor network will complete the fully autonomous model of RealSafe.   Until then we beleive teh data uploaded as part of starting an RSO should be sufficient for any investor to do sufficient due-diligence by,for exmaple, visiting county offices to check that recorded docs match uploaded URL docs.</p>
                                            <div className="history-separator-r"> </div>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>
                    </div>
            </section>
        )
    }
}

export default Roadmap;
