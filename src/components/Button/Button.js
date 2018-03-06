import React from 'react'
import './style.scss'

const Button = props => {
    const { title, handle } = props
    return <button
        className='MobileMenuButton'
        onClick={handle}>{title}</button>
}
export default Button