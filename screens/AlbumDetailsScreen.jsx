
import { StyleSheet } from 'react-native';
import { Image } from 'react-native';
import { Text } from 'react-native-paper';
import { View } from 'react-native';
import { Button } from 'react-native-paper';

export default function AlbumDetailsScreen({ route, navigation }) {
	if (!route.params || !route.params.album) {
		return null;
	}

	const { album } = route.params;

	return (
		<View style={styles.container}>
			<Image source={{ uri: album.cover_url }} style={styles.albumCover} />
			<Text style={styles.title}>{album.name}</Text>
			<Text style={styles.subtitle}>{album.artist}</Text>
			<Text style={styles.description}>
				Esse album é perfeito!
			</Text>
			<Button 
				onPress={() => navigation.navigate('Nova Review', { album: album, coverUrl: album.cover_url, })}
				mode='contained'
				style={styles.button}
			> 
				Fazer Review
			</Button>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 10,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	button: {
		marginBottom: 20,
	},
	albumCover: {
		width: 200,
		height: 200,
		marginBottom: 20,
		borderRadius: 5,
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 10,
	},
	subtitle: {
		fontSize: 18,
		fontWeight: 'bold',
		marginBottom: 20,
	},
	description: {
		textAlign: 'justify',
		marginBottom: 30,
	},
});
