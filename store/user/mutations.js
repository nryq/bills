export default {
	ON_SIGN_IN:(state, response)=>{
		state.username = response.user.email
	}
}