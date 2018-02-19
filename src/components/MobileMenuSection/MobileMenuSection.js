import React from 'react'
import './style.scss'

const MobileMenuSection = props => {
    const { topic } = props
    return (
        <div className='MobileMenuSection'>
            <a>{topic}</a>
        </div>
    )
}
export default MobileMenuSection