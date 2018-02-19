import React from 'react'
import MobileMenuSection from './MobileMenuSection'

class MobileMenuSectionContainer extends React.Component {
    constructor() {
        super()
        this.showTopics = this.showTopics.bind(this)
    }
    showTopics() {
        const { topics } = this.props
        return topics && topics.map((topic, id) => {
            return <MobileMenuSection topic={topic} key={id} />
        })
    }
    render() {
        const showTopics = this.showTopics()
        return (
            <div className='MobileMenuSectionContainer'>
                {showTopics}
            </div>
        )
    }
}
export default MobileMenuSectionContainer