import { applyMiddleware, combineReducers, createStore } from 'redux';
import { createLogger } from 'redux-logger';

// import homeTabs from './layouts/home';
// import GameList from './layouts/gameList';
// import OfferDetails from './layouts/offerDetails';

// import { HomeTabs } from './navigation/tabBarNavigation/navigationConfiguration';
import { NavigatorTabOne } from './navigation/tabOne/navigationConfiguration'
import { TabBar, tabBarReducer } from './navigation/tabBarNavigation/navigationConfiguration';

const middleware = () => {
  return applyMiddleware(createLogger());
}

export default createStore(
  combineReducers({
    tabBar: tabBarReducer,
    tabOne: (state, action) => NavigatorTabOne.router.getStateForAction(action, state),
  }),
  middleware(),
)
