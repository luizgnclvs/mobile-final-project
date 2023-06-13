import React, { useState } from 'react';
import { Alert, Image, StyleSheet, Text } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { useMutation, useQueryClient } from '@tanstack/react-query';
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
	const queryClient = useQueryClient();

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
			date: date,
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

	const mutation = useMutation({
		mutationFn: handleSubmit,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['ratings'] });
		},
	});


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
				fullStarColor="gold"
				emptyStarColor="gold"
			/>
			<TextInput
				style={styles.input}
				onChangeText={setCommentary}
				value={commentary}
				label="Comentário"
				mode="outlined"
			/>
			 
			<Button  
				onPress={handleSubmit}
				mode='contained'
				style={styles.button}
			> 
				Enviar
			</Button>
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
		width: '90%',
		marginTop:40,
		marginBottom:10,
	},
});
