import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import AlbumDetailsScreen from './screens/AlbumDetailsScreen';
import AlbumReviewScreen from './screens/AlbumReviewScreen';

const Client = new QueryClient();
const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<QueryClientProvider client={Client}>
			<NavigationContainer>
				<Stack.Navigator initialRouteName='Home'>
					<Stack.Screen name='Home' component={HomeScreen} />
					<Stack.Screen name='About' component={AboutScreen} />
					<Stack.Screen name='AlbumDetailsScreen' component={AlbumDetailsScreen} />
					<Stack.Screen name='AlbumReviewScreen' component={AlbumReviewScreen} />
				</Stack.Navigator>
			</NavigationContainer>
		</QueryClientProvider>
	);
}
