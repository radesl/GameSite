import React from 'react'
import './style.scss'

const MobileMenuList = props => {
    const { topic } = props
    return (
        <div className='MobileMenuList'>
            <a>{topic}</a>
        </div>
    )
}
export default MobileMenuList