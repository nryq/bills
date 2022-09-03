<template>
	<v-container>
		<v-card dark>
			<v-card-title>
				Iniciar sesion
			</v-card-title>
			<v-form @submit.prevent="login">
				<v-card-text>
					
						<label for="username">Username</label>
						<v-text-field id="username" v-model="username" v-bind=config.inputProps></v-text-field>
						<label for="password">Password</label>
						<v-text-field 
							id=password 
							type="password" 
							v-model=password
							v-bind=config.inputProps
						>

						</v-text-field>
						
					
				</v-card-text>
				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn type=submit :loading=logging dark>
						Submit
					</v-btn>
				</v-card-actions>
			</v-form>
		</v-card>		
	</v-container>
</template>

<script>

export default {
	layout: 'login',
	data() {
		return {
			username: undefined,
			password: undefined,
			logging: false,
			config:{
				inputProps:{
					solo: true,

				}
			}
		}
	},
	methods:{
		async login(){

			const pass = this.password, email = this.username;

			try{
				this.logging = true;
				
				let resp = await this.$store.dispatch( 'user/signIn', {email, pass} )
				
				this.$router.push({name: 'billing'})
			}catch(err){
				const errorCode = err.code;
				const errorMessage = err.message;
				console.error(err);
			}

			this.logging = false;
		}
	},
	mounted(){
		// console.log('this.$fire', this.$fire)
		// this.$fire._delegate.onAuthStateChanged(user => {
    //     if (user) {
    //        this.$store.dispatch( 'user/changeSession', user )
    //     }
    // });
	}
}
</script>

<style>

</style>