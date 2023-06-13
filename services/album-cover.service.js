import Parse from "parse/react-native.js";
import AsyncStorage from '@react-native-async-storage/async-storage';
import 'react-native-get-random-values';

Parse.setAsyncStorage(AsyncStorage);
Parse.serverURL = 'https://parseapi.back4app.com/';
Parse.initialize('emImppLbrG6yG2NH334Cx898GVcFTY4R6jW3x3Lj', 'bgm8CbuQBxciTIB25jFfEm0k0deia3KHMvktLE1c');

export const saveAlbumCover = async image => {
	try {
		const { base64 } = image;
		const parseFile = new Parse.File('cover.jpg', { base64 });

		return await parseFile.save();
		// const responseFile = await parseFile.save();
		// const Cover = Parse.Object.extend('Cover');
		// const cover = new Cover();
		// cover.set('image', responseFile);

		// await cover.save();
	} catch(error) {
		console.log(error)
	}
};
