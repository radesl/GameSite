import React from 'react'

class MobileMenuDropdownContainer extends React.Component {
    constructor() {
        super()
        this.showDropdown = this.showDropdown.bind(this)
        this.createDropdownList = this.createDropdownList.bind(this)
    }
    createDropdownList() {
        const { dropdown } = this.props
        return dropdown.map((option, id) => {
            return <option key={id}>{option}</option>
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
            <div>
                {showDropdown}
            </div>
        )
    }
}
export default MobileMenuDropdownContainer