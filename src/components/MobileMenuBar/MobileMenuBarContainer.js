import React from 'react'
import MobileMenuSection from './../MobileMenuSection'
import MobileMenuDropdownContainer from './../MobileMenuDropdownSection'

class MobileMenuBarContainer extends React.Component {
    render() {
        return (
            <div className='MobileMenuBarContainer'>
                <div className='MobileMenuBarContainer__partOne'>
                    <MobileMenuSection
                        title={'News'}
                        topics={['News', 'Top Topics', 'Popular', 'Comics']} />
                    <MobileMenuSection
                        title={'Texts'}
                        topics={['Reviews', 'Journalism', 'Before the premiere', 'gameplay.pl']} />
                </div>
                <div className='MobileMenuBarContainer__partTwo'>
                    <MobileMenuDropdownContainer dropdownTitle={'platform'}
                    dropdown={['PC', 'PS4', 'PS3', 'XONE', 'X360', 'Switch', 'AND', 'IOS']}/>
                    <MobileMenuSection title={'game encyclopedia'}
                    />
                </div>
            </div>
        )
    }
}
export default MobileMenuBarContainer