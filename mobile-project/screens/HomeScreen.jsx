import { ActivityIndicator, Button, FlatList, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getAlbuns } from '../services/album.service';

import AlbumPreview from '../components/AlbumPreview';

export default function HomeScreen({ navigation }) {
	const queryClient = useQueryClient();
	const { isLoading, error, data, isFetching } = useQuery({
		queryKey: ["albums"],
		queryFn: getAlbuns,
	});

	if (isLoading) {
		return (
			<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
				<Text>Loading</Text>
				<ActivityIndicator size="large" />
			</View>
		);
	}

	if (error) {
		return (
			<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
				<Text>Error: {error.message}</Text>
			</View>
		);
	}

	return (
		<View style={styles.container}>
			<Text variant='headlineMedium'>Albums</Text>
			{isFetching && <Text>IS FETCHING</Text>}
			<FlatList
				data={data.results}
				renderItem={({item}) => <AlbumPreview album={item} navigation={navigation} />}
				keyExtractor={item => item.obejctId}

			/>
			<Button title="About" onPress={() => navigation.navigate('About')} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 10,
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
