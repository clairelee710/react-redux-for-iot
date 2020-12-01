const initialState = []

export default function roomsDataReducer(state = initialState, action) {
    
    switch (action.type) {
        case 'INIT_ROOMS_LIST':
            return action.payload

        default:
            return state
    }
}
