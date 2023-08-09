import React, { useState } from 'react'
import Logo from '../../imgs/logo.png'
import './Sidebar.css'

import { SidebarData } from '../../Data/Data'

function Sidebar() {
    const [click, setClick] = useState(false);
    const handleClick =  () => {
        setClick(true);
    }
  return (
    <div className="Sidebar">
        <div className="logo">
            <img src= {Logo} alt="" className="logo-img" />
            <span>
                Sh<span>o</span>ps
            </span>
        </div>
        <div className="menu">
            <div className="menu">
                {SidebarData.map((item,index) => {
                    return (
                        <div className={click===index?'menuItem active': 'menuItem'}
                        key = {index} onClick={() => setClick(index)}>
                            <item.icon/>
                            <span>{item.heading}</span>
                        </div>

                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default Sidebar