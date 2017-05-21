import { applyMiddleware, combineReducers, createStore } from 'redux';
import { createLogger } from 'redux-logger';

import TabBar from './navigation/tabBar/navigationConfiguration';
import HomeTabNavigation from './navigation/homeTabNavigation/navigationConfiguration';
import MyAccountTabNavigation from './navigation/myAccountTabNavigation/navigationConfiguration';

const middleware = () => {
  return applyMiddleware(createLogger());
}

export default createStore(
  combineReducers({
    tabBar: (state, action) => TabBar.router.getStateForAction(action, state),
    homeTabNavigation: (state, action) => HomeTabNavigation.router.getStateForAction(action, state),
    myAccountTabNavigation: (state, action) => MyAccountTabNavigation.router.getStateForAction(action, state),

  }),
  middleware(),
)
