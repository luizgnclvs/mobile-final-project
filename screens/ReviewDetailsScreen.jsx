import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import StarRating from 'react-native-star-rating';

export default function ReviewDetailsScreen({ route }) {
	const { album, rating } = route.params;

	return (
		<View style={styles.container}>
			<Text style={styles.title}>{album.name}</Text>
			<Text style={styles.subtitle}>{album.artist}</Text>
			<Image source={{ uri: album.cover_url }} style={styles.albumCover} />
			<View style={styles.reviewContainer}>
				<StarRating
					disabled={true}
					maxStars={5}
					rating={rating.score / 2}
					starSize={30}
					fullStarColor="gold"
					emptyStarColor="gold"
				/>
				<Text style={styles.comment}>{rating.commentary}</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 16,
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
		marginBottom: 10,
	},
	reviewContainer: {
		flexDirection: 'column',
		alignItems: 'center',
		marginBottom: 16,
	},
	rating: {
		fontSize: 16,
		fontWeight: 'bold',
		marginBottom: 4,
	},
	comment: {
		fontSize: 14,
		textAlign: 'center',
		marginTop: 16,
	},
});


