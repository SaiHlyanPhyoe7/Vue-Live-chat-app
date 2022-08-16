import {ref} from "vue";
import {auth} from "@/firebase/config";

let createAccount = async (email,password,displayName)=>{
    try {
        let res = await auth.createUserWithEmailAndPassword(email, password);
        if (!res){
            throw new Error("could not create new user")
        }
        await res.user.updateProfile({displayName})
        return res;
    }catch (err){
        error.value=err.message;
    }
}
let error = ref(null);
let useSignup=()=>{

    return {error,createAccount};
}

export default useSignup;