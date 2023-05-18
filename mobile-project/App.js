import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { NavigationContainer } from '@react-navigation/native';
import { BottomNavigation } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import AlbumDetailsScreen from './screens/AlbumDetailsScreen';
import AlbumReviewScreen from './screens/AlbumReviewScreen';

const Client = new QueryClient();

const routes = [
  { key: 'home', title: 'Home', component: HomeScreen },
  { key: 'about', title: 'About', component: AboutScreen },
  { key: 'details', title: 'Details', component: AlbumDetailsScreen },
  { key: 'review', title: 'Review', component: AlbumReviewScreen },
];

const renderScene = BottomNavigation.SceneMap({
  home: HomeScreen,
  about: AboutScreen,
  details: AlbumDetailsScreen,
  review: AlbumReviewScreen,
});

export default function App() {
  const [index, setIndex] = React.useState(0);

  return (
    <SafeAreaProvider>
      <QueryClientProvider client={Client}>
        <NavigationContainer>
          <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
          />
        </NavigationContainer>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}

