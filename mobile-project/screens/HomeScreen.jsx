import { FlatList, Button, View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import AlbumPreview from '../components/AlbumPreview';

const albumList = [
	{
		id: 1,
		name: 'Rumours',
		artist: 'Fleetwood Mac',
		cover: require('../assets/albums/rumours.jpg'),
	},
	{
		id: 2,
		name: 'Thriller',
		artist: 'Michael Jackson',
		cover: require('../assets/albums/thriller.jpg'),
	},
	{
		id: 3,
		name: 'The Dark Side of the Moon',
		artist: 'Pink Floyd',
		cover: require('../assets/albums/dark_side_of_the_moon.jpg'),
	},
];

export default function HomeScreen({ navigation }) {
	return (
		<View style={styles.container}>
			<Text variant='headlineMedium'>Albums</Text>
			<FlatList
				data={albumList}
				renderItem={({item}) => <AlbumPreview album={item} navigation={navigation} />}
				keyExtractor={item => item.id}

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
