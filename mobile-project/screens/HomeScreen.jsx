import { Button, Text, View } from "react-native";

export default function HomeScreen({ navigation }) {
	return (
		<View>
			<Text>Home Screen</Text>
			<Button title="About" onPress={() => navigation.navigate('About')} />
		</View>
	);
}
