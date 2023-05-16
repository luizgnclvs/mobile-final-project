import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import AlbumReviewScreen from './AlbumReviewScreen';
import AlbumDetailsScreen from './AlbumDetailsScreen';
import AboutScreen from './AboutScreen';

const Tab = createBottomTabNavigator();

function BottomTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Reviews" component={AlbumReviewScreen} />
      <Tab.Screen name="Details" component={AlbumDetailsScreen} />
      <Tab.Screen name="About" component={AboutScreen} />
    </Tab.Navigator>
  );
}

export default BottomTab;
