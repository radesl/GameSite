import React from 'react'
import Login from './../Login'
import Register from './../Register'
import MainLogo from './../MainLogo'
import SocialMediaButtons from './../SocialMediaButtons'
import Burger from './../Burger'
import Search from './../Search'

const Header = props => {
    const { isMobile } = props
    console.log(isMobile)
    return (
        <div className='Header' >
            <div className='Header__partOne'>
                <span className={isMobile ?
                    'Header__partOne__mobileBurger'
                    : 'Header__partOne__mobileBurger--disabled'}>
                    <Burger />
                </span>
                <span>
                    <MainLogo />
                </span>
            </div>
            <div className={isMobile ? 'Header__partTwo--disabled' : 'Header__partTwo'}>
                <div className='Header__partTwo__buttons'>
                    <span className='Header__partTwo__buttons__userButtons'>
                        <Login />
                    </span>
                    <span className='Header__partTwo__buttons__userButtons'>
                        <Register />
                    </span>
                    <SocialMediaButtons />
                </div>
                <div className='Header__partTwo__search'>
                    <span className='Header__partTwo__search__searchElements'>
                        <Burger />
                    </span>
                    <span className='Header__partTwo__search__searchElements'>
                        <Search />
                    </span>
                </div>
            </div>
        </div >)
}
export default Header