import React, { useState } from 'react';
import { Alert, Button, Image, StyleSheet, Text, TextInput } from 'react-native';
import StarRating from 'react-native-star-rating';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { createRating } from '../services/rating.service';


export default function AlbumReviewScreen({ route, navigation }) {
	if (!route.params || !route.params.album) {
		return (
			<KeyboardAwareScrollView contentContainerStyle={styles.container} behavior="height">
				<Text>No album selected.</Text>
			</KeyboardAwareScrollView>
		);
	}

	const { album, coverUrl } = route.params;

	const [score, setScore] = useState(0)
	const [commentary, setCommentary] = useState('');

	const handleScoreChange = (value) => {
		if (!isNaN(value)) setScore(Number(value));
	}

	const formatDate = () => {
		const date = new Date();

		let day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate();
		let month = date.getMonth() > 8 ? date.getMonth + 1 : '0' + (date.getMonth() + 1);

		return `${date.getFullYear()}-${month}-${day}`;
	}

	const handleSubmit = () => {
		const date = formatDate();

		const body = {
			score: score * 2,
			commentary,
			album_id: album.id,
			date,
		}

		try {
			createRating(body);
			Alert.alert('Sucesso', 'Review feita com sucesso!')

			setScore(0);
			setCommentary('');

		} catch(error) {
			console.log(error);
		}
	};


	return (
		<KeyboardAwareScrollView contentContainerStyle={styles.container} behavior="height">
			<Text style={styles.title}>{album.name}</Text>
			<Text style={styles.subtitle}>{album.artist}</Text>
			<Image source={{ uri: coverUrl }} style={styles.albumCover} 
			/>
			<StarRating
				disabled={false}
				maxStars={5}
				rating={score}
				selectedStar={handleScoreChange}
				starSize={30}
			/>
			<TextInput
				style={styles.input}
				placeholder="Comentário"
				onChangeText={setCommentary}
				value={commentary}
			/>
			 
			<Button title="Enviar" onPress={handleSubmit} />
		</KeyboardAwareScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 10,
		backgroundColor: '#fff',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
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
		marginBottom: 20,
	},
	input: {
		borderWidth: 1,
		borderRadius: 5,
		padding: 50,
		marginTop: 30,
		marginBottom: 50,
		width: '100%',
	},
});
