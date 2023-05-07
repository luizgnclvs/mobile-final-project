import axios from "axios";

const instance = axios.create({
	baseURL: "https://parseapi.back4app.com/classes/",
	headers: {
		"X-Parse-Application-Id": "35i1bwqQYqrdQkdJXbq35zo8wNzKQhTEiR4Jnaqm",
		"X-Parse-REST-API-Key": "hGGjHJor5qvIn95CFWemw1mX2238uRtxN45d4dlR",
	},
});

export default instance;
