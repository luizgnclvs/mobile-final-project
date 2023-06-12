import { Image, StyleSheet } from "react-native";

export default function CoverPreview({ placeholderImageSource, selectedImage }) {
	const imageSource = selectedImage
		? { uri: selectedImage.uri }
		: placeholderImageSource;

	return <Image source={imageSource} style={styles.image} />;
}

const styles = StyleSheet.create({  
	image: {
		width: 300,
		height: 300,
		borderRadius: 15,
		marginBottom: 20,
	},
});
