import React from 'react'
import MobileMenuSocialIcons from './MobileMenuSocialIcons'
import './style.scss'

class MobileMenuSocialIconsContainer extends React.Component {
    constructor() {
        super()
        this.showSocialPlatforms = this.showSocialPlatforms.bind(this)
    }
    showSocialPlatforms() {
        const { links } = this.props
        return links && links.map((link, id) => {
            return <MobileMenuSocialIcons link={link} key={id} />
        })
    }
    render() {
        const showSocialPlatforms = this.showSocialPlatforms()
        const { title } = this.props
        return (
            <div className='MobileMenuSocialIconsContainer'>
                <div className={`MobileMenuSocialIconsContainer--${title}`}>{title}:</div>
                <div className='MobileMenuSocialIconsContainer__platformLinks'>
                    {showSocialPlatforms}
                </div>
            </div>
        )
    }
}
export default MobileMenuSocialIconsContainer