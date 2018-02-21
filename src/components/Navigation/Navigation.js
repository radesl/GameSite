import React from 'react'
import NavBar from './../NavBar'
import Header from './../Header'
import MobileMenuBar from './../MobileMenuBar'
import './style.scss'

const Navigation = props => {
    return (
        <div className='Navigation'>
            <div className='Navigation__Header'>
                <Header />
            </div>
            <div className='Navigation__NavBar'>
                <NavBar />
            </div>
            <div className='Navigation__MobileMenuBar'>
                <MobileMenuBar />
            </div>
        </div>
    )
}
export default Navigation