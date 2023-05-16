import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import BottomTab from './screens/BottomTab';

const Client = new QueryClient();

export default function App() {
	return (
		<QueryClientProvider client={Client}>
			<NavigationContainer>
				<BottomTab />
			</NavigationContainer>
		</QueryClientProvider>
	);
}
