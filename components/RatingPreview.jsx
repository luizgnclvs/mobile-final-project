import { useQueryClient } from '@tanstack/react-query';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-paper';
import StarRating from 'react-native-star-rating';

export default function(props) {
	const { rating, navigation } = props;
	const queryClient = useQueryClient();

	const data = queryClient.getQueryData(["albums"]);
	const album = data.find(album => album.id === rating.album_id);

	const date = new Date(rating.date);

	return (
		<TouchableOpacity key={rating.id} style={styles.rating} onPress={() => navigation.navigate('Detail', { album, rating })}>
			{album &&
				<Image source={{ uri: album.cover_url }} style={styles.albumCover} />
			}
			<View>
				<StarRating
					disabled={true}
					maxStars={5}
					rating={rating.score / 2}
					starSize={25}
				/>
				<Text variant='titleMedium'>{date.getDate() + 1}/{date.getMonth() + 1}/{date.getFullYear()}</Text>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	rating: {
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