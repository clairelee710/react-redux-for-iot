const initialState = []

export default function settingsDataReducer(state = initialState, action) {
    
    switch (action.type) {
        case 'INIT_SETTINGS_LIST':
            return action.payload

        default:
            return state
    }
}
