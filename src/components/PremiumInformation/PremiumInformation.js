import React from 'react'

const PremiumInformation = props => {
    const { option } = props
    return (
        <li className='PremiumInformation'>
            <a>{option}</a>
        </li>)
}
export default PremiumInformation