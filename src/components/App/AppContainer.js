import React from 'react'
import App from './App'
import { connect } from 'react-redux'
import * as DATA_REDUCERS from './../../reducers/reducers'
import './style.scss'

class AppContainer extends React.Component {
    componentDidMount() {
        const { checkResolution } = this.props
        window.addEventListener('resize', checkResolution)
    }
    render() {
        console.log('app props', this.props)
        return (
            <App />)
    }
}
const mapStateToProps = state => {
    console.log(state)
    const { isMobile } = state
    return { isMobile }
}
const mapDispatchToProps = dispatch => {
    return {
        checkResolution: width => {
            const checkResolutionOfSite = new Promise((resolve, reject) => {
                const width = window.innerWidth
                resolve(width)
            })
                .then(width => {
                    if (width < 1023) {
                        dispatch({ type: DATA_REDUCERS.IS_MOBILE })
                    } else {
                        dispatch({ type: DATA_REDUCERS.NOT_MOBILE })
                    }
                })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)