import React from 'react'
import MobileMenuTitle from './../MobileMenuTitle'
import Button from './../Button'

const MobileMenuSection = props => {
    const { toogleSection, isOpen, title, showTopicsList, showDropdownList } = props
    return (
        <div className='MobileMenuSection'>
            <Button handle={toogleSection} title={title} />
            {showDropdownList}
            {showTopicsList}
        </div>
    )
}
export default MobileMenuSection