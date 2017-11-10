'use strict'

import Ru from 'rutils'

import React, { PureComponent } from 'react'

import { logout } from '../../actionCreators/auth'

import { bindActionCreators } from 'redux'

import { withRouter } from 'react-router-dom';

import autobind from 'autobind-decorator'

import { connect } from 'react-redux'

import B from 'bluebird'

import { store } from '../../store.js'


const mapDispatchToProps = ( dispatch, ownProps ) => {
  let actions = {
    logout
  }

  return {
    actions: bindActionCreators( actions, dispatch )
  }
}


const mapStateToProps = ( state, ownProps ) => {

    return {
      profile : state.user.profile,
      token : state.user.token,
    }
}


@withRouter
@connect(mapStateToProps, mapDispatchToProps)
@autobind
class Dashboard2 extends PureComponent {

    constructor(props) {
        super(props);
    }

    logout(e) {
        e.preventDefault();

        let { history, actions } = this.props
        actions
        .logout(null)
        .then( () => {
          console.log( 'store at login ', store.getState() )
          history.push('/')
        })
        .catch(err => {
          console.log( 'Err-Login', err );
          // [ TODO ] --> we should show alert
        })


    }

    render(){
        return(
            <section id="dashboard" className="dashboard-section section" >
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="section-heading wow fadeIn" data-wow-duration="1s">
                                Welcome to Real Safe!
                            </h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-10 col-md-offset-1">
                             <p> Will contact you very soon once the ICO ready </p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Dashboard2
