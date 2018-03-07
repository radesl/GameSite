import React from 'react'
import MobileMenuTitle from './../MobileMenuTitle'
import Button from './../Button'
import './style.scss'

const MobileMenuSection = props => {
    const { toogleSection, isOpen, title, showTopicsList, showDropdownList } = props
    return (
        <div className='MobileMenuSection'>
            <Button handle={toogleSection} title={title} />
            <div className={isOpen
                ? 'MobileMenuSection__content'
                : 'MobileMenuSection__content--hidden'}>
                {showDropdownList}
                {showTopicsList}
            </div>
        </div>
    )
}
export default MobileMenuSection