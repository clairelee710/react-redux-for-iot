export const increment = (tempValue) => {
    return {
        type: 'TEMP_UP',
        payload: tempValue
    }
}

export const decrement = (tempValue) => {
    return {
        type: 'TEMP_DOWN',
        payload: tempValue
    }
}

export const setModeActive = (modeNo) => {
    return {
        type: 'SET_MODE_ACTIVE',
        payload: modeNo
    }
}

export const switchLoading = () => {
    return {
        type: 'LOADING'
    }
}

export const switchPage = (index) => {
    return {
      type: 'SET_CURRENTPAGE', 
      payload: index 
    }
}