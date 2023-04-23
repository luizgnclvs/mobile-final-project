import { Button, Text, View } from "react-native";

export default function AboutScreen({ navigation }) {
	return (
		<View>
			<Text>About Screen</Text>
			<Button title="Home" onPress={() => navigation.navigate('Home')} />
		</View>
	);
}
