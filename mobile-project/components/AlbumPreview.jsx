import { Alert, Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-paper'

export default function AlbumPreview(props) {
	const album = props.album;

	function handleAlbumPress(album) {
		Alert.alert(album.name);
	}

	return (
		<TouchableOpacity key={album.id} style={styles.album} onPress={() => handleAlbumPress(album)}>
			<Image source={album.cover} style={styles.albumCover} />
			<View>
				<Text variant='titleLarge'>{album.name}</Text>
				<Text variant='titleMedium'>{album.artist}</Text>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	album: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 10,
	},
	albumCover: {
		width: 50,
		height: 50,
		marginRight: 10,
		borderRadius: 5,
	},
});
