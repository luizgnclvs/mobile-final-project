
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { View } from 'react-native';

export default function AboutScreen({ navigation }) {
	return (
		<View style={styles.container}>
			<Text variant='headlineSmall' style={styles.text}>O QUE SOMOS?</Text>
			<Text variant='bodyLarge' style={styles.text}>
				Bem-vindo(a) ao nosso incrível aplicativo de música! Aqui você encontrará uma experiência única para se conectar com suas paixões musicais.
				Nosso app é perfeito para os amantes de música, especialmente os jovens que estão sempre em busca de novos sons e artistas.
				Com nosso aplicativo, você pode cadastrar seus álbuns favoritos, avaliá-los e compartilhar suas opiniões através de reviews.
				Imagine poder explorar o que outras pessoas estão ouvindo, conhecer suas recomendações e descobrir novos artistas que estão em alta.
				Com nosso app, você terá acesso a um verdadeiro universo musical, onde poderá descobrir novas músicas que combinam perfeitamente com o seu estilo.
				Queremos proporcionar a você uma experiência completa e envolvente, onde a música seja o centro das atenções.
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
