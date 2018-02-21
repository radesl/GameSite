import React from 'react'

const Button = props => {
    const { title, handle, sectionState } = props
    return <button onClick={handle(sectionState)}>{title}</button>
}
export default Button