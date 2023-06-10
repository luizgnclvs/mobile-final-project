
import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native';
import { Text } from 'react-native';
import { TextInput } from 'react-native';
import { View } from 'react-native';
import StarRating from 'react-native-star-rating';

import useStore from '../stores/rating.store';

export default function AlbumReviewScreen({ route, navigation }) {
	if (!route.params || !route.params.album) {
		return (
			<View style={styles.container}>
				<Text>No album selected.</Text>
			</View>
		);
	}

	const { album } = route.params;
  const addReview = useStore((state) => state.addReview);

  const [comment, setComment] = React.useState('');
  const [rating, setRating] = React.useState(0);

  const handleCommentChange = (value) => {
    setComment(value);
  };

  const handleRatingChange = (value) => {
		if (!isNaN(value)) setRating(Number(value));
	}

  const handleSubmit = () => {
    addReview(album.id, comment, rating);
    navigation.goBack();
  };

	return (
		<View style={styles.container}>
			<Text style={styles.title}>{album.name}</Text>
			<Text style={styles.subtitle}>{album.artist}</Text>
			
      <StarRating
        disabled={false}
        maxStars={5}
        rating={rating}
        selectedStar={(rating) => handleRatingChange(rating)}
        starSize={30}
      />
      <TextInput
				style={styles.input}
				placeholder="Comentário"
				onChangeText={handleCommentChange}
				value={comment}
			/>
			 
			<Button title="Enviar" onPress={handleSubmit} />
		</View>
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
