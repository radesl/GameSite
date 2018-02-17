import React from 'react'
import hamburgerIcon from './../../resources/MenuIcons/hamburger.png'
import './style.scss'

class BurgerContainer extends React.Component {
    render() {
        return (
            <button className='BurgerContainer'>
                <img src={`/${hamburgerIcon}`} />
            </button>
        )
    }
}
export default BurgerContainer