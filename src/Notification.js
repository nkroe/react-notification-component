/* eslint-disable react/jsx-pascal-case */
/* eslint-disable no-unused-vars */

import React, { Component } from 'react';
import NotifyHandler from './NotifyHandler';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { string, number, bool, func } from 'prop-types';

const Notification__block = styled.div`
    height: auto;
    position: fixed;
    display: flex;
    justify-content: center;
    justify-content: center;
    opacity: 0;
    z-index: 99999;
`

const Notification__main = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 2px;
    box-shadow: 1px 7px 14px -3px rgba(0,0,0,0.2);
    position: relative;

    &:hover {
        cursor: pointer;
    }
`

const Notification__cont = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
`

const Notification__contText = styled.div`
    align-self: center;
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #fff;
`

const Notification__title = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    height: auto;
    font-family: sans-serif;
    font-size: 12px;
    font-weight: 700;
    user-select: none;
    margin-top: 10px;
    overflow: hidden;
    word-break: break-all;
    text-align: start;
    color: #fff;
`

const Notification__message = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    text-align: start;
    width: 100%;
    height: auto;
    font-family: sans-serif;
    font-size: 11px;
    font-weight: 500;
    user-select: none;
    margin-bottom: 12px;
`

const Notification__progress = styled.div`
    width: 100%;
    height: 4px;
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
    background: #82ccdd;
    box-shadow: 0 -1px 20px 1px rgba(128, 152, 190, 0.8);
    transition-timing-function: linear;
    position: absolute;
    bottom: 0;
`

export default class Notification extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    hoverMain(a) {
        a === 1 ? document.getElementById(this.props.id).children[0].style.background = this.props.mainBackgroundHover : document.getElementById(this.props.id).children[0].style.background = this.props.mainBackground;
    }

    start() {
        this.props.mainBackground = '#fff';
    }

    removeNotify = () => {
        const { animationDelay, id, callback } = this.props;
        if (document.getElementById(id)){
            callback();
            document.getElementById(id).style.opacity = 0;
            setTimeout(() => {
                NotifyHandler.remove(id);
            }, (animationDelay * 1000));
        }
    }

    setPosition = pos => {

        let { id, position } = this.props;

        let getOffset = a => {
            let arr = Array.from(document.querySelectorAll('.notification__block')).filter(w => w.dataset.pos === a);
            let number = arr.includes(document.getElementById(id)) ? arr.indexOf(document.getElementById(id)) : 0;
            return document.querySelector('.notification__block') ? Math.round(arr.slice(0,number).map(w => parseFloat(getComputedStyle(w).height.slice(0,-2))).reduce((a,c) => a+c, 0) + (number * 10)) : 0;
        }

        switch(pos) {
            case 'LT':  
                return {left: 12, top: 12 + getOffset('LT')}
            case 'LB':  
                return {left: 12, bottom: 12 + getOffset('LB')}
            case 'RT':  
                return {right: 12, top: 12 + getOffset('RT')}
            case 'RB':  
                return {right: 12, bottom: 12 + getOffset('RB')}
            default: 
                return {right: 12, top: 12 + getOffset('RT')}
        }
    }

    componentDidMount(){
        const { time, animationDelay, hide, id, callbackAfter } = this.props;
        
        setTimeout(() => {
            document.getElementById(id).style.opacity = 1;
        }, 100)

        setTimeout(() => {
            document.getElementById(id).children[0].children[1].style.width = 0;
        }, (animationDelay * 1000));

        if (hide) {
            setTimeout(() => {
                if (document.getElementById(id)){
                    callbackAfter();
                    document.getElementById(id).style.opacity = 0;
                    setTimeout(() => {
                        NotifyHandler.remove(id);
                    }, (animationDelay * 1000));
                }
            }, time*1000 + ((animationDelay * 1000)))
        }
    }

    render() {
        let { width, height, mainBackground, time, animationDelay, 
                animationTimeFunc, progress, mainBackgroundHoverTime, 
                progressBackground, title, message , position, styleMain, 
                styleTitle, styleMessage, styleProgress
              } = this.props;
        let pos = this.setPosition(position);
        return ( 
            <Notification__block className="notification__block" id={this.props.id} data-pos={this.props.position} onClick={() => { this.removeNotify() }} style={ Object.assign({ width: width, minHeight: height, transition: `all ${animationDelay}s ${animationTimeFunc} 0s` }, pos)}>
                <Notification__main onMouseOver={_ => { this.hoverMain(1) }} onMouseLeave={_ => { this.hoverMain(2) }} style={ Object.assign({ background: mainBackground, transition: `${mainBackgroundHoverTime}s` }, styleMain)}>
                    <Notification__cont>
                        <Notification__contText>
                            <Notification__title style={ styleTitle }>
                                <span>
                                    {title}
                                </span>
                            </Notification__title>
                            <Notification__message style={ styleMessage }>
                                <span >
                                    {message}
                                </span>
                            </Notification__message>
                        </Notification__contText>
                    </Notification__cont>
                    <Notification__progress style={Object.assign({ transitionDuration: `${time}s`, opacity: progress ? '1' : '0', background: progressBackground }, styleProgress)}>

                    </Notification__progress>
                </Notification__main>
            </Notification__block>
         );
    }
}

Notification.defaultProps = {
    width: 220,
    height: 54,
    mainBackground: '#2980b9',
    mainBackgroundHover: '#3498db',
    mainBackgroundHoverTime: 0.2,

    time: 2,
    animationDelay: 0.3,
    animationTimeFunc: 'linear',
    position: 'RT',
    hide: true,
    progress: true,

    title: 'Notification',
    message: 'Some message text :)',
    styleMain: {}, 
    styleTitle: {}, 
    styleMessage: {}, 
    styleProgress: {}

}