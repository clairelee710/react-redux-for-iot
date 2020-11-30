const initialState = []

export default function modesDataReducer(state = initialState, action) {
    
    switch (action.type) {
        // omit other reducer cases
        case 'INIT_MODES_LIST':
            // Replace the existing state entirely by returning the new value
            return action.payload

        case 'SET_MODE_ACTIVE':
            console.log("SET_MODE_ACTIVE");
            console.log(state);
            console.log(action.payload);
            return state.map(
                p => (p.no === action.payload ? { ...p, is_active: true } : { ...p, is_active: false })
            )

        default:
            return state
    }
}
