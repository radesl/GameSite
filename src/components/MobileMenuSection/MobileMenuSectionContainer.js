import React from 'react'
import MobileMenuSection from './MobileMenuSection'
import MobileMenuList from './../MobileMenuList'
import MobileMenuDropdownSection from './../MobileMenuDropdownSection'

class MobileMenuSectionContainer extends React.PureComponent {
    constructor() {
        super()
        this.state = {
            isOpen: false
        }
        this.toogleSection = this.toogleSection.bind(this)
        this.showTopicsList = this.showTopicsList.bind(this)
        this.showDropdownList = this.showDropdownList.bind(this)
    }
    toogleSection() {
        const { isOpen } = this.state
        this.setState({
            isOpen: !isOpen
        })
    }
    showTopicsList() {
        const { topics } = this.props
        return topics && <MobileMenuList topics={topics} />
    }
    showDropdownList() {
        const { dropdown } = this.props
        return dropdown && dropdown.map((list, index) => {
            return <MobileMenuDropdownSection dropdown={list} key={index} />
        })
    }
    render() {
        const { isOpen } = this.state
        const { title, topics } = this.props
        const showTopicsList = this.showTopicsList()
        const showDropdownList = this.showDropdownList()
        console.log(isOpen, title)
        return (
            <MobileMenuSection
                toogleSection={this.toogleSection}
                isOpen={isOpen}
                title={title}
                showTopicsList={showTopicsList}
                showDropdownList={showDropdownList} />
        )
    }
}
export default MobileMenuSectionContainer