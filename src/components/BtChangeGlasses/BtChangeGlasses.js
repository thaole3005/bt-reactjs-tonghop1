import React, { Component } from 'react'
import Header from './Header';
import styleModule from './BtChangeGlasses.module.css';
import Content from './Content';

export default class BtChangeGlasses extends Component {
    render() {
        return (
            <div className={styleModule.backgroundChangeGlasses}>
                <div className = {styleModule.overlay}>

                    <Header/>
                    <Content/>
                </div>
            </div>
        )
    }
}
