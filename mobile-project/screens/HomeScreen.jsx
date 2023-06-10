
import { StyleSheet } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { FlatList } from 'react-native';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getAlbums } from '../services/album.service';

import AlbumPreview from '../components/AlbumPreview';
import useAlbumStore from '../stores/album.store';

export default function HomeScreen({ navigation }) {
	const { albums, setAlbums } = useAlbumStore();
	const queryClient = useQueryClient();
	const { isLoading, error, data, isFetching } = useQuery({
		queryKey: ["albums"],
		queryFn: getAlbums,
		onSuccess: () => {
			setAlbums(data);
		}
	});

	queryClient.invalidateQueries({ queryKey: ["albums"] });

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
			<Text variant='headlineSmall'>Albums</Text>
			{/* {isFetching && <Text>IS FETCHING</Text>} */}
			{albums &&
				<FlatList
					data={albums}
					renderItem={({item}) => <AlbumPreview album={item} navigation={navigation} />}
					keyExtractor={item => item.id}
				/>
			}
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
