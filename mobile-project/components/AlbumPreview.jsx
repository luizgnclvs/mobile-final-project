import { StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { View } from 'react-native';

export default function AlbumPreview(props) {
	const { album, navigation } = props;

	return (
		<TouchableOpacity key={album.id} style={styles.album} onPress={() => navigation.navigate('AlbumDetailsScreen', { album })}>
			<Image source={{ uri: album.cover_url }} style={styles.albumCover} />
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
