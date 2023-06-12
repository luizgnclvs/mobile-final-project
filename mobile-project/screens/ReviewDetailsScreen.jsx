import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import StarRating from 'react-native-star-rating';

export default function ReviewDetailsScreen({ route }) {
  const { album, rating, comment, coverUrl } = route.params;
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const newReview = {
      albumName: album.name,
      artistName: album.artist,
      rating,
      comment,
    };

    setReviews([newReview]);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{album.name}</Text>
      <Text style={styles.subtitle}>{album.artist}</Text>
      <Image source={{ uri: coverUrl }} style={styles.albumCover} />

      {reviews.map((review, index) => (
        <View key={index} style={styles.reviewContainer}>
          <StarRating
                        disabled={true}
                        maxStars={5}
                        rating={review.rating}
                        starSize={30}
                        fullStarColor="gold"
                        emptyStarColor="gold"
        />
        <Text style={styles.comment}>{review.comment}</Text>
        </View>
      ))}
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


