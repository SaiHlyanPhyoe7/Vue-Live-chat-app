<template>
  <div class="container">
    <Navbar></Navbar>
    <chat-window></chat-window>
    <NewChatForm></NewChatForm>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import {watch} from "vue";
import getUser from "@/composables/getUser";
import {useRouter} from "vue-router";
import NewChatForm from "@/components/NewChatForm";
import ChatWindow from "@/components/ChatWindow";
export default {
components:{
  ChatWindow,
  NewChatForm,
  Navbar
},
  setup(){
  let {user}=getUser();
  let router=useRouter()

    watch(user,()=>{
    if(!user.value){
      router.push("/");
    }
  })
  }
}
</script>

<style>

</style>