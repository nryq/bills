export default {
	async signIn({commit}, payload){
		
		const {email, pass}=payload;
		let resp = await this.$fire.auth.signInWithEmailAndPassword(email, pass);
		commit('ON_SIGN_IN', resp)

		return resp;
	},
	async changeSession({commit}, payload){
		commit('ON_SIGN_IN', payload)
	}
}