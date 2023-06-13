import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider as PaperProvider } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';

import AboutScreen from './screens/AboutScreen';
import AlbumDetailsScreen from './screens/AlbumDetailsScreen';
import AlbumReviewScreen from './screens/AlbumReviewScreen';
import AlbumCreateScreen from './screens/AlbumCreateScreen';
import HomeScreen from './screens/HomeScreen';
import ReviewDetailsScreen from './screens/ReviewDetailsScreen';
import ReviewListScreen from './screens/ReviewListScreen';

const Client = new QueryClient();
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name='Home' component={HomeScreen} options={{
					headerTitleStyle: { color: '#663399' },
				}}/>
			<Stack.Screen name='Álbum' component={AlbumDetailsScreen} options={{
					headerTitleStyle: { color: '#663399' },
				}} />
			<Stack.Screen name='Nova Review' component={AlbumReviewScreen} options={{
					headerTitleStyle: { color: '#663399' },
				}}/>
		</Stack.Navigator>
	);
};

const ReviewsStack = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name='List'
				component={ReviewListScreen}
				options={{
					headerShown: false,
					headerTitleStyle: { color: '#663399' }
				}}
			/>
			<Stack.Screen
				name='Detail'
				component={ReviewDetailsScreen}
				options={{
					headerShown: false,
					headerTitleStyle: { color: '#663399' }
				}}
			/>
		</Stack.Navigator>
	);
}

export default function App() {
	return (
		<QueryClientProvider client={Client}>
			<PaperProvider>
				<NavigationContainer>
					<Tab.Navigator initialRouteName=' Home '  screenOptions={{
              tabBarActiveTintColor: '#663399', 
            }}>
						<Tab.Screen
							name=' Home '
							component={HomeStack}
							options={{
								tabBarIcon: ({ color, size }) => (
									<FontAwesome name="home" color={color} size={size} />
								),
								headerShown: false,
							}}
						/>
						<Tab.Screen
							name='Reviews'
							component={ReviewsStack}
							options={{
								headerTitleStyle: { color: '#663399' },
								tabBarIcon: ({ color, size }) => (
									<FontAwesome name="list" color={color} size={size} />
								),
							}}
						/>
						<Tab.Screen
							name='Cadastrar Álbum'
							component={AlbumCreateScreen}
							options={{
								headerTitleStyle: { color: '#663399' },
								tabBarIcon: ({ color, size }) => (
									<FontAwesome name="plus" color={color} size={size} />
								),
							}}
						/>
						<Tab.Screen
							name='Sobre'
							component={AboutScreen} 
							options={{
								headerTitleStyle: { color: '#663399' },
								tabBarIcon: ({ color, size }) => (
									<FontAwesome name="info-circle" color={color} size={size} />
								),
							}}
						/>
					</Tab.Navigator>
				</NavigationContainer>
			</PaperProvider>
		</QueryClientProvider>
	);
}
