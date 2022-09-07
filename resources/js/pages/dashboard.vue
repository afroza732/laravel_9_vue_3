<template>
    <div>
        Dashboard <br>
        <button type="button" class="btn btn-sm btn-primary" @click="logout">Logout</button>
    </div>
</template>
<script>
    import { useRouter } from 'vue-router';
    import { useStore } from 'vuex';
    export default{
        setup(){
          const router = useRouter();
          const store  = useStore();
          let logout = () =>{
            store.dispatch('remove_token')
            router.push({name:'Login'})
          }
          return{
            logout
          }
        }
    }
</script>