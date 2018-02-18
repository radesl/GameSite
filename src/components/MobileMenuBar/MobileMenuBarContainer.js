import React from 'react'
import MobileMenuTitle from './../MobileMenuTitle'
import MobileMenuSection from './../MobileMenuSection'
import MobileMenuDropdownSection from './../MobileMenuDropdownSection'

class MobileMenuBarContainer extends React.Component {
    render() {
        return (
            <div className='MobileMenuBarContainer'>
                <div className='MobileMenuBarContainer__partOne'>
                    <div>
                        <MobileMenuTitle title={'News'} />
                        <MobileMenuSection
                            topics={['News', 'Top Topics', 'Popular', 'Comics']} />
                    </div>
                    <div>
                        <MobileMenuTitle title={'Texts'} />
                        <MobileMenuSection
                            topics={['Reviews', 'Journalism', 'Before the premiere', 'gameplay.pl']} />
                    </div>
                </div>
                <div className='MobileMenuBarContainer__partTwo'>
                    <div>
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
                <div className='MobileMenuBarContainer__partThree'>
                    <div>
                        <MobileMenuTitle title={'Video'} />
                        <MobileMenuSection topics={['tvgame.pl', 'video from games', 'movie trailers']} />
                    </div>
                    <div>
                        <MobileMenuTitle title={'Guides'} />
                        <MobileMenuSection topics={['codes and trainers']} />
                    </div>
                    <div>
                        <MobileMenuTitle title={'Downloads'} />
                        <MobileMenuDropdownSection dropdownTitle={'downloads'}
                            dropdown={['games and demos', 'Mods and Expansions', 'updates', 'programs',
                                'wallpaper']} />
                    </div>
                </div>
                <div className='MobileMenuBarContainer__partFour'>
                    <div>
                        <div>
                            <MobileMenuTitle title={'Free Games'} />
                        </div>
                        <div>
                            <MobileMenuTitle title={'Forum'} />
                        </div>
                        <div>
                            <MobileMenuTitle title={'Shop'} />
                        </div>
                        <div>
                            <MobileMenuTitle title={'Forum'} />
                        </div>
                        <div>
                            <MobileMenuTitle title={'GPC'} />
                            <MobileMenuSection topics={['occasion of the week']} />
                        </div>
                        <div>
                            <MobileMenuTitle title={'subscriptions'} />
                            <MobileMenuSection topics={['what gives you premium']} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default MobileMenuBarContainer