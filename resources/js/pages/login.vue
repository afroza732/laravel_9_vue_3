<template>
    <div>
        <div class="container">
			<div class="d-flex justify-content-center h-100" style="margin-top:100px;">
				<div class="card">
					<div class="card-header">
						<h3>Sign In</h3>
						<p class="text-danger" v-for="error in errors" :key="error">
							<span v-for="err in error" :key="err">{{ err }}</span>
						</p>
					</div>
					<div class="card-body">
						<form @submit.prevent="login" class="mb-3">
							<div class="input-group form-group">
								<div class="input-group-prepend">
									<span class="input-group-text"><i class="fas fa-user"></i></span>
								</div>
								<input type="text" class="form-control" v-model="form.email" placeholder="email">
								
							</div>
							<div class="input-group form-group">
								<div class="input-group-prepend">
									<span class="input-group-text"><i class="fas fa-key"></i></span>
								</div>
								<input type="password" class="form-control" v-model="form.password" placeholder="password">
							</div>
							<div class="form-group">
								<input type="submit" value="Login" class="btn  login_btn">
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
    </div>
</template>
<script>

import axios from 'axios';
import {reactive, ref} from 'vue';
import { useRouter } from 'vue-router';
export default {
    setup(){
		let form = reactive({
			email:'',
			password:''
		});
		let errors = ref([]);
		const router = useRouter();
		const login = async() => {
			await axios.post('api/login',form)
			.then(res=>{
				if(res.data.success == true){
					localStorage.setItem('token',res.data.token)
					router.push({name : 'Dashboard'})
				}
				errors.value = res.data.errors;
			}).catch(e=>{
				errors.value = e.response.data.errors;
			});
		}
		return{
			form,
			login,
			errors,
			router
		}
	}
}
</script>
