
import { FlatList, StyleSheet, View } from 'react-native';
import { ActivityIndicator, Text } from 'react-native-paper';
import { useQuery, useQueryClient } from '@tanstack/react-query';

import { getAlbums } from '../services/album.service';

import AlbumPreview from '../components/AlbumPreview';

export default function HomeScreen({ navigation }) {
	const queryClient = useQueryClient();
	const { isLoading, error, data, isFetching } = useQuery({
		queryKey: ["albums"],
		queryFn: getAlbums,
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
			<Text variant='headlineMedium' style={styles.title}>Albums</Text>
			{isFetching && <Text style={styles.fetching}>IS FETCHING</Text>}
			{data &&
				<FlatList
					data={data}
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
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		marginBottom: 20,
		marginTop: 10,
	},
	fetching: {
		marginBottom: 10,
	}
});
