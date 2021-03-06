import React from 'react'
import facebookImage from './../../resources/socialIcons/facebook.png'
import youtubeImage from './../../resources/socialIcons/youtube.png'
import twitterImage from './../../resources/socialIcons/twitter.png'
import './style.scss'


class SocialMediaButtonsContainer extends React.Component {
    render() {
        return (
            <div className='SocialMediaButtonsContainer'>
                <div className='SocialMediaButtonsContainer__button'>
                    <div className='SocialMediaButtonsContainer__button__mask'>
                        <a><img className='SocialMediaButtonsContainer__button__facebook'
                            src={`/${facebookImage}`} /></a>
                    </div>
                </div>
                <div className='SocialMediaButtonsContainer__button'>
                    <a><img className='SocialMediaButtonsContainer__button__youtube'
                        src={`/${youtubeImage}`} /></a>
                </div>
                <div className='SocialMediaButtonsContainer__button'>
                    <a><img className='SocialMediaButtonsContainer__button__twitter'
                        src={`/${twitterImage}`} /></a>
                </div>
            </div>
        )
    }
}
export default SocialMediaButtonsContainer