import React, { Component } from 'react'
import DLMenu from '../../component/DLMenu'

import logo from '../../asset/image/logo.jpg'


const HeaderLogo = () => {
    return (
        <div style={{ width: 64, height: 64, display: "inline-block", marginRight: 20}}>
            <img src={ logo } style={{ width: "100%", height: "100%"}}></img>
        </div>
    )
}

const DLHeader = ( props ) => {

    return (
        <div style={{width: "100%", display: 'flex'}}>
            <HeaderLogo />
            <nav style={{flex: 1}}>
                <DLMenu></DLMenu>
            </nav>
        </div>
    )
}

export default DLHeader