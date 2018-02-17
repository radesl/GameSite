import React from 'react'
import Header from './Header'
import './style.scss'

class HeaderContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            isMobile: false
        }
        this.checkWidth = this.checkWidth.bind(this)
    }
    componentDidMount() {
        window.addEventListener('resize', this.checkWidth)
    }
    checkWidth() {
        const { isMobile } = this.state
        if (window.innerWidth < 1023) {
            this.setState({
                isMobile: true
            })
        } else {
            this.setState({
                isMobile: false
            })
        }
    }
    render() {
        const { isMobile } = this.state
        return (
            <Header isMobile={isMobile} />
        )
    }
}
export default HeaderContainer