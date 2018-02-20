import React from 'react'
import './style.scss'

const MobileMenuTitle = props => {
    const { title } = props
    return <div className='MobileMenuTitle MobileMenuTitle--underline'>{title}</div>
}
export default MobileMenuTitle