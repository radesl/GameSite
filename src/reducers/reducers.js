import { connect } from "react-redux"

const defaultState = {
    isMobile: null
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case IS_MOBILE: {
            const newState = Object.assign({}, state, {
                isMobile: true
            })
            return newState
        }
        case NOT_MOBILE: {
            const newState = Object.assign({}, state, {
                isMobile: false
            })
            return newState
        }
        default: return defaultState
    }
}

export const IS_MOBILE = 'IS_MOBILE'
export const NOT_MOBILE = 'NOT_MOBILE'