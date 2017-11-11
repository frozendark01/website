'use strict'

import React, { PureComponent } from 'react'

import Ru from 'rutils'

import autobind from 'autobind-decorator'

import {
  withRouter
} from 'react-router-dom';

let pointerStyle = {
  cursor: 'pointer'
}

@withRouter
@autobind
class TopBar extends PureComponent {
    constructor(props){
        super(props)

        this.state = {
            topBarClass: '',
            isActive: ''
        }

        this.linksSpec = this.updateLinkSpec(
          this.props.location.pathname,
          this.props.linksSpec
        )

        this.props.history.listen( (location, action) => {
            console.log('location::: ', location);

            this.linksSpec = this.updateLinkSpec(
                location.pathname,
                this.props.linksSpec
            )
        });

    }


    render(){
          return(
            <header className={  "header-section navbar-fixed-top navbar-default header-floating header-fixed " +  this.state.topBarClass } >
              <div className="container">
                  	<div className="navbar-header">
                          <button type="button" className="navbar-toggle" data-toggle="collapse"  data-target="#navigation">
                              <span className="sr-only">Toggle navigation</span>
                              <span className="icon-bar"></span>
                              <span className="icon-bar"></span>
                              <span className="icon-bar"></span>
                          </button>
                          <a
                          className = "navbar-logo"
                          style =  { pointerStyle }
                          href="/"
                          onClick={ () => {
                              this.manageTopBar('/')
                            } }
                          >
                         <img src={'assets/img/logo.png'}  alt=""/>
                            <span className="first">Real</span>Safe
                          </a>
                      </div>

                      <div id="navigation" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav navbar-right">
                              {
                                  Ru.addIndex(Ru.map)(this.renderLink, this.linksSpec)
                              }
                        </ul>
                    </div>
              </div>
            </header>
        )
    }

    updateLinkSpec( activeRoute, linksSpec ){

        console.log('activeRoute::: ', activeRoute);

        const setActiveForRoute = linkSpec => {
            let {
              type,
              item
            } = linkSpec

            let isActive = activeRoute === '/' ? false : item.pointer === activeRoute

            return {
              type,
              item: Ru.assoc('isActive', isActive, item)
            }
        }

        const setActiveForAnchor = linkSpec => {
            let {
              type,
              item
            } = linkSpec

            // console.log('`${item.pointer}${Ru.tail(item.path)}`::: ', `${item.pointer}${Ru.tail(item.path)}`);


            let isActive =  ( `${item.pointer}${Ru.tail(item.path)}` === activeRoute)

            return {
              type,
              item: Ru.assoc('isActive', isActive, item)
            }
        }


        const mapper = Ru.cond([
          [ Ru.propEq( 'type', 'url')       ,   Ru.I                ],
          [ Ru.propEq( 'type', 'custom')    ,   Ru.I                ],
          [ Ru.propEq( 'type', 'anchor')    ,   setActiveForAnchor  ],
          [ Ru.propEq( 'type', 'route')     ,   setActiveForRoute   ],
        ])





        return Ru.map( mapper, linksSpec )

    }

    manageTopBar (route) {
        if (route !== '/') {
            this.setState({
                topBarClass: 'floatingRoute',
            });
        } else {
            this.setState({
                topBarClass: ''
            });
        }
    }

    renderLink(spec, i){
        let {
            type,
            item
        } =  spec


        const mkUrlProps = item => {
          let {
            pointer,
            sameTab,
            icon,
            className
          } = item

          return {
            style: pointerStyle,
            href: pointer,
            target: sameTab ? '_self' : '_blank',
          }
        }

        const mkCustomProps = item => {
          let {
            onClickAction,
            icon,
            className
          } = item

          return {
            style: pointerStyle,
            onClick: onClickAction
          }
        }

        const mkAnchorProps = item => {
          let {
            pointer,
            path,
            icon,
            className,
          } = item

          return {
            style: pointerStyle,
            onClick: () => {
              this.props.history.push( pointer )
              this.manageTopBar( pointer )
            },
            href: path
          }
        }

        const mkRouteProps = item => {
          let {
            pointer,
            icon,
            className,
          } = item

          return {
            style: pointerStyle,
            onClick: () => {
              this.props.history.push( pointer )
              this.manageTopBar( pointer )
            }
          }
        }

        const mkProps = Ru.cond([
          [ Ru.propEq( 'type', 'url')       ,   Ru.o( mkUrlProps    , Ru.prop('item') ) ],
          [ Ru.propEq( 'type', 'custom')    ,   Ru.o( mkCustomProps , Ru.prop('item') ) ],
          [ Ru.propEq( 'type', 'anchor')    ,   Ru.o( mkAnchorProps , Ru.prop('item') ) ],
          [ Ru.propEq( 'type', 'route')     ,   Ru.o( mkRouteProps  , Ru.prop('item') ) ],
        ])


        // console.log('item::: ', item);

        if ( type === 'route' || type === 'anchor') {

        }

        return (
          item.showIf() ?
            <li key={i} className={ item.isActive?'isActive':'' }> <a {...mkProps(spec)}>{ item.title }</a> </li>
            :''
        )
    }
}

export default TopBar
