import { Alert, StyleSheet, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import * as ImagePicker from 'expo-image-picker';

import CoverPreview from '../components/CoverPreview';

import { createAlbum } from '../services/album.service';
import { saveAlbumCover } from '../services/album-cover.service';
import { albumArtistStore, albumCoverURLStore, albumNameStore, albumReleaseYearStore } from '../stores/album-form';
import useAlbumCoverStore from '../stores/album-cover.store';

export default function AlbumCreateScreen({ route, navigation }) {
	const queryClient = useQueryClient();
	const placeholderImage = require('../assets/placeholder.jpg');

	const { name, setName } = albumNameStore();
	const { artist, setArtist } = albumArtistStore();
	const { url, setURL } = albumCoverURLStore();
	const { year, setYear} = albumReleaseYearStore();
	const { image, setImage } = useAlbumCoverStore();

	const handleYearInput = (value) => { if (!isNaN(value)) setYear(value) };

	const selectAlbumCover = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			allowsEditing: true,
			aspect: [1, 1],
			quality: 1,
			base64: true,
		});

		if (!result.canceled) setImage(result.assets[0]);
		else if (!image) Alert.alert('Importante','É necessário selecionar uma imagem de capa para o álbum.');
	};

	const submitNewALbum = async () => {
		const cover = await saveAlbumCover(image);

		if (!!cover) setURL(cover._url);
		else {
			Alert.alert('Erro', 'Falha ao salvar a capa do álbum.');
			return null;
		}

		const body = {
			name: name,
			artist: artist,
			cover_url: url,
			release_year: year,
		};

		try {
			await createAlbum(body);
			Alert.alert('Sucesso', 'Novo álbum foi cadastrado com sucesso.');

			setName('');
			setArtist('');
			setURL(null);
			setYear(new Date().getFullYear());
			setImage(null);

		} catch(error) {
			console.log(error);
		}
	};

	const mutation = useMutation({
		mutationFn: submitNewALbum,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['albums'] });
		},
	});

	return (
		<KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }} behavior="margin" keyboardShouldPersistTaps="handled">
			<View style={styles.container}>
				<CoverPreview
					placeholderImageSource={placeholderImage}
					selectedImage={image}
				/>
				<Button
					mode='contained'
					icon='camera'
					onPress={selectAlbumCover}
					style={styles.button}
				>
					Selecionar Foto
				</Button>
				<TextInput
					label="Nome do Álbum"
					mode="outlined"
					value={name}
					onChangeText={setName}
					style={styles.input}
					placeholder="Nome do Álbum"
				/>
				<TextInput
					label="Artista"
					mode="outlined"
					value={artist}
					onChangeText={setArtist}
					style={styles.input}
					placeholder="Artista"
				/>
				<TextInput
					label="Ano de Lançamento"
					mode="outlined"
					value={String(year)}
					onChangeText={handleYearInput}
					style={styles.input}
					placeholder="Ano de Lançamento"
					maxLength={4}
				/>
				<Button
					mode='contained'
					icon='plus'
					onPress={mutation.mutate}
				>
					Criar Álbum
				</Button>
			</View>
		</KeyboardAwareScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 10,
		backgroundColor: '#fff',
		flex: 1,
		alignItems: 'center',
	},
	input: {
		width: '90%',
		marginBottom: 10,
	},
	button: {
		marginBottom: 20,
	},
});
