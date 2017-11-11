'use strict'

import React, { PureComponent } from 'react';
import Ru from 'rutils';
import autobind from 'autobind-decorator';

import { Col } from 'react-bootstrap';

import CollapseText from '../../../../../../components/CollapseText'

@autobind
class AboutFeature extends PureComponent {

    constructor(props) {
        super(props);
    }

    render (){
        return (
            <Col md={ 6 }  className="about-list-item">
                <div className="general_img">
                <i className={ this.props.spec.icon }></i>
                </div>
                <h3>{ this.props.spec.title }</h3>
                <CollapseText text={this.props.spec.text} size={200} />
            </Col>
        )
    }
}

export default AboutFeature;
