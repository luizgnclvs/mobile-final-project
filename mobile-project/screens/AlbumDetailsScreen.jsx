import { Image, StyleSheet, Text, View, Button} from 'react-native';

export default function AlbumDetailsScreen({ route, navigation }) {
  if (!route.params || !route.params.album) {
    return null;
  }

  const { album } = route.params;

  return (
    <View style={styles.container}>
      <Image source={album.cover} style={styles.albumCover} />
      <Text style={styles.title}>{album.name}</Text>
      <Text style={styles.subtitle}>{album.artist}</Text>
      <Text style={styles.description}>
        Esse album é perfeito!
      </Text>
      <Button title="Review" onPress={() => navigation.navigate('AlbumReviewScreen', { album: album })} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#fff',
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
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    textAlign: 'justify',
  },
});
