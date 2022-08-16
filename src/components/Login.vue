<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="login">
      <input type="email" placeholder="email" v-model="email">
      <input type="password" placeholder="password" v-model="password">
      <div v-if="error" class="error">
        {{error}}
      </div>
      <button>Login</button>
    </form>
  </div>
</template>

<script>
import {ref} from "vue";
import useLogin from "../composables/useLogin"
export default {
  setup(){
    let email = ref("");
    let password = ref("");

    let {error,signIn}= useLogin();

    let login = async ()=>{
      let res =await signIn(email.value, password.value)
      if(res){
        console.log(res.user);
      }
    }
    return {login,error,email,password};
  }
}
</script>

<style scoped>

</style>