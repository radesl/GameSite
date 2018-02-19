import React from 'react'
import MobileMenuDropdown from './MobileMenuDropdown'
import './style.scss'

class MobileMenuDropdownContainer extends React.Component {
    constructor() {
        super()
        this.showDropdown = this.showDropdown.bind(this)
        this.createDropdownList = this.createDropdownList.bind(this)
    }
    createDropdownList() {
        const { dropdown } = this.props
        return dropdown && dropdown.map((option, id) => {
            return <MobileMenuDropdown option={option} key={id} />
        })

    }
    showDropdown() {
        const { dropdownTitle } = this.props
        const createDropdownList = this.createDropdownList()
        return (
            <select>
                <option value=''>{dropdownTitle}</option>
                {createDropdownList}
            </select>)
    }
    render() {
        const showDropdown = this.showDropdown()
        return (
            <div className='MobileMenuDropdownContainer'>
                {showDropdown}
            </div>
        )
    }
}
export default MobileMenuDropdownContainer