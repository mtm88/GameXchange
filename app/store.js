import { applyMiddleware, combineReducers, createStore } from 'redux';
import { createLogger } from 'redux-logger';

import StackNavConfig from './navigation/stackNavigation/navigationConfiguration';
import HomeTabs from './navigation/homeTabs/navigationConfiguration';
import GameList from './navigation/stackNavigation/views/gameList/navigationConfiguration';

const middleware = () => {
  return applyMiddleware(createLogger());
}

export default createStore(
  combineReducers({
    stackNav: (state, action) => StackNavConfig.router.getStateForAction(action, state),
    homeTabs: (state, action) => HomeTabs.router.getStateForAction(action, state),
    gameList: (state, action) => GameList.router.getStateForAction(action, state),
  }),
  middleware(),
)
