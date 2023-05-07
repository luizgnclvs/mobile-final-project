import * as React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function AlbumReviewScreen({ route, navigation }) {
  const { album } = route.params;

  const [comment, setComment] = React.useState('');
  const [rating, setRating] = React.useState(0);

  function handleCommentChange(value) {
    setComment(value);
  }

  function handleRatingChange(value) {
    setRating(value);
  }

  function handleSubmit() {
    // Aqui você pode enviar a avaliação do usuário para o servidor ou para o banco de dados local.
    // Você pode usar bibliotecas como axios ou fetch para isso.
  }

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
        value={rating}
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
