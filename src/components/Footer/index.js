import React, { Component } from 'react';

import { Grid, Row , Col } from 'react-bootstrap';

class Footer extends Component {

    constructor(props) {
        super(props);
    }

    render(){
        return(
            <footer className="footer_menu_section footer-section" >
                <div className="background-overlay" ></div>
				<Grid>
                    <Row>
                        <Col md={ 4 } mdOffset={ 4 }>
                            <img src={ 'assets/img/logo.png'}/>
                        </Col>
                        <Col md={ 4 } className="footer-form text-left">
                            <h3 className="title">Stay up to date</h3>
                            <form className="form" action="" method="post" target="_blank">
                                <input className="input" type="email" name="EMAIL" placeholder="Enter your email" />
                                <button className="button">Subscribe</button>
                            </form>
                        </Col>
                    </Row>

					<ul className="social-media-links wow fadeIn animated" data-wow-duration="1s">
						<li>
							<a href="https://www.facebook.com/" target="new">
								<i className="fa fa-facebook"></i>
							</a>
						</li>
						<li>
							<a href="https://twitter.com/" target="new">
								<i className="fa fa-twitter"></i>
							</a>
						</li>
						<li>
							<a href="https://www.instagram.com/" target="new">
								<i className="fa fa-linkedin"></i>
							</a>
						</li>
						<li>
							<a href="https://t.me/" target="new">
								<i className="fa fa-telegram"></i>
							</a>
						</li>
						<li>
							<a href="#" target="new">
								<i className="fa fa-slack"></i>
							</a>
						</li>
					</ul>

                    <Row className="footer-border text-center">
                        <Col md= { 12 }>
                             <div className="copyright_with_menu">Copyright © 2017 RealSafe. All Rights Reserved.</div>
                        </Col>
                        <Col md={ 12 }>
                             <div className="copyright_with_menu">Terms of Use | Privacy Policy </div>
                        </Col>
                    </Row>
				</Grid>
			</footer>
        )
    }
}

export default Footer;
