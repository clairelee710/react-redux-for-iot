const initialState = []

export default function menusReducer(state = initialState, action) {
    switch (action.type) {
        // omit other reducer cases
        case 'INIT_MENUS':{
            // Replace the existing state entirely by returning the new value
            return action.payload
        }
     //    case 'SET_PAGE':{
     //  		return state.map((menu, index) => {
     //  			console.log("SET_PAGE");
     //  			console.log(menu);
     //  			console.log(index);
		   //      if (index !== action.payload) {
		   //        return {
			  //         ...menu,
			  //         isActive: false,
			  //       }
		   //      }

		   //      return {
		   //        ...menu,
		   //        isActive: true,
		   //      }
		   //   })
    	// }
        default:
            return state
    }
}
