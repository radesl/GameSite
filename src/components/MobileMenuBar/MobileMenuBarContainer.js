import React from 'react'
import MobileMenuTitle from './../MobileMenuTitle'
import MobileMenuList from './../MobileMenuList'
import MobileMenuDropdownSection from './../MobileMenuDropdownSection'
import PremiumInformation from './../PremiumInformation'
import MobileMenuSocialIcons from './../MobileMenuSocialIcons'
import Button from './../Button'
import Login from './../Login'
import Register from './../Register'
import SocialMediaButtons from './../SocialMediaButtons'
import Search from './../Search'
import MobileMenuSection from './../MobileMenuSection'
import './style.scss'

class MobileMenuBarContainer extends React.PureComponent {
    constructor() {
        super()
        this.state = {
            isMobile: false,
            menuSections: {
                openMobileSectionNews: false,
                openMobileSectionTexts: false,
                openMobileSectionEncyclopedia: false,
                openMobileSectionVideo: true,
                openMobileSectionGuides: true,
                openMobileSectionDownloads: true,
                openMobileSectionFreeGames: true,
                openMobileSectionForum: true,
                openMobileSectionShop: true,
                openMobileSectionGPC: true,
                openMobileSectionSubscriptions: true
            }
        }
        this.toggleDisplayOfMobileButton = this.toggleDisplayOfMobileButton.bind(this)
        this.toogleDisplayOfMobileSection = this.toogleDisplayOfMobileSection.bind(this)
    }
    componentWillMount() {
        window.addEventListener('resize', this.toggleDisplayOfMobileButton)
    }
    toggleDisplayOfMobileButton() {
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
    toogleDisplayOfMobileSection(sectionState) {
        const { menuSections } = this.state
        const sectionKeys = Object.keys(menuSections)
        const section = sectionKeys.filter(section => {
            return section == sectionState
        })
        this.setState({
            section: !section
        })
    }
    render() {
        const { isMobile, menuSections: {
            openMobileSectionNews,
            openMobileSectionTexts,
            openMobileSectionEncyclopedia,
            openMobileSectionVideo,
            openMobileSectionGuides,
            openMobileSectionDownloads,
            openMobileSectionFreeGames,
            openMobileSectionForum,
            openMobileSectionShop,
            openMobileSectionGPC,
            openMobileSectionSubscriptions
        } } = this.state
        return (
            <div className='MobileMenuBarContainer'>
                <div className={isMobile
                    ? 'MobileMenuBarContainer__searchPart'
                    : 'MobileMenuBarContainer__searchPart--disable'}>
                    <Search />
                </div>
                <div className='MobileMenuBarContainer__menuPart'>
                    <div className='MobileMenuBarContainer__menuPart__navPart'>
                        <div className='MobileMenuBarContainer__menuPart__navPart__column'>
                            <MobileMenuSection
                                title={'News'}
                                topics={['News', 'Top Topics', 'Popular', 'Comics']} />
                            <div className='MobileMenuBarContainer__menuPart__navPart__column__item'>
                                <MobileMenuSection
                                    title={'Texts'}
                                    topics={['Reviews', 'Journalism', 'Preorder', 'gameplay.pl']} />
                            </div>
                        </div>
                        <div className='MobileMenuBarContainer__menuPart__navPart__column'>
                            <MobileMenuSection
                                title={'encyclopedia'}
                                topics={['Top Games', 'dates of the premier', 'Beta Tests', 'ranking of games',
                                    'recommended', 'company catalogue']}
                                dropdown={[['platform', 'PC', 'PS4', 'PS3', 'XONE', 'X360', 'Switch', 'AND', 'IOS'],
                                ['Action games', 'RPG', 'MMO games', 'Strategic games', 'Adventure',
                                    'Sports', 'arcade', 'Fighting games', 'Racing games', 'simulations',
                                    'Logic games']]}
                            />
                        </div>
                        <div className='MobileMenuBarContainer__menuPart__navPart__column'>
                            <MobileMenuSection
                                title={'Video'}
                                topics={['tvgame.pl', 'video from games', 'movie trailers']} />
                            <MobileMenuSection
                                title={'Guides'}
                                topics={['codes and trainers']} />
                            <MobileMenuSection
                                title={'Downloads'}
                                dropdown={[['games and demos', 'Mods', 'updates', 'programs',
                                    'wallpaper']]} />
                        </div>
                        <div className='MobileMenuBarContainer__menuPart__navPart__column'>
                            <MobileMenuSection title={'Free Games'} />
                            <MobileMenuSection title={'Forum'} />
                            <MobileMenuSection title={'Shop'} />
                            <MobileMenuSection title={'Forum'} />
                            <MobileMenuSection
                                title={'GPC'}
                                topics={['week occasions']} />
                            <MobileMenuSection
                                title={'subscriptions'}
                                topics={['premium content']} />
                        </div>
                        <div className='MobileMenuBarContainer__menuPart__navPart__column'>
                            <div className={isMobile
                                ? 'MobileMenuBarContainer__menuPart__navPart__column__section--visibility'
                                : 'MobileMenuBarContainer__menuPart__navPart__column__section'}>
                                <div className='MobileMenuBarContainer__menuPart__navPart__column__section__userOptions'>
                                    <PremiumInformation options={['Your Profile', 'Collection of Games',
                                        'Settings', 'Colors']} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='MobileMenuBarContainer__menuPart__socialPart'>
                        <div className={isMobile
                            ? 'MobileMenuBarContainer__menuPart__socialPart__desktopPart--disable'
                            : 'MobileMenuBarContainer__menuPart__socialPart__desktopPart'}>
                            <MobileMenuSocialIcons title={'Facebook'}
                                links={['GameSite', 'News', 'tvgame.pl']} />
                            <MobileMenuSocialIcons title={'Youtube'}
                                links={['tvgame.pl', 'tvgame.pl plus']} />
                            <MobileMenuSocialIcons title={'Twitter'}
                                links={['GameSite']} />
                        </div>
                        <div className={isMobile
                            ? 'MobileMenuBarContainer__menuPart__socialPart__mobilePart'
                            : 'MobileMenuBarContainer__menuPart__socialPart__mobilePart--disable'}>
                            <div className='MobileMenuBarContainer__menuPart__socialPart__mobilePart__userAccount'>
                                <Login />
                                <Register />
                            </div>
                            <div className='MobileMenuBarContainer__menuPart__socialPart__mobilePart__userOptions'>
                                <PremiumInformation options={['Your Profile', 'Collection of Games',
                                    'Settings', 'Colors']} />
                            </div>
                            <div className='MobileMenuBarContainer__menuPart__socialPart__mobilePart__socialPlatforms'>
                                <SocialMediaButtons />
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        )
    }
}
export default MobileMenuBarContainer