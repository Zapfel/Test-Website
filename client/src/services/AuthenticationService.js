// hits register endpoint we're building
// backend communication script
// to create the interface for this script see index.js in client/src
import API from '@/services/API'

// object with a couple of methods
// object that allows us to call register method which will
// hit register endpoint

export default {
	register (credentials) {
		// passes the email and pw below to the post method
		// does post request to register endpoint on our express server
		// after creating this we now would create a register endpoint
		// on backend, refer to app.js in client/src folder 
		return API().post('register', credentials)
	},

	Login (credentials){
		return API().post('login',credentials)
	}
}	

//postman app is ment to mimic this part of the code

// how to call from another file
// AuthenticationService.register({
//	email: 'test123@gmail.com',
//	password: 'testpassword123'
// })
