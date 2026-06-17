import React from 'react'

import Section1 from './section1'
import Section2 from './section2';
import Section3 from './section3';
import Section4 from './section4';

import "../App.css"

export default function Navbar() {
    return (
        <>
            <div className='bg-[#191919]'>
                <Section1 />
                <Section2 />
                <Section3 />
                <Section4 />
            </div>
        </>
    )
}
