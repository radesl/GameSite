import React from 'react'
import MobileMenuSocialIcons from './MobileMenuSocialIcons'

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
            <div>
                <div>{title}</div>
                <div>
                    {showSocialPlatforms}
                </div>
            </div>
        )
    }
}
export default MobileMenuSocialIconsContainer