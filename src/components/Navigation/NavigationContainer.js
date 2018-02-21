import React from 'react'
import Navigation from './Navigation'

class NavigationContainer extends React.PureComponent {
    constructor() {
        super()
    }
    render() {
        return (
            <Navigation handleClick={this.toogleMobileMenu} displayMenu={displayMenu} />
        )
    }
}
export default NavigationContainer