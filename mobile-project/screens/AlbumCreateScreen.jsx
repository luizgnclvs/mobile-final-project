import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Button, TextInput, View } from 'react-native';
import { Text } from 'react-native-paper';

export default function AlbumCreateScreen({ route, navigation }) {
	const [name, setName] = useState('');
	const [artist, setArtist] = useState('');
	const [coverUrl, setCoverUrl] = useState('');

	const handleCreateAlbum = () => {
		const albumData = {
			name: name,
			artist: artist,
		};

		axiosInstance.post('/albums', albumData)
			.then(response => {
				console.log(response.data);
			})
			.catch(error => {
				console.error(error);
			});
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Cadastro de Álbum</Text>
			<TextInput
				label="Nome do Álbum"
				value={name}
				onChangeText={setName}
				style={styles.input}
				placeholder="Nome do Álbum"

			/>
			<TextInput
				label="Artista"
				value={artist}
				onChangeText={setArtist}
				style={styles.input}
				placeholder="Artista"

			/>
			<TextInput
				label="URL da Capa"
				value={coverUrl}
				onChangeText={setCoverUrl}
				style={styles.input}
				placeholder="URL da Capa"

			/>
			<Button title="Criar Álbum" onPress={handleCreateAlbum} />
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
		marginBottom: 20,
	},
	input: {
		width: '100%',
		marginBottom: 10,
		borderWidth: 1,
		borderRadius: 5,
		padding: 10,
	},
});
