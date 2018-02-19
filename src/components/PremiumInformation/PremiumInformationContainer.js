import React from 'react'
import PremiumInformation from './PremiumInformation'
import './style.scss'

class PremiumInformationContainer extends React.Component {
    constructor() {
        super()
        this.showOptionList = this.showOptionList.bind(this)
    }
    showOptionList() {
        const { options } = this.props
        return options && options.map((option, id) => {
            return <PremiumInformation option={option} key={id} />
        })
    }
    render() {
        const showOptionList = this.showOptionList()
        return (
            <ul className='PremiumInformationContainer'>
                {showOptionList}
            </ul>
        )
    }
}
export default PremiumInformationContainer