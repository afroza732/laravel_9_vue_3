<template>
    <div>
        Dashboard <br>
        <button type="button" class="btn btn-sm btn-primary" @click="logout">Logout</button>
    </div>
</template>
<script>
    import { useRouter } from 'vue-router';
    export default{
        setup(){
          const router = useRouter();
          let logout = () =>{
            localStorage.removeItem('token')
            router.push({name:'Login'})
          }
          return{
            logout
          }
        }
    }
</script>