import React from 'react';

import { StackNavigator } from 'react-navigation';

import homeTabs from './home';
import GameList from './../layouts/gameList';
import OfferDetails from './../layouts/offerDetails';


export const HomeTabs = StackNavigator({
  Home: { screen: homeTabs },
  GameList: { screen: GameList },
  OfferDetails: { screen: OfferDetails },
}, {
    mode: 'card',
    headerMode: 'float',
  });

