import React, { Component } from 'react';
import NotifyHandler from './NotifyHandler';
import Notification from './Notification'

class TestComp extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            comp: []
         }
    }

    componentDidMount(){
        NotifyHandler.addChangeListener(this.changeCallback)
    }

    changeCallback = (data) => {
        if ((this.props.maxNotify > 0) && (data.length > this.props.maxNotify)) {
            NotifyHandler.remove(data[data.length-1].id);
        } else {
            this.setState({
                comp: data
            })
            setTimeout(() => {
                this.forceUpdate();
            }, 0);
        }
    }

    render() { 
        return ( 
            <>
                { 
                    this.state.comp.map((w,e) => {
                        let { id, title, message, callback, callbackAfter, funcs, styles } = w;
                        let { time, animationDelay, animationTimeFunc, hide, progress, position } = funcs;
                        let { width, height, mainBackground, mainBackgroundHover, mainBackgroundHoverTime ,styleMain, styleTitle, styleMessage, styleProgress } = styles;
                        return <Notification 
                                    key={ id } 
                                    id={ id }
                                    title={ title }
                                    message={ message }
                                    time={ time }
                                    animationDelay={ animationDelay }
                                    animationTimeFunc={ animationTimeFunc }
                                    hide={ hide }
                                    progress={ progress } 
                                    width={ width }
                                    height={ height }
                                    position={ position }
                                    mainBackground = { mainBackground }
                                    mainBackgroundHover = { mainBackgroundHover }
                                    mainBackgroundHoverTime = { mainBackgroundHoverTime }
                                    styleMain={ styleMain }
                                    styleTitle={ styleTitle }
                                    styleMessage={ styleMessage }
                                    styleProgress={ styleProgress }
                                    callback={ callback }
                                    callbackAfter= { callbackAfter }
                                />
                    } ) 
                }
            </>
        );
    }
}
 
export default TestComp;