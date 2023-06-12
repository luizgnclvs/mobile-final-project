
import { StyleSheet } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { FlatList } from 'react-native';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
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
		  <View style={styles.titleContainer}>
			<Text variant='headlineSmall' style={styles.title}>Albums</Text>
		  </View>
		  {isFetching && <Text>IS FETCHING</Text>}
		  {data &&
			<View style={styles.flatListContainer}>
			  <FlatList
				data={data}
				renderItem={({item}) => <AlbumPreview album={item} navigation={navigation} />}
				keyExtractor={item => item.id}
			  />
			</View>
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
	},
	titleContainer: {
		alignItems: 'center',
		marginTop: 10,
	  },
	  title: {
		fontSize: 24,
		fontWeight: 'bold',
	  },
	  flatListContainer: {
		flex: 1,
		marginTop: 20,
	  },
});
