const tempReducer = (state = 0, action) => {
    switch (action.type) {
        case 'TEMP_UP':
            console.log("TEMP_UP");
            console.log(state);
            console.log(action.payload);
            
            return state.map((item) => {
                console.log(item);
                if (item === "location") {
                    return {
                        ...item,
                        temp_set: Number(action.payload) + 1
                    }
                }

                return {
                    ...item
                }
            })

        case 'TEMP_DOWN':
            // return Number(action.payload) - 1

        default:
            return state
    }
}


export default tempReducer