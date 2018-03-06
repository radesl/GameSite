import React from 'react'
import MobileMenuList from './MobileMenuList'

class MobileMenuListContainer extends React.Component {
    constructor() {
        super()
        this.showTopics = this.showTopics.bind(this)
    }
    showTopics() {
        const { topics } = this.props
        return topics && topics.map((topic, id) => {
            return <MobileMenuList topic={topic} key={id} />
        })
    }
    render() {
        const showTopics = this.showTopics()
        return (
            <div className='MobileMenuListContainer'>
                {showTopics}
            </div>
        )
    }
}
export default MobileMenuListContainer