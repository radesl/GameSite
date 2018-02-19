import React from 'react'
import MobileMenuTitle from './../MobileMenuTitle'
import MobileMenuSection from './../MobileMenuSection'
import MobileMenuDropdownSection from './../MobileMenuDropdownSection'
import PremiumInformation from './../PremiumInformation'
import './style.scss'

class MobileMenuBarContainer extends React.Component {
    render() {
        return (
            <div className='MobileMenuBarContainer'>
                <div className='MobileMenuBarContainer__navPart'>
                    <div className='MobileMenuBarContainer__navPart__column'>
                        <div className={`MobileMenuBarContainer__navPart__column__section 
                        MobileMenuBarContainer__navPart__column__section--underline`}>
                            <MobileMenuTitle title={'News'} />
                            <MobileMenuSection
                                topics={['News', 'Top Topics', 'Popular', 'Comics']} />
                        </div>
                        <div className='MobileMenuBarContainer__navPart__column__section'>
                            <MobileMenuTitle title={'Texts'} />
                            <MobileMenuSection
                                topics={['Reviews', 'Journalism', 'Preorder', 'gameplay.pl']} />
                        </div>
                    </div>
                    <div className='MobileMenuBarContainer__navPart__column'>
                        <div className='MobileMenuBarContainer__navPart__column__section'>
                            <MobileMenuTitle title={'game encyclopedia'} />
                            <MobileMenuDropdownSection dropdownTitle={'platform'}
                                dropdown={['PC', 'PS4', 'PS3', 'XONE', 'X360', 'Switch', 'AND', 'IOS']} />
                            <MobileMenuDropdownSection dropdownTitle={'species'}
                                dropdown={['Action games', 'RPG', 'MMO games', 'Strategic games', 'Adventure',
                                    'Sports', 'arcade', 'Fighting games', 'Racing games', 'simulations',
                                    'Logic games']} />
                            <MobileMenuSection
                                topics={['Top Games', 'dates of the premier', 'Beta Tests', 'ranking of games',
                                    'recommended', 'company catalogue']} />

                        </div>
                    </div>
                    <div className='MobileMenuBarContainer__navPart__column'>
                        <div className={`MobileMenuBarContainer__navPart__column__section 
                        MobileMenuBarContainer__navPart__column__section--underline`}>
                            <MobileMenuTitle title={'Video'} />
                            <MobileMenuSection topics={['tvgame.pl', 'video from games', 'movie trailers']} />
                        </div>
                        <div className={`MobileMenuBarContainer__navPart__column__section 
                        MobileMenuBarContainer__navPart__column__section--underline`}>
                            <MobileMenuTitle title={'Guides'} />
                            <MobileMenuSection topics={['codes and trainers']} />
                        </div>
                        <div className='MobileMenuBarContainer__navPart__column__section'>
                            <MobileMenuTitle title={'Downloads'} />
                            <MobileMenuDropdownSection dropdownTitle={'downloads'}
                                dropdown={['games and demos', 'Mods and Expansions', 'updates', 'programs',
                                    'wallpaper']} />
                        </div>
                    </div>
                    <div className='MobileMenuBarContainer__navPart__column'>
                        <div className={`MobileMenuBarContainer__navPart__column__section 
                        MobileMenuBarContainer__navPart__column__section--underline`}>
                            <MobileMenuTitle title={'Free Games'} />
                        </div>
                        <div className={`MobileMenuBarContainer__navPart__column__section 
                        MobileMenuBarContainer__navPart__column__section--underline`}>
                            <MobileMenuTitle title={'Forum'} />
                        </div>
                        <div className={`MobileMenuBarContainer__navPart__column__section 
                        MobileMenuBarContainer__navPart__column__section--underline`}>
                            <MobileMenuTitle title={'Shop'} />
                        </div>
                        <div className={`MobileMenuBarContainer__navPart__column__section 
                        MobileMenuBarContainer__navPart__column__section--underline`}>
                            <MobileMenuTitle title={'Forum'} />
                        </div>
                        <div className={`MobileMenuBarContainer__navPart__column__section 
                        MobileMenuBarContainer__navPart__column__section--underline`}>
                            <MobileMenuTitle title={'GPC'} />
                            <MobileMenuSection topics={['week occasions']} />
                        </div>
                        <div>
                            <MobileMenuTitle title={'subscriptions'} />
                            <MobileMenuSection topics={['premium content']} />
                        </div>
                    </div>
                    <div className='MobileMenuBarContainer__navPart__column'>
                        <div className='MobileMenuBarContainer__navPart__column__section'>
                            <PremiumInformation />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default MobileMenuBarContainer