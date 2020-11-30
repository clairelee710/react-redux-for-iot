const initialState = []

export default function homeDataReducer(state = initialState, action) {
    let location = {};
    
    switch (action.type) {
        // omit other reducer cases
        case 'INIT_HOME_PAGE':
            // Replace the existing state entirely by returning the new value
            return action.payload

        case 'TEMP_UP':
            console.log("TEMP_UP");
            console.log(state);
            console.log(action.payload);
            location = state.location;
            let max = Number(location.temp_max);
            console.log(max);
            if (action.payload === max) {
            	return state;
            }
            return {
                ...state,
                location: { ...location,
                    temp_set: Number(action.payload) + 1
                }
            }

        case 'TEMP_DOWN':
            console.log("TEMP_DOWN");
            console.log(state);
            console.log(action.payload);
            location = state.location;
            let min = Number(location.temp_min);
            console.log(min);
            if (action.payload === min) {
            	return state;
            }
            return {
                ...state,
                location: { ...location,
                    temp_set: Number(action.payload) - 1
                }
            }

        default:
            return state
    }
}
