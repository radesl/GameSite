import React from 'react'
import MobileMenuTitle from './../MobileMenuTitle'
import MobileMenuSection from './../MobileMenuSection'
import MobileMenuDropdownSection from './../MobileMenuDropdownSection'
import PremiumInformation from './../PremiumInformation'
import MobileMenuSocialIcons from './../MobileMenuSocialIcons'
import './style.scss'

class MobileMenuBarContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            isMobile: false,
            openMobileSectionNews: true,
            openMobileSectionTexts: true,
            openMobileSectionEncyclopedia: true,
            openMobileSectionVideo: true,
            openMobileSectionGuides: true,
            openMobileSectionDownloads: true,
            openMobileSectionFreeGames: true,
            openMobileSectionForum: true,
            openMobileSectionShop: true,
            openMobileSectionGPC: true,
            openMobileSectionSubscriptions: true
        }
        this.toggleDisplayOfMobileButton = this.toggleDisplayOfMobileButton.bind(this)
        this.toogleDisplayOfMobileSectionNews = this.toogleDisplayOfMobileSectionNews.bind(this)
        this.toogleDisplayOfMobileSectionTexts = this.toogleDisplayOfMobileSectionTexts.bind(this)
        this.toogleDisplayOfMobileSectionEncyclopedia = this.toogleDisplayOfMobileSectionEncyclopedia.bind(this)
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
    toogleDisplayOfMobileSectionNews() {
        const { openMobileSectionNews } = this.state
        this.setState({
            openMobileSectionNews: !openMobileSectionNews
        })
    }
    toogleDisplayOfMobileSectionTexts() {
        const { openMobileSectionTexts } = this.state
        this.setState({
            openMobileSectionTexts: !openMobileSectionTexts
        })
    }
    toogleDisplayOfMobileSectionEncyclopedia() {
        const { openMobileSectionEncyclopedia } = this.state
        this.setState({
            openMobileSectionEncyclopedia: !openMobileSectionEncyclopedia
        })
    }
    render() {
        const { isMobile, openMobileSectionNews, openMobileSectionTexts, openMobileSectionEncyclopedia,
            openMobileSectionVideo, openMobileSectionGuides, openMobileSectionDownloads,
            openMobileSectionFreeGames, openMobileSectionForum, openMobileSectionShop,
            openMobileSectionGPC, openMobileSectionSubscriptions } = this.state
        return (
            <div className='MobileMenuBarContainer'>
                <div className='MobileMenuBarContainer__navPart'>
                    <div className='MobileMenuBarContainer__navPart__column'>
                        <div className={`MobileMenuBarContainer__navPart__column__section 
                        MobileMenuBarContainer__navPart__column__section--underline`}>
                            {isMobile
                                ? <button onClick={this.toogleDisplayOfMobileSectionNews}
                                    className='MobileMenuBarContainer__navPart__column__section__mobileButton'>
                                    <MobileMenuTitle title={'News'} />
                                </button>
                                : <MobileMenuTitle title={'News'} />
                            }
                            <div className={openMobileSectionNews
                                ? 'MobileMenuBarContainer__navPart__column__section--visibility'
                                : ''}>
                                <MobileMenuSection
                                    topics={['News', 'Top Topics', 'Popular', 'Comics']} />
                            </div>
                        </div>
                        <div className='MobileMenuBarContainer__navPart__column__section'>
                            {isMobile
                                ? <button onClick={this.toogleDisplayOfMobileSectionTexts}
                                    className='MobileMenuBarContainer__navPart__column__section__mobileButton'>
                                    <MobileMenuTitle title={'Texts'} />
                                </button>
                                : <MobileMenuTitle title={'Texts'} />
                            }
                            <div className={openMobileSectionTexts
                                ? 'MobileMenuBarContainer__navPart__column__section--visibility'
                                : ''}>
                                <MobileMenuSection
                                    topics={['Reviews', 'Journalism', 'Preorder', 'gameplay.pl']} />
                            </div>
                        </div>
                    </div>
                    <div className='MobileMenuBarContainer__navPart__column'>
                        <div className='MobileMenuBarContainer__navPart__column__section'>
                            {isMobile
                                ? <button onClick={this.toogleDisplayOfMobileSectionEncyclopedia}
                                    className='MobileMenuBarContainer__navPart__column__section__mobileButton'>
                                    <MobileMenuTitle title={'game encyclopedia'} />
                                </button>
                                : <MobileMenuTitle title={'game encyclopedia'} />
                            }
                            <div className={openMobileSectionEncyclopedia
                                ? 'MobileMenuBarContainer__navPart__column__section--visibility'
                                : ''}>
                                <div className='MobileMenuBarContainer__navPart__column__section--extraMargin'>
                                    <MobileMenuDropdownSection dropdownTitle={'platform'}
                                        dropdown={['PC', 'PS4', 'PS3', 'XONE', 'X360', 'Switch', 'AND', 'IOS']} />
                                </div>
                                <div className='MobileMenuBarContainer__navPart__column__section--extraMargin'>
                                    <MobileMenuDropdownSection dropdownTitle={'species'}
                                        dropdown={['Action games', 'RPG', 'MMO games', 'Strategic games', 'Adventure',
                                            'Sports', 'arcade', 'Fighting games', 'Racing games', 'simulations',
                                            'Logic games']} />
                                </div>
                                <MobileMenuSection
                                    topics={['Top Games', 'dates of the premier', 'Beta Tests', 'ranking of games',
                                        'recommended', 'company catalogue']} />
                            </div>
                        </div>
                    </div>
                    <div className='MobileMenuBarContainer__navPart__column'>
                        <div className={`MobileMenuBarContainer__navPart__column__section 
                        MobileMenuBarContainer__navPart__column__section--underline`}>
                            {isMobile
                                ? <button className='MobileMenuBarContainer__navPart__column__section__mobileButton'>
                                    <MobileMenuTitle title={'Video'} />
                                </button>
                                : <MobileMenuTitle title={'Video'} />
                            }
                            <MobileMenuSection topics={['tvgame.pl', 'video from games', 'movie trailers']} />
                        </div>
                        <div className={`MobileMenuBarContainer__navPart__column__section 
                        MobileMenuBarContainer__navPart__column__section--underline`}>
                            {isMobile
                                ? <button className='MobileMenuBarContainer__navPart__column__section__mobileButton'>
                                    <MobileMenuTitle title={'Guides'} />
                                </button>
                                : <MobileMenuTitle title={'Guides'} />
                            }
                            <MobileMenuSection topics={['codes and trainers']} />
                        </div>
                        <div className='MobileMenuBarContainer__navPart__column__section'>
                            {isMobile
                                ? <button className='MobileMenuBarContainer__navPart__column__section__mobileButton'>
                                    <MobileMenuTitle title={'Downloads'} />
                                </button>
                                : <MobileMenuTitle title={'Downloads'} />
                            }
                            <div className='MobileMenuBarContainer__navPart__column__section--extraMargin'>
                                <MobileMenuDropdownSection dropdownTitle={'downloads'}
                                    dropdown={['games and demos', 'Mods', 'updates', 'programs',
                                        'wallpaper']} />
                            </div>
                        </div>
                    </div>
                    <div className='MobileMenuBarContainer__navPart__column'>
                        <div className={`MobileMenuBarContainer__navPart__column__section 
                        MobileMenuBarContainer__navPart__column__section--underline`}>
                            {isMobile
                                ? <button className='MobileMenuBarContainer__navPart__column__section__mobileButton'>
                                    <MobileMenuTitle title={'Free Games'} />
                                </button>
                                : <MobileMenuTitle title={'Free Games'} />
                            }
                        </div>
                        <div className={`MobileMenuBarContainer__navPart__column__section 
                        MobileMenuBarContainer__navPart__column__section--underline`}>
                            {isMobile
                                ? <button className='MobileMenuBarContainer__navPart__column__section__mobileButton'>
                                    <MobileMenuTitle title={'Forum'} />
                                </button>
                                : <MobileMenuTitle title={'Forum'} />
                            }
                        </div>
                        <div className={`MobileMenuBarContainer__navPart__column__section 
                        MobileMenuBarContainer__navPart__column__section--underline`}>
                            {isMobile
                                ? <button className='MobileMenuBarContainer__navPart__column__section__mobileButton'>
                                    <MobileMenuTitle title={'Shop'} />
                                </button>
                                : <MobileMenuTitle title={'Shop'} />
                            }
                        </div>
                        <div className={`MobileMenuBarContainer__navPart__column__section 
                        MobileMenuBarContainer__navPart__column__section--underline`}>
                            {isMobile
                                ? <button className='MobileMenuBarContainer__navPart__column__section__mobileButton'>
                                    <MobileMenuTitle title={'Forum'} />
                                </button>
                                : <MobileMenuTitle title={'Forum'} />
                            }
                        </div>
                        <div className={`MobileMenuBarContainer__navPart__column__section 
                        MobileMenuBarContainer__navPart__column__section--underline`}>
                            {isMobile
                                ? <button className='MobileMenuBarContainer__navPart__column__section__mobileButton'>
                                    <MobileMenuTitle title={'GPC'} />
                                </button>
                                : <MobileMenuTitle title={'GPC'} />
                            }
                            <MobileMenuSection topics={['week occasions']} />
                        </div>
                        <div>
                            {isMobile
                                ? <button className='MobileMenuBarContainer__navPart__column__section__mobileButton'>
                                    <MobileMenuTitle title={'subscriptions'} />
                                </button>
                                : <MobileMenuTitle title={'subscriptions'} />
                            }
                            <MobileMenuSection topics={['premium content']} />
                        </div>
                    </div>
                    <div className='MobileMenuBarContainer__navPart__column'>
                        <div className={isMobile
                            ? 'MobileMenuBarContainer__navPart__column__section--visibility'
                            : 'MobileMenuBarContainer__navPart__column__section'}>
                            <PremiumInformation options={['Your Profile', 'Collection of Games',
                                'Settings', 'Colors']} />
                        </div>
                    </div>
                </div>
                <div className='MobileMenuBarContainer__socialPart'>
                    <MobileMenuSocialIcons title={'Facebook'}
                        links={['GameSite', 'News', 'tvgame.pl']} />
                    <MobileMenuSocialIcons title={'Youtube'}
                        links={['tvgame.pl', 'tvgame.pl plus']} />
                    <MobileMenuSocialIcons title={'Twitter'}
                        links={['GameSite']} />
                </div>
            </div>
        )
    }
}
export default MobileMenuBarContainer