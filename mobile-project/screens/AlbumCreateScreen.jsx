import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Button, TextInput, View } from 'react-native';
import { Text } from 'react-native-paper';
import { createAlbum } from '../services/album.service';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import useAlbumFormStore from '../stores/album-form.store';

export default function AlbumCreateScreen({ route, navigation }) {
	const queryClient = useQueryClient();

	const {
		name,
		artist,
		coverURL,
		releaseYear,
		setName,
		setArtist,
		setCoverURL,
		setReleaseYear,
	} = useAlbumFormStore();

	const submitNewALbum = () => {
		const albumForm = {
			name: name,
			artist: artist,
			cover_url: coverURL,
			release_year: releaseYear,
		};

		createAlbum(albumForm);
	};

	const mutation = useMutation({
		mutationFn: submitNewALbum,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['albums'] });
		},
	});

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Cadastro de Álbum</Text>
			<TextInput
				label="Nome do Álbum"
				value={name}
				onChangeText={value => setName(value)}
				style={styles.input}
				placeholder="Nome do Álbum"
			/>
			<TextInput
				label="Artista"
				value={artist}
				onChangeText={value => setArtist(value)}
				style={styles.input}
				placeholder="Artista"
			/>
			<TextInput
				label="URL da Capa"
				value={coverURL}
				onChangeText={value => setCoverURL(value)}
				style={styles.input}
				placeholder="URL da Capa"
			/>
			<TextInput
				label="Ano de Lançamento"
				value={releaseYear}
				onChangeText={value => setReleaseYear(value)}
				style={styles.input}
				placeholder="Ano de Lançamento"
			/>
			<Button title="Criar Álbum" onPress={mutation.mutate} />
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
