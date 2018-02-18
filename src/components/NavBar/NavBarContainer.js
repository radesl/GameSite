import React from 'react'
import NavButton from './../NavButton'
import './style.scss'

class NavBarContainer extends React.Component {
    render() {
        return (
            <div className='NavBarContainer'>
                <NavButton title={'Home'} />
                <NavButton title={'news'} />
                <NavButton title={'Encyclopedia'} />
                <NavButton title={'tvgame.pl'} />
                <NavButton title={'guides'} />
                <NavButton title={'texts'} />
                <NavButton title={'download'} />
                <NavButton title={'free'} />
                <NavButton title={'shop'} />
                <NavButton title={'forum'} />
            </div>
        )
    }
}
export default NavBarContainer