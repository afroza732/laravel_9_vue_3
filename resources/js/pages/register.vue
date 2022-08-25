<template>
    <div>
       <div class="container">
			<div class="d-flex justify-content-center h-100" style="margin-top:100px;">
				<div class="card">
					<div class="card-header">
						<h3>Register</h3>
						<p class="text-danger" v-for="error in errors" :key="error">
							<span v-for="err in error" :key="err">{{ err }}</span>
						</p>
					</div>
					<div class="card-body">
						<form @submit.prevent="register" class="mb-3">
                            <div class="input-group form-group">
								<div class="input-group-prepend">
									<span class="input-group-text"><i class="fas fa-user"></i></span>
								</div>
								<input type="text" class="form-control" v-model="form.name"  placeholder="name">
							</div>
							<div class="input-group form-group">
								<div class="input-group-prepend">
									<span class="input-group-text"><i class="fas fa-user"></i></span>
								</div>
								<input type="email" class="form-control" v-model="form.email" placeholder="email">
							</div>
							<div class="input-group form-group">
								<div class="input-group-prepend">
									<span class="input-group-text"><i class="fas fa-key"></i></span>
								</div>
								<input type="password" class="form-control" v-model="form.password" placeholder="password">
							</div>
							<div class="form-group">
								<input type="submit" value="Register" class="btn  login_btn">
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
    </div>
</template>

<script>
import {useRouter } from 'vue-router';
import { ref, reactive } from 'vue';
import axios from 'axios';

export default{
    setup(){
        let form = reactive({
            'name' : '',
            'email' : '',
            'password' : '',
        });
        let errors = ref([]);
        const router = useRouter();
        const register = async() => {
            await axios.post('api/register',form).then(res=>{
                if(res.data.success){
                    localStorage.setItem('token',res.data.token)
                    router.push({name:'Dashboard'});
                }
                errors.value = res.data.errors;
            }).catch(e => {
                errors.value = e.response.data.errors;
            })
        }
        return{
            form,
            register,
            errors
        }
    }
}
</script>