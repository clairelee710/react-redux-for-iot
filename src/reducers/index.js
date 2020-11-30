import {combineReducers} from 'redux'

import menusReducer from './menusReducer'
import homeDataReducer from './homeDataReducer'
import modesDataReducer from './modesDataReducer'
import pageReducer from './pageReducer'
import loadingReducer from './isLoading'

const rootReducer = combineReducers({
  menus: menusReducer,
  homeData: homeDataReducer,
  modesData: modesDataReducer,
  currentPage: pageReducer,
  isLoading: loadingReducer
})

export default rootReducer
