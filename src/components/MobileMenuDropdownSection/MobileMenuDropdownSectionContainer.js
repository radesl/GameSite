import React from 'react'
import MobileMenuDropdown from './MobileMenuDropdown'
import './style.scss'

class MobileMenuDropdownContainer extends React.Component {
    constructor() {
        super()
        this.createDropdownList = this.createDropdownList.bind(this)
    }
    createDropdownList() {
        const { dropdown } = this.props
        return dropdown && dropdown.map((option, id) => {
            return <MobileMenuDropdown option={option} key={id} />
        })

    }
    render() {
        const createDropdownList = this.createDropdownList()
        return (
            <div className='MobileMenuDropdownContainer'>
                <select>
                    {createDropdownList}
                </select>
            </div>
        )
    }
}
export default MobileMenuDropdownContainer