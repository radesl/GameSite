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
                            {/* <div className={`MobileMenuBarContainer__menuPart__navPart__column__section 
                        MobileMenuBarContainer__menuPart__navPart__column__section--underline`}>
                                {isMobile
                                    ? <Button
                                        title={'News'}
                                        handle={this.toogleDisplayOfMobileSection}
                                        sectionState={'openMobileSectionNews'} />
                                    : <MobileMenuTitle title={'News'} />
                                }
                                <div className={openMobileSectionNews
                                    ? 'MobileMenuBarContainer__menuPart__navPart__column__section--visibility'
                                    : ''}>
                                    <MobileMenuList
                                        topics={['News', 'Top Topics', 'Popular', 'Comics']} />
                                </div>
                            </div> */}
                            <MobileMenuSection
                                title={'News'}
                                topics={['News', 'Top Topics', 'Popular', 'Comics']} />
                            {/* <div className='MobileMenuBarContainer__menuPart__navPart__column__section'>
                                {isMobile
                                    ? <button onClick={this.toogleDisplayOfMobileSectionTexts}
                                        className='MobileMenuBarContainer__menuPart__navPart__column__section__mobileButton'>
                                        <MobileMenuTitle title={'Texts'} />
                                    </button>
                                    : <MobileMenuTitle title={'Texts'} />
                                }
                                <div className={openMobileSectionTexts
                                    ? 'MobileMenuBarContainer__menuPart__navPart__column__section--visibility'
                                    : ''}>
                                    <MobileMenuList
                                        topics={['Reviews', 'Journalism', 'Preorder', 'gameplay.pl']} />
                                </div>
                            </div> */}
                            <MobileMenuSection
                                title={'Texts'}
                                topics={['Reviews', 'Journalism', 'Preorder', 'gameplay.pl']} />
                        </div>
                        <div className='MobileMenuBarContainer__menuPart__navPart__column'>
                            {/* <div className='MobileMenuBarContainer__menuPart__navPart__column__section'>
                                {isMobile
                                    ? <button onClick={this.toogleDisplayOfMobileSectionEncyclopedia}
                                        className='MobileMenuBarContainer__menuPart__navPart__column__section__mobileButton'>
                                        <MobileMenuTitle title={'game encyclopedia'} />
                                    </button>
                                    : <MobileMenuTitle title={'game encyclopedia'} />
                                }
                                <div className={openMobileSectionEncyclopedia
                                    ? 'MobileMenuBarContainer__menuPart__navPart__column__section--visibility'
                                    : ''}>
                                    <div className='MobileMenuBarContainer__menuPart__navPart__column__section--extraMargin'>
                                        <MobileMenuDropdownSection dropdownTitle={'platform'}
                                            dropdown={['PC', 'PS4', 'PS3', 'XONE', 'X360', 'Switch', 'AND', 'IOS']} />
                                    </div>
                                    <div className='MobileMenuBarContainer__menuPart__navPart__column__section--extraMargin'>
                                        <MobileMenuDropdownSection dropdownTitle={'species'}
                                            dropdown={['Action games', 'RPG', 'MMO games', 'Strategic games', 'Adventure',
                                                'Sports', 'arcade', 'Fighting games', 'Racing games', 'simulations',
                                                'Logic games']} />
                                    </div>
                                    <MobileMenuList
                                        topics={['Top Games', 'dates of the premier', 'Beta Tests', 'ranking of games',
                                            'recommended', 'company catalogue']} />
                                </div>
                            </div> */}
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
                            {/* <div className={`MobileMenuBarContainer__menuPart__navPart__column__section 
                        MobileMenuBarContainer__menuPart__navPart__column__section--underline`}>
                                {isMobile
                                    ? <button className='MobileMenuBarContainer__menuPart__navPart__column__section__mobileButton'>
                                        <MobileMenuTitle title={'Video'} />
                                    </button>
                                    : <MobileMenuTitle title={'Video'} />
                                }
                                <MobileMenuList topics={['tvgame.pl', 'video from games', 'movie trailers']} />
                            </div> */}
                            <MobileMenuSection
                                title={'Video'}
                                topics={['tvgame.pl', 'video from games', 'movie trailers']} />
                            {/* <div className={`MobileMenuBarContainer__menuPart__navPart__column__section 
                        MobileMenuBarContainer__menuPart__navPart__column__section--underline`}>
                                {isMobile
                                    ? <button className='MobileMenuBarContainer__menuPart__navPart__column__section__mobileButton'>
                                        <MobileMenuTitle title={'Guides'} />
                                    </button>
                                    : <MobileMenuTitle title={'Guides'} />
                                }
                                <MobileMenuList topics={['codes and trainers']} />
                            </div> */}
                            <MobileMenuSection
                                title={'Guides'}
                                topics={['codes and trainers']} />
                            {/* <div className='MobileMenuBarContainer__menuPart__navPart__column__section'>
                                {isMobile
                                    ? <button className='MobileMenuBarContainer__menuPart__navPart__column__section__mobileButton'>
                                        <MobileMenuTitle title={'Downloads'} />
                                    </button>
                                    : <MobileMenuTitle title={'Downloads'} />
                                }
                                <div className='MobileMenuBarContainer__menuPart__navPart__column__section--extraMargin'>
                                    <MobileMenuDropdownSection dropdownTitle={'downloads'}
                                        dropdown={['games and demos', 'Mods', 'updates', 'programs',
                                            'wallpaper']} />
                                </div>
                            </div> */}
                            <MobileMenuSection
                                title={'Downloads'}
                                dropdown={[['games and demos', 'Mods', 'updates', 'programs',
                                    'wallpaper']]} />
                        </div>
                        <div className='MobileMenuBarContainer__menuPart__navPart__column'>
                            {/* <div className={`MobileMenuBarContainer__menuPart__navPart__column__section 
                        MobileMenuBarContainer__menuPart__navPart__column__section--underline`}>
                                {isMobile
                                    ? <button className='MobileMenuBarContainer__menuPart__navPart__column__section__mobileButton'>
                                        <MobileMenuTitle title={'Free Games'} />
                                    </button>
                                    : <MobileMenuTitle title={'Free Games'} />
                                }
                            </div> */}
                            <MobileMenuSection title={'Free Games'} />
                            {/* <div className={`MobileMenuBarContainer__menuPart__navPart__column__section 
                        MobileMenuBarContainer__menuPart__navPart__column__section--underline`}>
                                {isMobile
                                    ? <button className='MobileMenuBarContainer__menuPart__navPart__column__section__mobileButton'>
                                        <MobileMenuTitle title={'Forum'} />
                                    </button>
                                    : <MobileMenuTitle title={'Forum'} />
                                }
                            </div> */}
                            <MobileMenuSection title={'Forum'} />
                            {/* <div className={`MobileMenuBarContainer__menuPart__navPart__column__section 
                        MobileMenuBarContainer__menuPart__navPart__column__section--underline`}>
                                {isMobile
                                    ? <button className='MobileMenuBarContainer__menuPart__navPart__column__section__mobileButton'>
                                        <MobileMenuTitle title={'Shop'} />
                                    </button>
                                    : <MobileMenuTitle title={'Shop'} />
                                }
                            </div> */}
                            <MobileMenuSection title={'Shop'} />
                            {/* <div className={`MobileMenuBarContainer__menuPart__navPart__column__section 
                        MobileMenuBarContainer__menuPart__navPart__column__section--underline`}>
                                {isMobile
                                    ? <button className='MobileMenuBarContainer__menuPart__navPart__column__section__mobileButton'>
                                        <MobileMenuTitle title={'Forum'} />
                                    </button>
                                    : <MobileMenuTitle title={'Forum'} />
                                }
                            </div> */}
                            <MobileMenuSection title={'Forum'} />
                            {/* <div className={`MobileMenuBarContainer__menuPart__navPart__column__section 
                        MobileMenuBarContainer__menuPart__navPart__column__section--underline`}>
                                {isMobile
                                    ? <button className='MobileMenuBarContainer__menuPart__navPart__column__section__mobileButton'>
                                        <MobileMenuTitle title={'GPC'} />
                                    </button>
                                    : <MobileMenuTitle title={'GPC'} />
                                }
                                <MobileMenuList topics={['week occasions']} />
                            </div> */}
                            <MobileMenuSection
                                title={'GPC'}
                                topics={['week occasions']} />
                            {/* <div>
                                {isMobile
                                    ? <button className='MobileMenuBarContainer__menuPart__navPart__column__section__mobileButton'>
                                        <MobileMenuTitle title={'subscriptions'} />
                                    </button>
                                    : <MobileMenuTitle title={'subscriptions'} />
                                }
                                <MobileMenuList topics={['premium content']} />
                            </div> */}
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
                </div>
            </div>
        )
    }
}
export default MobileMenuBarContainer