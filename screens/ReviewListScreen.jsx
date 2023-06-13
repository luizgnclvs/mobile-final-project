import { FlatList, StyleSheet, View } from 'react-native';
import { ActivityIndicator, Text } from 'react-native-paper';
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getRatings } from "../services/rating.service";
import RatingPreview from '../components/RatingPreview';

export default function ReviewListScreen({ navigation }) {
	const queryClient = useQueryClient();
	const { isLoading, error, data, isFetching } = useQuery({
		queryKey: ["ratings"],
		queryFn: getRatings,
	});

	if (isLoading) {
		return (
			<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
				<Text>Loading</Text>
				<ActivityIndicator size="large" />
			</View>
		);
	}

	if (error) {
		return (
			<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
				<Text>Error: {error.message}</Text>
			</View>
		);
	}

	return (
		<View style={styles.container}>
			{isFetching && <Text style={styles.fetching}>IS FETCHING</Text>}
			{data &&
				<FlatList
					data={data.filter(rating => !!rating.album_id)}
					renderItem={({item}) => <RatingPreview rating={item} navigation={navigation} />}
					keyExtractor={item => item.id}
					style={styles.flatlist}
				/>
			}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 10,
		flex: 1,
		backgroundColor: '#fff',
		justifyContent: 'center',
		alignItems: 'flex-start',
	},
	title: {
		marginBottom: 20,
		marginTop: 10,
	},
	fetching: {
		marginBottom: 10,
	},
	flatlist: {
		width: '100%',
		paddingHorizontal: 20,
	},
});