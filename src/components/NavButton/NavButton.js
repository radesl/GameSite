import React from 'react'
import './style.scss'

const NavButton = (props) => {
    const { title } = props
    return <div className='NavButton'>
        <a>{title}</a>
    </div>
}
export default NavButton