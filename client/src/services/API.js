import axios from 'axios' // imports axios library

// connector creation
// returns a connector
// should point to our backend base URL and can be used to hit
// Different end points
export default() => {
	return axios.create({
		baseURL: 'http://localhost:8082/' // baseURL initialization

	})

}