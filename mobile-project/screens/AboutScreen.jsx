
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { View } from 'react-native';

export default function AboutScreen({ navigation }) {
	return (
		<View style={styles.container}>
			<Text variant='headlineMedium' style={styles.text}>Sobre o App de Músicas</Text>
			<Text variant='bodyMedium' style={styles.text}>
				Este aplicativo foi criado para ajudá-lo a descobrir novas músicas e artistas.
				Você pode explorar nossa biblioteca de músicas e álbuns, ouvir amostras e adicionar suas favoritas à sua lista de reprodução.
				Se você tiver alguma dúvida ou comentário, não hesite em entrar em contato conosco.
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 10,
		flex: 1,
		gap: 50,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		textAlign: 'justify',
		paddingHorizontal: 15,
	},
});
