import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import useStore from '../stores/rating.store';

export default function AlbumReviewScreen({ route, navigation }) {
  const { album } = route.params;
  const addReview = useStore((state) => state.addReview);

  const [comment, setComment] = React.useState('');
  const [rating, setRating] = React.useState('');

  const handleCommentChange = (value) => {
    setComment(value);
  };

  const handleRatingChange = (value) => {
    if (!isNaN(value)) {
      setRating(Number(value));
    }
  };

  const handleSubmit = () => {
    addReview(album.id, comment, rating);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{album.name}</Text>
      <Text style={styles.subtitle}>{album.artist}</Text>
      <TextInput
        style={styles.input}
        placeholder="Comentário"
        onChangeText={handleCommentChange}
        value={comment}
      />
      <TextInput
        style={styles.input}
        placeholder="Avaliação (0-5)"
        keyboardType="numeric"
        onChangeText={handleRatingChange}
        value={String(rating)}
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
    padding: 10,
    marginBottom: 10,
    width: '100%',
  },
});
