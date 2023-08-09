import React, { useState } from 'react'
import {AnimateSharedLayout } from 'framer-motion'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Card.css'

function Card(prop) {
  return (
    <AnimateSharedLayout>
            <CompactCard param = {prop} />
        
    </AnimateSharedLayout>
  )
}
function CompactCard ({param}) {
    const Png = param.png;
    return(
        <div className="CompactCard" style={{
            background : param.color.backGround,
            boxShadow : param.color.boxShadow
        }}
        >
            <div className="radialBar">
                <CircularProgressbar
                    value = {param.barValue}
                    text = {`${param.barValue}%`}
                />
                <span>{param.title}</span>
            </div>
            <div className="detail">
                <Png/>
                <span>${param.value}</span>

                <span>Last 24 hours</span>
            </div>
        </div>
    )
}
// Expanded Card

export default Card