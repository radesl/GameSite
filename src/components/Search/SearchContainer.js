import React from 'react'
import magnifierIcon from './../../resources/MenuIcons/magnifier.png'
import './style.scss'

class SearchContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            inputQuery: 'enter title of game ...',
            placeholder: 'enter title of game ...'
        }
        this.handleInput = this.handleInput.bind(this)
        this.handleFocus = this.handleFocus.bind(this)
        this.handleFocusOut = this.handleFocusOut.bind(this)
    }
    handleInput(event) {
        const { inputQuery } = this.state
        const input = event.target.value
        this.setState({
            inputQuery: input
        })
    }
    handleFocus() {
        const { inputQuery } = this.state
        this.setState({
            inputQuery: ''
        })
    }
    handleFocusOut() {
        const { inputQuery, placeholder } = this.state
        this.setState({
            inputQuery: placeholder
        })
    }
    render() {
        const { inputQuery } = this.state
        return (
            <div className='SearchContainer'>
                <input onChange={this.handleInput} onFocus={this.handleFocus}
                    onDoubleClick={this.handleFocusOut} className='SearchContainer__input'
                    value={inputQuery} />
                <button className='SearchContainer__button'>
                    <img src={`/${magnifierIcon}`} />
                </button>
            </div>
        )
    }
}
export default SearchContainer